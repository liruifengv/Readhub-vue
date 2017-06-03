<template>
  <div class="container" v-on:toggle="toggle">
    <div class="article" v-for="item in list" v-on:click="toggle(item)">
      <div class="title">
        {{item.title}}
        <span class="time">{{item.time}}</span>
      </div>
      <div class="info"  v-show="!item.show">
        {{item.info}}
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueResource from 'vue-resource'
  Vue.use(VueResource)

export default {
    name: 'HotTopic',
    data: function () {
      return {
        item: ''
      }
    },
    props: ['list'],
    components: {
    },
    mounted: function () {
      this.getHottopics()
    },
    methods: {
      getHottopics: function () {
        var _this = this
        this.$http.get('../static/data.json')
            .then(function (res) {
              _this.list = res.body.hottopics.list
            })
          .catch(function (res) {
            console.log(res)
          })
      },
      toggle: function (item) {
        item.show = !item.show
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
.time{
  margin-left: 10px;
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
