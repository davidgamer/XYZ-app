import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/user/',
    name: 'user',
    props: true,
    component: () => import('./views/User.vue')
  },
  {
    path: '/atendidos',
    name: 'atendidos',
    component: () => import('./views/Atendidos.vue')
  },
  {
    path: '/lixeira',
    name: 'lixeira',
    component: () => import('./views/Lixeira.vue')
  }
  ]
})
