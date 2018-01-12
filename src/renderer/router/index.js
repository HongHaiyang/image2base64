import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Base64page = resolve => require(['@/components/base64page/index.vue'], resolve)



export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'landing-page',
    //   component: require('@/components/LandingPage').default
    // },
    {
      path: '*',
      redirect: '/'
    },{
      path:'/',
      name:'base64-page',
      component:Base64page
    }
  ]
})
