import axios from "../../axios/index.js"
export default {
    getAll(filters) {
        //filters=?paginate=5&sortAsc=id
        return axios.get(`post${filters}`)
    },

    view(id) {
        return axios.get(`post/${id}`)
    },

    create(data) {
        return axios.post(`post`, data)
    },

    update(id, data) {
        return axios.post(`post/${id}`, data)
    },

    delete(id) {
        return axios.delete(`post/${id}`)
    }
}
