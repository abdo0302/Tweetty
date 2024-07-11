<template>
    <div class="bg-slate-200/70 px-3 py-2 w-72 rounded-3xl flex items-center relative">
       <i class="fa-solid fa-magnifying-glass text-slate-500"></i>
       <input @input="search" v-model="searchQuery" class=" bg-transparent w-full outline-none pl-3" type="text" placeholder="Search Twitter">
    </div>
    <div v-if="items.length>0" class="bg-white border-2 border-t-0 w-4/5 p-3 absolute top-12 flex flex-col gap-2 shadow-lg">
      <h3 v-for="(item ,i) in items" :key="i" class="hover:bg-slate-200 p-2 bg-slate-100">{{ item.name }}</h3>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Search',
  data(){
    return{
      searchQuery: '',
      items:[]
    }
    
  },
  methods: {
    async search() {
      if (this.searchQuery.trim() === '') {
        this.items = [];
        return;
      }

      try {
        const response = await axios.get(`http://localhost:3000/users?name_like=${this.searchQuery}`);
        this.items = response.data;
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    }

    },
}
</script>