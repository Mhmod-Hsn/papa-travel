
import state from './moduleInsuranceState'
import mutations from './moduleInsuranceMutations'
import actions from './moduleInsuranceActions'
import getters from './moduleInsuranceGetters'



export default {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
}

