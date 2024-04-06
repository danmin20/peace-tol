import axios, { AxiosInstance } from 'axios'
import qs from 'qs'

const apiClient: AxiosInstance = axios.create({
  baseURL: 'https://',
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
