import apiClient from './axios'
import { Api } from '../../__generated__/swagger'

const swaggerApi = new Api()

swaggerApi.instance = apiClient

export default swaggerApi
