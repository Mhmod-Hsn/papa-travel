
import state from './moduleRolesAndPermissionsState'
import mutations from './moduleRolesAndPermissionsMutations'
import actions from './moduleRolesAndPermissionsActions'
import getters from './moduleRolesAndPermissionsGetters'



export default {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
}

