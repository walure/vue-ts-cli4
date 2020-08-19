

import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './style/common.scss'
import store  from './store'
import router from './router'


console.log(router)
Vue.config.productionTip = false

Vue.use(Antd)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
