
import state from './moduleBlogState'
import mutations from './moduleBlogMutations'
import actions from './moduleBlogActions'
import getters from './moduleBlogGetters'



export default {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
}

