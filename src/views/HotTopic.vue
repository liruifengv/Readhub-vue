<template>
  <div class="container">
    <div class="article" v-for="item in list" :key="item.id">
      <div class="title">
        {{item.title}}
        <span class="time">&nbsp;&nbsp;{{getTime(item.publishDate)}}</span>
      </div>
      <div class="info" v-show="false">
        {{item.info}}
      </div>
    </div>
  </div>
</template>

<script>
import timeago from 'timeago.js'

export default {
  name: 'HotTopic',
  data () {
    return {
      item: '',
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
      this.$http.get('/topic?lastCursor=&pageSize=10')
        .then(res => {
          if (res.status === 200) {
            this.list = res.data.data
            // console.log(res)
          }
        }).catch((error) => {
          console.log(error)
        })
    },
    toggle (item) {
      item.show = !item.show
    },
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
.container {
  margin-top: 5px;
  margin-left: 15px;
  margin-right: 15px;
}

.article {
  border-bottom: 1px solid #dddddd;
  padding-bottom: 10px;
  padding-top: 10px;
}

h1,
h2 {
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

.title {
  position: relative;
  font-size: 18px;
  line-height: 1.7em;
  color: #000;
  margin-bottom: 8px;
  cursor: pointer;
}

.time {
  margin-left: 10px;
  font-size: 10px;
  color: #aaacb4;
}

.info {
  color: #737373;
  font-size: 16px;
  line-height: 1.85em;
  margin-bottom: 24px;
}
</style>
