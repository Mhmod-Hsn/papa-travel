import axios from "../../http/axios/index.js";

export default {
    SET_BEARER(state, payload) {
        state.accessToken = payload.accessToken;
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + payload.accessToken.accessToken;
    },

    // Updates user info in state and localstorage
    UPDATE_USER_INFO(state, payload) {
        // Store data in localStorage
        state.AppActiveUser = payload.userInfo;
    },

    LOGOUT(state) {
        state.accessToken = null;
        state.AppActiveUser = null;
    }
}
