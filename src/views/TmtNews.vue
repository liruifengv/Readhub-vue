<template>
  <div>
    <div class="container"  v-for="item in list" :key="item.id">
      <Item :item="item" />
    </div>
  </div>
</template>

<script>
  import Item from '../components/Item'
  export default {
    name: 'TmtNews',
    data () {
      return {
        list: [],
        timestamp: ''
      }
    },
    components: {
      Item
    },
    created () {
      // this.getTmtnews()
      this.getNews()
    },
    methods: {
      getNews () {
        this.timestamp = Date.parse(new Date())
        // console.log(this.timestamp)
        this.$http.get(`/news?lastCursor=${this.timestamp}&pageSize=10`)
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
    margin-left: 15px;
    margin-right: 15px;
  }
</style>
