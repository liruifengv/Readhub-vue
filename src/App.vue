<template>
  <div id="app">
    <vindex/>
  </div>

</template>

<script>
  import vindex from './components/vindex'
  export default {
    name: 'app',
    components: {vindex}
  }
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  background-color: #fff;
  padding: 0
}
  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box

  }
</style>
