import axios from "axios"

const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        "Content-Type": "application/json"
    }
})

export default {
    getBirds() {
        return apiClient.get('/birds')
    },
    getBird(id) {
        return apiClient.get('/birds/' + id)
    }
}