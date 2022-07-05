import axios from 'axios'

const admin = axios.create({
  baseURL: '',
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
