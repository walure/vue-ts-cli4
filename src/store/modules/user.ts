import { Commit } from 'vuex'
const state: any = {
    user: {}
}
const getters = {
    user: (state: any)=> state.user
}
const mutations: any = {
    setUser(states: any, params: object) {
        states.user = params
    }
}

const actions: any = {
    saveUser(context: { commit: Commit }, params: object) {
        context.commit('setUser', params)
    }
}

export default { state, getters, actions, mutations }