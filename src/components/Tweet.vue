<template>
      <img class="w-12 h-12 rounded-3xl border-2" src="../assets/img/téléchargement__3_-removebg-preview.png" alt="">
      <div class="bg-slate-200 p-1 rounded-3xl w-full">
        <input @keyup.enter="tweet" v-model="Discription" class="bg-transparent p-1 px-4 outline-none w-full" type="text" placeholder="What's happening ?">
      </div>
        <i class="fa-regular fa-image text-2xl"></i>
        <img class="" width="30px" src="../assets/img/gif_box_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png" alt="">
        <i class="fa-solid fa-chart-simple text-2xl rotate-90"></i>
  </template>
  
  <script>
import axios from 'axios';

  export default {
    
    name: 'Tweet',
    data(){
      return{
        Discription:'',
        like:false,
        NamberLike:0,
        commant:[],
        namberCommant:0,
        classIcon:'fa-regular fa-heart',
        currentDate: '',
        MayName:'salwa',
        image:'data:image/jpeg;base64,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'
      }
        
    },
    props: {
      
    },
    methods:{
      async tweet(){
        if(this.Discription !==""){
          this.currentDate = new Date().toLocaleDateString();
           let resoult= await axios.post('http://localhost:3000/posts',{
            Discription: this.Discription,
            Date: this.currentDate,
            Name: this.MayName,
            image: this.image,
            like:this.like,
            NamberLike:this.NamberLike,
            classIcon:this.classIcon,
            commant:this.commant,
            namberCommant:this.namberCommant
          })
          window.location.reload();
        }
      }
    }
  }
  </script>