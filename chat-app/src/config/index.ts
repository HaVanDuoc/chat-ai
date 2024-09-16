import axios from "axios"

export const pathPage = {
    home: "/",
    ai: "/ai",
    explore: "/explore",
    signin: "/signin",
    signup: "/signup",
}

export const api = axios.create({
    baseURL: `${process.env.host}/api`,
    timeout: 0,
    headers: {'X-Custom-Header': 'foobar'},
    withCredentials: true,
})