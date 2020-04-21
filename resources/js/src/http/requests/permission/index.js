import axios from "../../axios/index.js"
export default {
    getAll() {
        return axios.get(`permission`)
    },
}
