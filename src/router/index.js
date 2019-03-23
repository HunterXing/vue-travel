import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'   //@代表src目录
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },

  ]
})
