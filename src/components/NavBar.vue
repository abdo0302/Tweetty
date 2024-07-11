<template>
  <div class="px-14 max-lg:px-5 max-lg:pl-14 pt-1 max-lg:flex max-lg:flex-col max-lg:items-center max-sm:p-3">
    <AppLogo/>
    <nav class="mt-4">
      <span v-for="nav in nave" :key="nav.name" class="flex items-center gap-5 font-bold text-lg p-3 pr-10 max-lg:pr-3 rounded-3xl w-fit active hover:bg-slate-200/90"><i :class="nav.icone"></i><span class="max-lg:hidden">{{ nav.name }}</span></span>
    </nav>
  </div>
  <div class="flex justify-center mt-6">
    <span class="bg-sky-500 px-24 max-xl:px-16 max-lg:px-4 max-lg:ml-7 max-sm:ml-0 py-3 rounded-3xl text-white shadow-md shadow-black/45 hover:bg-sky-600/80 hover:shadow-black/0">Tweet</span>
  </div>
</template>

<script>
import AppLogo from './Logo.vue';
export default {
  name: 'NavBar',
  components: {
    AppLogo
  },
  props: {
    nave: Array
  }
}
</script>  
<style>
  
</style>