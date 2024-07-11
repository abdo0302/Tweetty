<template>
  <div>
    <div 
      v-for="item in items" 
      :key="item.id" 
      class="flex p-3 pb-5 gap-3 relative border-b border-slate-200"
    >
      <img 
        class="w-12 h-12 rounded-3xl border-2" 
        :src="item.image" 
        alt=""
      >
      <div class="w-full">
        <h3 class="font-bold text-lg">{{ item.Name }}<span class="font-normal ml-3 text-sm">{{ item.Date }}</span></h3>
        <p>{{ item.Discription }}</p>
        <div class="flex justify-between pr-20 mt-4">
          <span @click="showComant(item.id)" class="flex items-center gap-1"><i class="fa-regular fa-comment"></i> {{ item.namberCommant }}</span>
          <span><i class="fa-solid fa-repeat"></i> 5</span>
          <span @click="like(item.id,item.like)"><i :id="item.like" :class="item.classIcon"></i> {{item.NamberLike}}</span>
          <span><i class="fa-solid fa-arrow-up-from-bracket"></i></span>
        </div>
        <i class="fa-solid fa-angle-right rotate-90 absolute top-4 right-6"></i>
      </div>
    </div>
    <Comment :isvisable="isvisable" :idPost="idPost" :items="items" @update:isvisable="updateIsVisible"/>
  </div>
</template>

<script>
import axios from 'axios';
import Comment from  '../components/comments.vue';
export default {
  name: 'Posts', 
  data() {
    return {  
      items: [],
      isvisable:false,
      idPost:0
      
    };
  },
  components: {
    Comment
  },
  mounted() {
    this.getPost();
  },
  methods: {
    async getPost() {
      try {
        let res = await axios.get('http://localhost:3000/posts');
        this.items = res.data;
      } catch (error) {
        console.error("There was an error fetching the posts:", error);
      }
    },
    async like(id,islike){
      let item = this.items.find(item => item.id === id);
      item.like = !islike;
      if(islike){
        item.classIcon="fa-regular fa-heart"
        item.NamberLike--;
      }else{
        item.classIcon="fa-solid fa-heart"
        item.NamberLike++;
      }
      let resoult=await axios.put('http://localhost:3000/posts/'+id,item)
  },
  showComant(id){
    this.isvisable=true;
    this.idPost=id;

  },
  updateIsVisible(newValue) {
      this.isvisable = newValue
        }
}
};
</script>

<style scoped>
/* Styles optionnels */
</style>
