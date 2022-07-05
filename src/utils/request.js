import axios from 'axios'

const admin = axios.create({
  baseURL: process.env.VUE_APP_SERVICE_URL,
  timeout: 5000
})

admin.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

admin.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default admin
