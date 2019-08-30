import Vue from 'vue'
import Router from 'vue-router'
import checkout from './context/checkout.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', redirect: '/checkout' },
    {
      path: '/checkout',
      name: 'checkout',
      component: checkout
    }
  ]
})
