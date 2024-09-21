import axios from "axios"

const api = axios.create({
    baseURL: `${process.env.HOST}/api`,
    timeout: 0,
    headers: { 'X-Custom-Header': 'foobar' },
    withCredentials: true,
})

export default api