import axios, { AxiosInstance } from 'axios'
import qs from 'qs'

const apiClient: AxiosInstance = axios.create({
  baseURL: 'http://43.201.108.75:8000/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  withCredentials: true,
  paramsSerializer: {
    serialize: (params) => qs.stringify(params, { arrayFormat: 'repeat' })
  }
})

export default apiClient
