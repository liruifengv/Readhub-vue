<template>
  <div class="vindex">
    <vheader></vheader>
    <div class="nav">
      <router-link to="/" tag="span">热门话题</router-link>
      <router-link to="/TmtNews" tag="span">科技动态</router-link>
      <router-link to="/DeveloperInfo" tag="span">开发者资讯</router-link>
    </div>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
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
    background: #eee
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
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    padding-bottom:10px;
    display: flex;
    justify-content:space-around;
  }
  .nav span{
    height: 30px;
    line-height: 30px;
    display: block;
    font-size: 16px;
    float: left;
    color: #737373;
    text-decoration: none;
    padding-bottom:5px;
    padding-top:5px;
    cursor: pointer;
  }
  span.router-link-exact-active{
    color: #246394
  }
</style>
