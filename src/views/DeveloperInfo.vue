<template>
  <div class="container">
    <div class="title" v-for="item in list" v-on:click="toggleInfo(item)">
      {{item.title}}
      <div class="info" v-show="true">
        {{item.info}}
        <br>
        <br>
        <span class="source">{{item.source}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueResource from 'vue-resource'
  Vue.use(VueResource)

  export default {
    name: 'DeveloperInfo',
    data: function () {
      return {item: ''}
    },
    props: ['list', 'isLast'],
    components: {
    },
    mounted: function () {
      this.getDeveloperinfo()
    },
    methods: {
      getDeveloperinfo: function () {
        var _this = this
        this.$http.get('../static/data.json')
          .then(function (res) {
            _this.list = res.body.developerinfo.list
          })
          .catch(function (res) {
            console.log(res)
          })
      },
      toggleInfo (item) {
        this.$emit('toggleInfo', item)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container{
    margin-top: 15px;
    margin-left: 15px;
    margin-right: 15px;
  }
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
  .title{
    position: relative;
    font-size: 16px;
    line-height: 1.56em;
    color: #545454;
    font-weight: 500;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    border-bottom: 1px solid #dddddd;
    padding-bottom: 10px;
    padding-top: 10px;
  }
  .source{
    font-size: 10px;
    color: #aaacb4;
  }

  .info{
    margin-top: 5px;
    font-size: 14px;
    line-height: 1.8em;
    color: #aaacb4;
  }
</style>
