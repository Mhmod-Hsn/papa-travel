import axios from "../../axios/index.js"
export default {
    getAll(filters) {
        //filters=?paginate=5&sortAsc=id
        return axios.get(`insurance${filters}`)
    },

    view(id) {
        return axios.get(`insurance/${id}`)
    },

    create(data) {
        return axios.post(`insurance`, data)
    },

    update(id, data) {
        return axios.post(`insurance/${id}`, data)
    },

    delete(id) {
        return axios.delete(`insurance/${id}`)
    }
}
