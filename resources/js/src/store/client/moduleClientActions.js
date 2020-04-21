
import client from "../../http/requests/client/index"

export default {
    getData({ commit, dispatch }, payload) {
        return new Promise((resolve, reject) => {
            client.getAll(payload)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    dispatch('handleError', {reject: reject, error: error}, {root: true});
                })
        })
    },

    view({ commit, dispatch }, id) {
        return new Promise((resolve, reject) => {
            client.view(id)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    dispatch('handleError', {reject: reject, error: error}, {root: true});
                })
        })
    },

    create({ commit, dispatch }, payload) {
        return new Promise((resolve, reject) => {
            client.create(payload)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    dispatch('handleError', {reject: reject, error: error}, {root: true});
                })
        })
    },

    update({ commit, dispatch }, payload) {
        return new Promise((resolve, reject) => {
            client.update(payload.id, payload.data)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    dispatch('handleError', {reject: reject, error: error}, {root: true});
                })
        })
    },

    delete({ commit, dispatch }, id) {
        return new Promise((resolve, reject) => {
            client.delete(id)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    dispatch('handleError', {reject: reject, error: error}, {root: true});
                })
        })
    },
}
