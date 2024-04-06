import { CreateAdventureDto } from '../../__generated__/swagger'
import swaggerApi from '../utils/swagger-api'

export const postAdventure = async (body: CreateAdventureDto) => {
  const data =
    await swaggerApi.adventureController.adventureControllerCreate(body)
  return data.data
}
