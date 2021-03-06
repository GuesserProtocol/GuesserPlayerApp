import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Play from '@/components/Play'
import Create from '@/components/Create'
import Validation from '@/components/Validation'
import Search from '@/components/Search'
// import SignUp from '@/components/SignUp'
import MyGuesses from '@/components/MyGuesses'

/* Documentation */
import About from '@/components/Footer/About'
import FAQs from '@/components/Footer/FAQs'
import TermsOfUse from '@/components/Footer/TermsOfUse'
import PrivacyPolicy from '@/components/Footer/PrivacyPolicy'
import HelpSupport from '@/components/Footer/HelpSupport'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing
    },
    {
      path: '/play',
      name: 'play',
      component: Play
    },
    {
      path: '/play/:topic',
      name: 'play',
      component: Play
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/faqs',
      name: 'faqs',
      component: FAQs
    },
    {
      path: '/termsofuse',
      name: 'termsofuse',
      component: TermsOfUse
    },
    {
      path: '/privacypolicy',
      name: 'privacypolicy',
      component: PrivacyPolicy
    },
    {
      path: '/help',
      name: 'help',
      component: HelpSupport
    },
    {
      path: '/create',
      name: 'create',
      component: Create
    },
    /*
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    */
    {
      path: '/validation',
      name: 'validation',
      component: Validation
    },
    {
      path: '/event/:id',
      name: 'search',
      component: Search
    },
    {
      path: '/myguesses',
      name: 'myguesses',
      component: MyGuesses
    }
  ]
})
