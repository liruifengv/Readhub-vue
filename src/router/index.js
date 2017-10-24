  import Vue from 'vue'
  import Router from 'vue-router'
  import HotTopic from '@/views/HotTopic.vue'

  const TmtNews = resolve => require(['../views/TmtNews.vue'], resolve)
  const DeveloperInfo = resolve => require(['../views/DeveloperInfo.vue'], resolve)

  Vue.use(Router)
  export default new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'HotTopic',
        component: HotTopic
      },
      {
        path: '/news',
        name: 'TmtNews',
        component: TmtNews
      },
      {
        path: '/tech',
        name: 'DeveloperInfo',
        component: DeveloperInfo
      }
    ]
  })
