<template>
  <div>
    <div class="container"  v-for="(item, index) in list" :key="index">
      <Item :item="item" />
    </div>
    <div class="footer" v-show="!flag">
      <loading />
    </div>
  </div>
</template>

<script>
  import Item from '../components/Item'
  import Loading from '../components/Loading'

  export default {
    name: 'DeveloperInfo',
    data () {
      return {
        list: [],
        timestamp: '',
        flag: true
      }
    },
    components: {
      Item,
      Loading
    },
    created () {
      // this.getTmtnews()
      this.getNews()
      window.addEventListener('scroll', this.getScroll)
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.getScroll)
    },
    methods: {
      getNews () {
        this.timestamp = Date.parse(new Date())
        this.$http.get(`/technews?lastCursor=${this.timestamp}&pageSize=10`)
          .then(res => {
            if (res.status === 200) {
              this.list = res.data.data
              // console.log(res)
            }
          }).catch((error) => {
            console.log(error)
          })
      },
      getScroll () {
        // 变量scrollTop是滚动条滚动时，距离顶部的距离
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        // 变量windowHeight是可视区的高度
        const windowHeight = document.documentElement.clientHeight || document.body.clientHeight
        // 变量scrollHeight是滚动条的总高度
        const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
        // 滚动条到底部的条件
        if (scrollTop + windowHeight === scrollHeight) {
        // 写后台加载数据的函数
          this.getMore()
          this.flag = false
        }
      },
      getMore () {
        if (this.flag) {
          this.timestamp = this.timestamp - 504000
          this.$http.get(`/technews?lastCursor=${this.timestamp}&pageSize=10`)
            .then(res => {
              if (res.status === 200) {
                console.log(res.data)
                this.list = [...this.list, ...res.data.data]
                this.flag = true
              }
            }).catch((error) => {
              console.log(error)
              this.flag = true
            })
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container{
    margin-left: 15px;
    margin-right: 15px;
  }
</style>
