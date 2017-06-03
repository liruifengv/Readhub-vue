<template>
  <span id="backTop" v-show="toTop" @click="backTop">
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
        speed: 0.2,
        toTop: false
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        window.addEventListener('scroll', this.needToTop) // 滚动事件监听
      })
    },
    methods: {
      backTop: function () {
        let _this = this
        let top = document.body.scrollTop
        let timer = setInterval(function () {
          top -= Math.abs(top * _this.speed)
          if (top <= 1) {
            top = 0
            clearInterval(timer)
          }
          document.body.scrollTop = top
        }, 20)
        return false
      },
      needToTop: function () {
        let curHeight = document.documentElement.scrollTop || document.body.scrollTop
        let viewHeight = document.documentElement.clientHeight
        if (curHeight > viewHeight + 100) {
          this.toTop = true                         // 赋值是为了按钮的v-show='toTop'
        } else {
          this.toTop = false
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
