<template>
  <div class="container">
    <div class="article" v-for="(item,index) in list" :key="index"  :class="index === selectIndex ? 'item-selected' : ''">
      <div class="title" @click="toggle(index)">
        {{item.title}}
        <span class="time">&nbsp;&nbsp;{{getTime(item.updatedAt)}}</span>
      </div>
      <div  v-show="index === selectIndex">
        <div class="info">
          {{item.summary}}
        </div>
        <div class="newsArrary">
          <a class="arr-item" v-for="(arrItem, index) in item.newsArray" :href="arrItem.url" target="_blank" :key="index">
            <div class="arr-item-wrapper">
              <div>
              <div class="arr-item-title">{{arrItem.title}}</div>
              <div class="arr-item-author">{{arrItem.siteName}}</div>
              </div>
            </div>
          </a>
          <div class="item-footer">
            <router-link class="toDetail" :to='`/topic/${item.id}`' tag="span">查看话题<span></span></router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="footer" v-show="!flag">
      <loading />
    </div>
  </div>
</template>

<script>
import timeago from 'timeago.js'
import Loading from '../components/Loading'

export default {
  name: 'HotTopic',
  data () {
    return {
      selectIndex: -1,
      show: false,
      list: [],
      lastCursor: '',
      flag: true
    }
  },
  components: {
    Loading
  },
  created () {
    this.getNews()
    window.addEventListener('scroll', this.getScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.getScroll)
  },
  methods: {
    getNews () {
      this.$http.get('/topic?lastCursor=&pageSize=20')
        .then(res => {
          if (res.status === 200) {
            this.list = res.data.data
            console.log(res.data)
            this.lastCursor = res.data.data[19].order
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
        this.$http.get(`/topic?lastCursor=${this.lastCursor}&pageSize=20`)
          .then(res => {
            if (res.status === 200) {
              console.log(res.data)
              this.list = [...this.list, ...res.data.data]
              this.lastCursor = res.data.data[19].order
              this.flag = true
            }
          }).catch((error) => {
            console.log(error)
            this.flag = true
          })
      }
    },
    toggle (index) {
      this.selectIndex === index ? this.selectIndex = -1 : this.selectIndex = index
    },
    getTime (date) {
      let d = new Date(date)
      let time = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
      let timeagoInstance = timeago()
      let difftime = timeagoInstance.format(time, 'zh_CN')
      return difftime
    },
    throttle (func, wait) {
      var timeout
      return function () {
        var context = this
        var args = arguments
        if (!timeout) {
          timeout = setTimeout(function () {
            timeout = null
            func.apply(context, args)
          }, wait)
        }
      }
    },
    debounce (func, wait) {
      var timeout
      return function () {
        var context = this
        var args = arguments
        if (timeout) clearTimeout(timeout)
        var callNow = !timeout
        timeout = setTimeout(function () {
          timeout = null
        }, wait)
        if (callNow) func.apply(context, args)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  margin-top: 5px;
}

.article {
  border-top: 1px solid #dddddd;
  font-size: 16px;
  line-height: 1.7em;
  color: #323232;
  padding: 27px 18px;
  padding-bottom: 27px;
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
.arr-item {
  text-decoration: none;
  color: #000;
  display: block;
  position: relative;
}
.arr-item-title {
  font-size: 16px;
  color: #333;
  margin-right: 15px;
  margin-bottom: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.arr-item-wrapper {
  padding: 12px 18px 12px 30px;
}
.arr-item-title::before {
  content: " ";
    position: absolute;
    left: 16px;
    margin-top: 8px;
    width: 4px;
    height: 4px;
    border: 2px solid #acb9c6;
    border-radius: 50%;
    z-index: 10;
}
.arr-item-author {
  font-size: 14px;
  color: #b2b2b2;
}
.item-selected {
    position: relative;
    z-index: 10;
    background: #fff;
    box-shadow: 0 5px 21px 1px rgba(0,0,0,.15);
}
.item-footer {
  display: flex;
  justify-content: center;
  padding-top: 20px;
  border-top: 1px solid #ebebeb
}
.toDetail {
  color: #999;
  font-size: 15px;
  cursor: pointer;
}
.toDetail span {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px 0 5px 8px;
  border-color: transparent transparent transparent #b2b2b2;
  display: inline-block;
  margin-left: 6px;
}
</style>
