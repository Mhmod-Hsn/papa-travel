import axios from "../../axios/index.js"
export default {
    getAll(filters) {
        //filters=?paginate=5&sortAsc=id
        return axios.get(`role${filters}`)
    },

    view(id) {
        return axios.get(`role/${id}`)
    },

    create(data) {
        return axios.post(`role`, data)
    },

    update(id, data) {
        return axios.post(`role/${id}`, data)
    },

    delete(id) {
        return axios.delete(`role/${id}`)
    }
}
