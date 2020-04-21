import axios from "../../axios/index.js"
export default {
    getAll(filters) {
        //filters=?paginate=5&sortAsc=id
        return axios.get(`contact-us${filters}`)
    },

    view(id) {
        return axios.get(`contact-us/${id}`)
    },

    create(data) {
        return axios.post(`contact-us`, data)
    },

    update(id, data) {
        return axios.post(`contact-us/${id}`, data)
    },

    delete(id) {
        return axios.delete(`contact-us/${id}`)
    }
}
