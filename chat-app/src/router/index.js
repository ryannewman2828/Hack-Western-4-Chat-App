import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'
import SignUp from '@/components/SignUp'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/sign-up/',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/home/',
      name: 'Home',
      component: Home
    }

  ]
})
