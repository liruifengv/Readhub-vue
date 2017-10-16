<template>
  <div class="vindex">
    <vheader></vheader>
    <div class="nav">
      <router-link to="/">热门话题</router-link>
      <router-link to="/TmtNews">科技动态</router-link>
      <router-link to="/DeveloperInfo">开发者资讯</router-link>
    </div>
    <router-view></router-view>
    <backTop></backTop>
  </div>
</template>

<script>
  import vheader from '../components/vheader'
  import backTop from '../components/BackTop'
  export default {
    name: 'vindex',
    components: {
      vheader, backTop
    }
  }
</script>

<style scoped>
  .vindex{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
    z-index: 999;
  }
  body{
    margin: 0;
  }
  h3{
    color: #607d8b;
    font-family: 宋体;
    font-size: 24px;
    font-weight: 900;
  }
  .nav{
    height: 30px;
    background-color: #fff;
    width: 100%;
    border-bottom: 1px solid #ddd;
    padding-bottom:10px;
  }
  .nav a{
    height: 40px;
    line-height: 30px;
    display: block;
    font-size: 14px;
    float: left;
    color: #aaa;
    padding: 0 10px;
    text-decoration: none;
  }
  .router-link-exact-active{
    color: #607d8b;
    border-bottom: 2px solid #607d8b;
  }
  a.router-link-exact-active{
    color: #607d8b;
  }
</style>
