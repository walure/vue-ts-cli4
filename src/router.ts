import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/view/login/login.vue'
// import Register from '@/view/register/register.vue'

const loadComponent =(view:any) => () => import(`@/view/${view}`) 
Vue.use(Router)

const router = new Router({
    //mode: 'history',
    // base:process.env.BASE_URL ,
    routes: [
        {
            path: '/',
            name: 'index',
            component: loadComponent('index/index.vue')
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
        }
    ]
})

router.beforeEach((to, from, next) => {
    next()
})
router.afterEach((to, from) => {
 
})

export default router