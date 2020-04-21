
import state from './moduleClientState'
import mutations from './moduleClientMutations'
import actions from './moduleClientActions'
import getters from './moduleClientGetters'



export default {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
}

