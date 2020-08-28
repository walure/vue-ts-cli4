

import 'babel-polyfill'
//import 'amfe-flexible'
import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import 'nprogress/nprogress.css'
import './style/common.scss'
import store  from './store'
import router from './router'

import axios from './utils/axios'



Vue.config.productionTip = false
Vue.prototype.$axios = new axios().getInterceptors()

Vue.use(Antd)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
