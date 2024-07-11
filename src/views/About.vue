<template>
    <div>
        <NavBar :msg="msg"/>
      <h1>About Page</h1>
    </div>
  </template>
  
  <script>
  import NavBar from '../components/NavBar.vue';
  export default {
    name: 'AboutPage',
    components: {
    NavBar
  },
  data(){
    return {
        msg:'nme'
    }
  }
  }
  </script>