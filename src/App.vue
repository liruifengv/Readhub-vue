<template>
  <div id="app">
    <router-link to="/HotTopic">热门话题</router-link>
    <router-link to="/TmtNews">TMT 新闻</router-link>
    <router-link to="/DeveloperInfo">开发者资讯</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
