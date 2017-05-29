<template>
  <div class="vheader">
    <h3>{{ msg }}</h3>
  </div>
</template>

<script>
  export default{
    name: 'vheader',
    data () {
      return {
        msg: 'Readhub'
      }
    }
  }
</script>

<style scoped>
  .vheader{

    margin: 10px 0px 10px 15px;
  }
  h3{
    margin: 0;
  }
</style>

