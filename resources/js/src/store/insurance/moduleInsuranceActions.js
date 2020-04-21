
import insurance from "../../http/requests/insurance/index"

export default {
    getData({ commit, dispatch }, payload) {
        return new Promise((resolve, reject) => {
            insurance.getAll(payload)
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
            insurance.view(id)
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
            insurance.create(payload)
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
            insurance.update(payload.id, payload.data)
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
            insurance.delete(id)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    dispatch('handleError', {reject: reject, error: error}, {root: true});
                })
        })
    },
}
