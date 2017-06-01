  import Vue from 'vue'
  import Router from 'vue-router'
  import HotTopic from '../views/HotTopic.vue'
  import TmtNews from '../views/TmtNews.vue'
  import DeveloperInfo from '../views/DeveloperInfo.vue'
  Vue.use(Router)
  Vue.config.debug = true
  export default new Router({
    routes: [
      {
        path: '/',
        component: HotTopic
      },
      {
        path: '/TmtNews',
        component: TmtNews
      },
      {
        path: '/DeveloperInfo',
        component: DeveloperInfo
      }
    ]
  })
