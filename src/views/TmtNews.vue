<template>
  <div class="container">
    <div class="article" v-for="item in list">
      <div class="title">
        {{item.title}}
      </div>
      <div class="info" v-show="true">
        {{item.info}}
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
    name: 'TmtNews',
    data: function () {
      return {item: ''}
    },
    props: ['list'],
    components: {
    },
    mounted: function () {
      this.getTmtnews()
    },
    methods: {
      getTmtnews: function () {
        var _this = this
        this.$http.get('../static/data.json')
          .then(function (res) {
            _this.list = res.body.tmtnews.list
          })
          .catch(function (res) {
            console.log(res)
          })
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
  .article{
    border-bottom: 1px solid #dddddd;
    padding-bottom: 10px;
    padding-top: 10px;
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
  }
  .source{
    font-size: 8px;
    color: #aaacb4;
    line-height: 3.0em;
  }

  .info{
    margin-top: 5px;
    font-size: 14px;
    line-height: 1.8em;
    color: #aaacb4;
  }
</style>
