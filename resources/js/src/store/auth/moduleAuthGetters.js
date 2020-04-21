
export default {
    userData: state => {
        return state.AppActiveUser;
    },

    token: state => {
        return state.accessToken.accessToken;
    },

    token_expire_date: state => {
        return new Date(state.accessToken.token.expires_at)*1;
    }
}
