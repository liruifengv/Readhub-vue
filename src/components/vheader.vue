<template>
  <div class="vheader">
    <img src="../assets/readhub_logo.png" alt="Readhub" class="logo">
    <a class="joinUs" href="https://mp.weixin.qq.com/s/kREAGXnuZVNw_DspMeDEwA">加入我们</a>
  </div>
</template>

<script>
  export default{
    name: 'vheader',
    data () {
      return {
        msg: 'Readhub'
      }
    }
  }
</script>

<style scoped>
  .vheader{
    margin: 10px 10px 10px 10px;
    z-index: 999;
    background: #fff !important
  }
  h3{
    margin: 0;
  }
  .logo{
    float: left;
    width: 109px;
    height: 28px;
    margin-bottom: 10px;
  }
  .joinUs{
    float: right;
    font-size: 14px;
    color: #999;
    text-decoration: none;
    margin-left: 23px;
    text-decoration: none;
    font-family: PingFangSC-Light,Microsoft YaHei UI Light,Noto Sans CJK SC Light,sans-serif;

  }
</style>

