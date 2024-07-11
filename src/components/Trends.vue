<template>
<div v-for="item in items" :key="item.id" class="p-2 border-b border-slate-200">
   <span class="text-sm text-slate-700">Trandg in UsA</span>
   <h3 class="font-bold">{{item.title}}</h3>
   <p class="text-base text-slate-700">122K tweets</p>
   <p class="text-base text-slate-700">tina kpymk jlhmjvf</p>
</div>    
</template>
  
  <script>
  import axios from 'axios';
  export default {
    data() {
      return{
        items:'',
      }
    },
    name: 'Trends',
    props: {
      
    },
    async mounted() {
    this.getTrands();
  },
  methods:{
    async getTrands(){
      let res = await axios.get('http://localhost:3000/trends');
      this.items = res.data;
    }
  }
    
  }
  </script>