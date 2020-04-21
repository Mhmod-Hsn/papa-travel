import axios from "../../axios/index.js"
export default {
    getAll(filters) {
        //filters=?paginate=5&sortAsc=id
        return axios.get(`package${filters}`)
    },

    view(id) {
        return axios.get(`package/${id}`)
    },

    create(data) {
        return axios.post(`package`, data)
    },

    update(id, data) {
        return axios.post(`package/${id}`, data)
    },

    delete(id) {
        return axios.delete(`package/${id}`)
    }
}
