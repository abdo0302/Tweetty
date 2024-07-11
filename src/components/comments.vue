<template>
  <section v-if="isvisable" class="fixed z-50 top-0 left-0 w-full h-screen bg-black/40 flex justify-center items-center "> 
    <div class="bg-white w-1/4 p-7 py-12 relative flex justify-between rounded-lg">
        <div class="flex gap-4 items-center w-full">
            <input v-model="contentCommant" class="w-11/12 border-2 outline-none p-3 rounded-lg" type="text" placeholder="Post your reply">
            <i @click="sendComment" class="fa-regular fa-paper-plane text-3xl "></i>
        </div>
        
        <i @click="closeComment" class="fa-solid fa-x absolute top-1 left-1 text-xs font-bold hover:bg-slate-300 p-1 px-2 rounded-full"></i>
    </div>
  </section>   
</template>

<script>
import axios from 'axios';
import { integer } from '@vuelidate/validators';

export default{
    name:'Comment', 
    data(){
        return{
            contentCommant:''
        }
    },
    props:{
        isvisable:Boolean,
        idPost:integer,
        items:Array

    },
    methods:{
        closeComment(){
            this.$emit('update:isvisable', false)
        },
        async sendComment(){
            if(this.contentCommant){
                let item = this.items.find(item => item.id === this.idPost);
                item.commant.push(this.contentCommant)
                item.namberCommant++
                let resoult=await axios.put('http://localhost:3000/posts/'+this.idPost,item)
                this.contentCommant=''
                this.$emit('update:isvisable', false)
            }
            
        }

    },
    
}
</script>