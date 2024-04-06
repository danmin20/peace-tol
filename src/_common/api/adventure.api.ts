import {
  QueryKey,
  UseQueryOptions,
  UseQueryResult,
  useQuery
} from '@tanstack/react-query'
import { AxiosError } from 'axios'

import {
  AdventureResponseDto,
  CreateAdventureDto
} from '../../__generated__/swagger'
import swaggerApi from '../utils/swagger-api'

const getAdventure = async (id: string) => {
  const data =
    await swaggerApi.adventureController.adventureControllerGetById(id)
  return data.data
}

export const useGetAdventure = <TData = AdventureResponseDto>(
  id: string,
  options?: UseQueryOptions<
    Promise<AdventureResponseDto>,
    AxiosError,
    TData,
    [QueryKey, string]
  >
): UseQueryResult<TData, AxiosError> => {
  return useQuery(
    [['getCenterOperationMemo'], id],
    async () => await getAdventure(id),
    options
  )
}

export const postAdventure = async (body: CreateAdventureDto) => {
  const data =
    await swaggerApi.adventureController.adventureControllerCreate(body)
  return data.data
}

export const postNextStep = async (body: CreateAdventureDto) => {
  const data =
    await swaggerApi.adventureController.adventureControllerCreate(body)
  return data.data
}

export const postFinalStep = async (body: CreateAdventureDto) => {
  const data =
    await swaggerApi.adventureController.adventureControllerCreate(body)
  return data.data
}
