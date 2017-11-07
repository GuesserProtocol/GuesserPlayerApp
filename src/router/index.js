import Vue from 'vue'
import Router from 'vue-router'
// import Dashboard from '@/components/Dashboard'
import Signup from '@/components/Signup'
import Profile from '@/components/Profile'
import Create from '@/components/Create'
import MyGuesses from '@/components/MyGuesses'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/create',
      name: 'create',
      component: Create
    },
    {
      path: '/my-guesses',
      name: 'my-guesses',
      component: MyGuesses
    }
  ]
})
