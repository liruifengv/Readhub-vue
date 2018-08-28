<template>
  <div class="vindex">
    <vheader></vheader>
    <div class="nav">
      <div class="nav-wrapper">
        <router-link to="/" exact tag="span">热门话题</router-link>
        <router-link to="/news" tag="span">科技动态</router-link>
        <router-link to="/tech" tag="span">开发者资讯</router-link>
        <router-link to="/blockchain" tag="span">区块链快讯</router-link>
        <router-link to="/jobs" tag="span">招聘行情</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import vheader from '../components/vheader'
  export default {
    name: 'vindex',
    components: {
      vheader
    }
  }
</script>

<style scoped>
  .vindex{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
    z-index: 999;
    background: #fff;
    padding: 10px 10px 0 10px 
  }
  h3{
    color: #607d8b;
    font-family: 宋体;
    font-size: 24px;
    font-weight: 900;
  }
  .nav{
    margin-top: 50px;
    height: 50px;
    line-height: 50px;
    background-color: #fff;
    overflow: hidden;
    position: relative;
  }
  .nav-wrapper span{
    height: 30px;
    padding-bottom: 5px;
    font-size: 15px;
    color: #737373;
    margin-right: 30px;
    display: inline-block;
  }
  .nav-wrapper {
    padding: 0 18px;
    height: 68px;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
  }
  span.router-link-exact-active{
    color: #246394
  }
</style>
