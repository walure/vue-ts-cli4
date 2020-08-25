import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

const loadComponent = (view: any) => () => import(`@/view/${view}`)
Vue.use(Router)

const router = new Router({
    //mode: 'history',
    // base:process.env.BASE_URL ,
    routes: [
       
        {
            path: '/index',
            name: 'index',
            component: loadComponent('index/index.vue'),
            children:[
                {
                    path: 'detail',
                    name: 'detail',
                    component: loadComponent('index/detail.vue'),
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: loadComponent('login/login.vue')
        },
        {
            path: '/register',
            name: 'register',
            component: loadComponent('register/register.vue')
        },
        {
            path: '/',
            redirect:'/index',

        },
        {
            path: '*',
            name: '404',
            component: loadComponent('404/404.vue')
        }
    ]
})

router.beforeEach((to, from, next) => {

        next()
  

})
router.afterEach((to, from) => {
    
})

export default router 