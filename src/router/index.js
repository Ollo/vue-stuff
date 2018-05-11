import Vue from 'vue'
import VueRouter from 'vue-router'

import NotFound from '../components/PageNotFound'
import PageHome from '../components/PageHome'
import PageLogin from '../components/PageLogin'

import store from '../store'

import AuthGuard from './auth-guard'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { 
      path: '*', 
      name: 'not found',
      component: NotFound
    },
    {
      path: '/',
      redirect: '/gerfs'
    },
    { 
      path: '/gerfs',
      name: 'home',
      beforeEnter: AuthGuard,
      component: PageHome, 
    },
    {
      path: '/account', // manage details? 
      name: 'account',
      beforeEnter: AuthGuard,
      component: null,
    },
    {
      path: '/login',
      name: 'login',
      component: PageLogin,
    },
    {
      path: '/sign-up',
      name: 'sign up',
      component: null,
    },
    { 
      path: '/reset-password',
      name: 'reset password',
      component: null
    }
  ]
})

export default router
