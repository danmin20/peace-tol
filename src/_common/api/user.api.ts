import swaggerApi from '../utils/swagger-api'

export const postUser = async () => {
  const response =
    await swaggerApi.userController.userControllerCreateUserUuid()
  return response.data
}
