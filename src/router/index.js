import Vue from 'vue'
import Router from 'vue-router'
import HotTopic from '../components/HotTopic.vue'
import TmtNews from '../components/TmtNews.vue'
import DeveloperInfo from '../components/DeveloperInfo.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/HotTopic',
      component: HotTopic
    },
    {
      path:'/TmtNews',
      component:TmtNews
    },
    {
      path:'/DeveloperInfo',
      component:DeveloperInfo
    }
  ]
})
