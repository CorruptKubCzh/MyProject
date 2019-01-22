import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import Login from '@/views/login/Login'
Vue.use(Router)

/* Layout 页面相同部分 */
import Layout from '@/views/layout/Layout'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path:'/',
    	component:Layout,
        children:[
            {
                path:'dashboard',
                component:()=>import('@/views/dashboard/index')
            },
            {
                path: '/404',
                component:()=>import('@/views/errorPage/404.vue')
            },
        ]
    	// redirtect:'',
    },
    {
        path: '/login',
        component:()=>import('@/views/login/Login'),
        hidden: true
    },
    {
        path: '*',
        redirect: '/404'
    }
  ]
})