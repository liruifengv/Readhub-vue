<template>
  <div>
    <a :href="item.url" target="_blank">
      <div class="article">
        <div class="title">
          {{item.title}}
        </div>
        <div class="info" v-show="true">
          {{item.summary}}
        </div>
        <span class="source">{{item.siteName}} <span v-show="item.authorName != null">/</span> {{item.authorName}} &nbsp;&nbsp;{{getTime(item.publishDate)}}</span>
      </div>
    </a>
  </div>
</template>

<script>
  import timeago from 'timeago.js'

  export default {
    name: 'TmtNews',
    components: {
    },
    props: {
      item: {
        type: Object
      }
    },
    methods: {
      getTime (date) {
        let d = new Date(date)
        let time = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
        let timeagoInstance = timeago()
        let difftime = timeagoInstance.format(time, 'zh_CN')
        return difftime
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a{
    text-decoration: none
  }
  .article{
    border-bottom: 1px solid #dddddd;
    padding-bottom: 20px;
    padding-top: 20px;
  }
  .title{
    font-size: 18px;
    line-height: 1.7em;
    color: #000;
    margin-bottom: 10px
  }
  .info{
    color: #737373;
    font-size: 16px;
    line-height: 1.85em;
    max-height: 5.55em;
    overflow: hidden;
  }
  .source{
    color: #999;
    font-size: 12px;
    line-height: 1.2em;
    position: relative;
    top: 10px;
  }
</style>
