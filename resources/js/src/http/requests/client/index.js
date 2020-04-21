import axios from "../../axios/index.js"
export default {
    getAll(filters) {
        //filters=?paginate=5&sortAsc=id
        return axios.get(`booking${filters}`)
    },

    view(id) {
        return axios.get(`booking/${id}`)
    },

    create(data) {
        return axios.post(`booking`, data)
    },

    update(id, data) {
        return axios.post(`booking/${id}`, data)
    },

    delete(id) {
        return axios.delete(`booking/${id}`)
    }
}
