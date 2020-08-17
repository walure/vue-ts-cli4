import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import user from './modules/user'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        user
    },
  plugins: [createPersistedState({
    storage: window.localStorage
    })]
})

export default store