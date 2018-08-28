<template>
  <div id="app">
    <vindex/>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
    <back-top></back-top>
  </div>
</template>

<script>
  import backTop from './components/BackTop'
  import vindex from './components/vindex'
  export default {
    name: 'app',
    components: {
      vindex,
      backTop
    }
  }
</script>

<style scoped>
  html{
    background: #fff
  }
  body{
    padding: 0;
    margin: 0;
    background: #fff
  }
</style>
