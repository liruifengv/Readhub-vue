<template>
  <div class="container">
    <div class="article" v-for="item in list" :key="item.id">
      <div class="title">
        {{item.title}}
      </div>
      <div class="info" v-show="true">
        {{item.summary}}
        <br>
          <span class="source">{{item.siteName}} <span v-show="item.authorName != null">/</span> {{item.authorName}}</span>
      </div>
    </div>
  </div>

</template>

<script>
  import Vue from 'vue'
  import axios from 'axios'

  Vue.use(axios)

  export default {
    name: 'TmtNews',
    data () {
      return {item: '', list: []}
    },
    components: {
    },
    created () {
      // this.getTmtnews()
      this.getNews()
    },
    methods: {
      getNews () {
        axios.get('https://api.readhub.me/news?lastCursor=1508151944000&pageSize=10')
          .then(res => {
            if (res.status === 200) {
              this.list = res.data.data
              // console.log(res)
            }
          }).catch((error) => {
            console.log(error)
          })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container{
    margin-top: 5px;
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
