
import state from './moduleEmployeeState'
import mutations from './moduleEmployeeMutations'
import actions from './moduleEmployeeActions'
import getters from './moduleEmployeeGetters'



export default {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
}

