<template>
  <div class="container">
    <div class="article" v-for="item in list">
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
    name: 'DeveloperInfo',
    data: function () {
      return {
        list: []
      }
    },
    components: {
    },
    created () {
      this.getNews()
    },
    methods: {
      getNews () {
        axios.get('https://api.readhub.me/technews?lastCursor=1508155020000&pageSize=10')
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

  .source{
    font-size: 8px;
    color: #999 !important;
    line-height: 3.0em;
  }
.title{
  position: relative;
  font-size: 18px;
  line-height: 1.7em;
  color: #000;
  margin-bottom: 8px;
  cursor: pointer;
}

.info{
  color: #737373;
  font-size: 16px;
  line-height: 1.85em;
  margin-bottom: 24px;
}
</style>
