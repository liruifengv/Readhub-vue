<template>
  <span id="backTop" v-show="flag" @click="backTop()">
    <a>↑</a>
    <slot>
    </slot>
  </span>
</template>

<script>
  export default{
    name: 'backTop',
    data () {
      return {
        speed: 0.1,
        flag: false
      }
    },
    created () {
      this.$nextTick(function () {
        window.addEventListener('scroll', this.getScroll) // 滚动事件监听
      })
    },
    methods: {
      backTop () {
        console.log('点击事件')
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        let timer = setInterval(() => {
          scrollTop -= Math.abs(scrollTop * this.speed)
          if (scrollTop <= 1) {
            scrollTop = 0
            clearInterval(timer)
          }
          document.body.scrollTop = scrollTop
          document.documentElement.scrollTop = scrollTop
        }, 20)
        return false
      },
      getScroll () {
        // 变量scrollTop是滚动条滚动时，距离顶部的距离
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        // 变量windowHeight是可视区的高度
        const windowHeight = document.documentElement.clientHeight || document.body.clientHeight
        // 变量scrollHeight是滚动条的总高度
        // const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
        // 滚动条到底部的条件
        if (scrollTop >= windowHeight) {
          this.flag = true
        } else {
          this.flag = false
        }
      }
    }
  }
</script>
<style scoped>
  #backTop{
    position: fixed;
    right: 40px;
    bottom: 40px;
    border: 1px solid #ddd;
    background-color: #aaa;
    width: 40px;
    text-align: center;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    line-height: 1;
    z-index: 1000;
    cursor: pointer;
  }

  a{
    font-size: 20px;
    padding: 10px;
    display: block;
    color: #fff;
    text-decoration: none;
  }
</style>
