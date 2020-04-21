
import state from './moduleAgencyState'
import mutations from './moduleAgencyMutations'
import actions from './moduleAgencyActions'
import getters from './moduleAgencyGetters'



export default {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
}

