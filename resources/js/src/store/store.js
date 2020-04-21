
import Vue from 'vue'
import Vuex from 'vuex'

import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex);

import moduleAuth from './auth/moduleAuth';
import moduleEmployee from './employee/moduleEmployee';
import modulePackage from './package/modulePackage';
import moduleClient from './client/moduleClient';
import moduleBlog from './blog/moduleBlog';
import moduleInsurance from './insurance/moduleInsurance';
import moduleRolesAndPermissions from './roles-and-permissions/moduleRolesAndPermissions';
import moduleContactUs from './contactUs/moduleContactUs';
import moduleAgency from "./agency/moduleAgency";


const vuexLocal = new VuexPersistence({
    storage: window.localStorage
});

export default new Vuex.Store({
    getters,
    mutations,
    state,
    actions,
    modules: {
        auth: moduleAuth,
        employee: moduleEmployee,
        package: modulePackage,
        client: moduleClient,
        blog: moduleBlog,
        insurance: moduleInsurance,
        rolesAndPermissions: moduleRolesAndPermissions,
        contactUs: moduleContactUs,
        agency: moduleAgency,
    },
    plugins: [vuexLocal.plugin],
    strict: process.env.NODE_ENV !== 'production'
})
