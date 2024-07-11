<template>
    <section class="w-screen h-screen flex ">
        <aside class="navbar max-xl:w-64 max-lg:w-fit w-80 fixed top-0 left-0 h-screen border-2 border-r-slate-200 border-t-0">
              <NavBar :nave="nave"/>
        </aside>
        <main class="main w-full ml-80 max-xl:ml-64 max-lg:ml-36 max-md:w-3/4 max-sm:ml-24 flex">
            <div class="w-625 max-xl:w-550 home max-md:w-full border-r border-slate-200 relative">
               <div class="header bg-white/90 border border-slate-200 border-l-0 border-t-0 py-3 fixed z-30 w-625 max-xl:w-550 max-md:w-3/4">
                 <AppHeader :section="section"/>
               </div>
               <div class="mt-14 flex gap-3 items-center w-full border-b border-slate-200 p-3">
                  <Tweet/>
               </div>
               <!--post-->
                <div >
                  <Posts/>
                </div>
              
            </div>
            <div class="max-md:hidden navbarTrends relative w-80">
              <div class="flex flex-col justify-center items-center px-5 py-2 fixed bg-white">
                <Search/>
              </div>
              <div class="mt-16 ml-4 bg-slate-100 rounded-xl">
                  <div class="flex items-center justify-between p-3 border-b border-slate-200"> <h3 class="font-bold text-lg">Trends for you</h3> <i class="fa-solid fa-gear"></i></div>
                  <!-- trends -->
                    <Trends/>
                 </div>
            </div>
        </main>
    </section>
</template>
  
  <script>
  import NavBar from '../components/NavBar.vue';
  import AppHeader from '../components/AppHeader.vue';
  import Search from '../components/Search.vue'
  import Tweet from '../components/Tweet.vue';
  import Posts from '../components/Posts.vue';
  import Trends from '../components/Trends.vue';

  export default {
    name: 'HomePage',
    components: { NavBar,AppHeader,Search,Tweet,Posts,Trends },
    data(){
      return{
        section: 'Home',
        nave:[
          {icone:'fa-solid fa-house-user text-2xl',name:'Home'},
          {icone:'fa-solid fa-hashtag text-2xl',name:'Explore'},
          {icone:'fa-regular fa-bell text-2xl',name:'Notifications'},
          {icone:'fa-regular fa-envelope text-2xl',name:'Messages'},
          {icone:'fa-regular fa-bookmark text-2xl',name:'Bookmarks'},
          {icone:'fa-regular fa-rectangle-list text-2xl',name:'Lists'},
          {icone:'fa-solid fa-user text-2xl',name:'Profile'},
          {icone:'fa-solid fa-circle-info text-2xl',name:'More'}

        ]
      }
    }
  }
  </script>