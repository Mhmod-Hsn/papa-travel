
import jwt from "../../http/requests/auth/jwt/index.js"
import router from '@/router';
import Vue from 'vue'

export default {
    // JWT
    loginJWT({ commit, dispatch }, payload) {
      return new Promise((resolve, reject) => {
        jwt.login(payload.userDetails.email, payload.userDetails.password)
          .then(response => {
            // If there's user data in response
            if(response.data.data.user) {
                // Update user details
                commit('UPDATE_USER_INFO', {userInfo: response.data.data.user});

                // Set bearer token in axios
                commit("SET_BEARER", {accessToken: response.data.data.access_token});

                // Navigate User to homepage
                router.push(router.currentRoute.query.to || '/dashboard');

                resolve(response)
            }else {
                reject({message: "Wrong Email or Password"})
            }

          })
          .catch(error => {
              reject(error);
          })
      })
    },

    logoutJWT({ commit }) {
        commit("LOGOUT");
        router.push('/dashboard/login');
    },

    registerUserJWT({ commit }, payload) {

      const { displayName, email, password, confirmPassword } = payload.userDetails;

      return new Promise((resolve,reject) => {

        // Check confirm password
        if(password !== confirmPassword) {
          reject({message: "Password doesn't match. Please try again."})
        }

        jwt.registerUser(displayName, email, password)
          .then(response => {
            // Redirect User
            router.push(router.currentRoute.query.to || '/');

            // Update data in localStorage
            localStorage.setItem("accessToken", response.data.accessToken);
            commit('UPDATE_USER_INFO', response.data.userData, {root: true});

            resolve(response)
          })
          .catch(error => { reject(error) })
      })
    },

    fetchAccessToken() {
      return new Promise((resolve) => {
        jwt.refreshToken().then(response => { resolve(response) })
      })
    }
}
