import store from '../store/store';

export default {
    methods: {
        /**
         * Check if the authenticated user can perform an action.
         *
         * @param permission
         * @returns {boolean}
         */
        can(permission) {
            let hasPermission = false;
            store.state.auth.AppActiveUser.roles[0].permissions.forEach((userPermission) => {
                if(userPermission.name === permission){
                    hasPermission = true;
                }
            });
            return hasPermission;
        }
    },
}
