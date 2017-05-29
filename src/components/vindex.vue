<template>
  <div class="vindex">
    <vheader></vheader>
    <div class="nav">
      <router-link to="/HotTopic">热门话题</router-link>
      <router-link to="/TmtNews">TMT 新闻</router-link>
      <router-link to="/DeveloperInfo">开发者资讯</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
  import vheader from '../components/vheader'
  export default {
    name: 'vindex',
    components: {vheader}
  }
</script>

<style>
  .vindex{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
  }
  body{
    margin: 0;

  }
  .nav{
    height: 30px;
    background-color: #607d8b;
  }
  .nav a{
    height: 30px;
    line-height: 30px;
    display: block;
    font-size: 14px;
    float: left;
    color: #fff;
    padding: 0 15px;
    text-decoration: none;
  }
  .nav a:focus{
    background-color: #78909c;
  }

</style>
