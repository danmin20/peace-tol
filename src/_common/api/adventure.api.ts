import {
  QueryKey,
  UseQueryOptions,
  UseQueryResult,
  useMutation,
  useQuery
} from '@tanstack/react-query'
import { AxiosError } from 'axios'

import {
  AddNextStepForAdventureDto,
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

const postAdventure = async (body: CreateAdventureDto) => {
  const data =
    await swaggerApi.adventureController.adventureControllerCreate(body)
  return data.data
}

export const usePostAdventureMutation = () => {
  return useMutation(postAdventure)
}

type AddNextStepForAdventureBody = {
  id: string
  body: AddNextStepForAdventureDto
}

const postNextStep = async ({ id, body }: AddNextStepForAdventureBody) => {
  const data =
    await swaggerApi.adventureController.adventureControllerAddNextStep(
      id,
      body
    )
  return data.data
}

export const usePostNextStepMutation = () => {
  return useMutation(postNextStep)
}

const postFinalStep = async (id: number) => {
  const data =
    await swaggerApi.adventureController.adventureControllerAddFinalStep(id)
  return data.data
}

export const usePostFinalStepMutation = () => {
  return useMutation(postFinalStep)
}

const postFinishStep = async (id: number) => {
  const data =
    await swaggerApi.adventureController.adventureControllerFinishAdventure(id)
  return data.data
}

export const usePostFinishStepMutation = () => {
  return useMutation(postFinishStep)
}
