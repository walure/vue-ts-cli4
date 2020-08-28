import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress' 


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
            children: [
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
            redirect: '/index',

        },
        {
            path: '*',
            name: '404',
            component: loadComponent('404/404.vue')
        }
    ]
})
// 个性化配置进度条外观
NProgress.configure({
    easing: 'ease',  // 动画方式    
    speed: 500,  // 递增进度条的速度    
    showSpinner: false, // 是否显示加载ico    
    trickleSpeed: 200, // 自动递增间隔    
    minimum: 0.3 // 初始化时的最小百分比
})
router.beforeEach((to, from, next) => {
    NProgress.start();
    next()
})
router.afterEach((to, from) => {
    NProgress.done()
})

export default router 