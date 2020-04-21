import axios from "../../axios/index.js"
export default {
    getAll(filters) {
        //filters=?paginate=5&sortAsc=id
        return axios.get(`agency${filters}`)
    },

    view(id) {
        return axios.get(`agency/${id}`)
    },

    create(data) {
        return axios.post(`agency`, data)
    },

    update(id, data) {
        return axios.post(`agency/${id}`, data)
    },

    delete(id) {
        return axios.delete(`agency/${id}`)
    }
}
