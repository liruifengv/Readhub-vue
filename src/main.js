// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
  import Vue from 'vue'
  import App from './App.vue'
  import router from './router'
  import { instance } from './api/index'

  Vue.prototype.$http = instance
/* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
    //  render: (h) => h(App)
  })
