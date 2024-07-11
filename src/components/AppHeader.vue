<template>
      <span class="font-bold text-2xl px-3">{{section}}</span>
  </template>
  
  <script>
import { String } from 'core-js';

  export default {
    name: 'AppHeader',
    props: {
      section:String
    }
  }
  </script>