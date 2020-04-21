import axios from "../../axios/index.js"
export default {
    getAll(filters) {
        //filters=?paginate=5&sortAsc=id
        return axios.get(`employee${filters}`)
    },

    view(id) {
        return axios.get(`employee/${id}`)
    },

    create(data) {
        return axios.post(`employee`, data)
    },

    update(id, data) {
        return axios.post(`employee/${id}`, data)
    },

    delete(id) {
        return axios.delete(`employee/${id}`)
    }
}
