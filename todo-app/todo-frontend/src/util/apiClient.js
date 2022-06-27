import axios from 'axios'
require('dotenv').config()
console.log(process.env) // remove this after you've confirmed it working

console.log('api', process.env.REACT_APP_BACKEND_URL)

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
})

export default apiClient
