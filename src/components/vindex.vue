<template>
  <div class="vindex">
    <vheader></vheader>
    <div class="nav">
      <router-link to="/">热门话题</router-link>
      <router-link to="/TmtNews">TMT 新闻</router-link>
      <router-link to="/DeveloperInfo">开发者资讯</router-link>
    </div>
    <router-view></router-view>

    <div id="ReturnTop" class="hidden">
      <a id="backtotop" href="#">↑</a>
    </div>
  </div>
</template>

<script>
  import vheader from '../components/vheader'

  window.onscroll = function (e) {
    if (document.body.scrollTop > 200) {
      document.getElementById('ReturnTop').classList.remove('hidden')
    } else {
      document.getElementById('ReturnTop').classList.add('hidden')
    }
  }

  export default {
    name: 'vindex',
    components: {vheader},
    methods: {
      backtotop: function () {
        document.body.animate({
          scorllTop: 0
        }, 500)
      }
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
  .router-link-exact-active{
    background-color: #78909c;
  }
  #ReturnTop{
    position: fixed;
    right: 40px;
    bottom: 40px;
    border: 1px solid #ddd;
    background-color: #aaa;
    width: 40px;
    text-align: center;
    -webkit-border-radius: 80%;
    -moz-border-radius: 80%;
    border-radius: 80%;
    line-height: 1;
    z-index: 1000;
    cursor: pointer;
  }
  #ReturnTop a{
    font-size: 20px;
    padding: 10px;
    display: block;
    color: #fff;
    text-decoration: none;
  }
  .hidden{
      display: none;
  }
</style>
