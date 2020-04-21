
import state from './modulePackageState'
import mutations from './modulePackageMutations'
import actions from './modulePackageActions'
import getters from './modulePackageGetters'



export default {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
}

