<template>
  <div class="loading-box">
      <img class="loding" src="https://cdn.readhub.cn/static/assets/gif/loading.a8b13f8f.gif">
  </div>
</template>

<script>
  export default {
    name: 'Loading',
    components: {
    },
    props: {
    },
    methods: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .loading-box {
   display: flex;
   justify-content: center;
   margin-bottom: 20px;
   margin-top: 20px;
 }
 .loding {
   width: 20px;
   height: 20px;
 }
</style>
