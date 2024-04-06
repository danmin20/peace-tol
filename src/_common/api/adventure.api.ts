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
  AdventureCountCreationResponseDto,
  CreateAdventureDto,
  CreateReviewDto,
  RecentAdventureResponseDto
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

const postFinalStep = async ({ id, body }: AddNextStepForAdventureBody) => {
  const data =
    await swaggerApi.adventureController.adventureControllerAddFinalStep(
      id,
      body
    )
  return data.data
}

export const usePostFinalStepMutation = () => {
  return useMutation(postFinalStep)
}

type CreateReviewBody = {
  id: string
  body: CreateReviewDto
}

const postFinishAdventure = async ({ id, body }: CreateReviewBody) => {
  const data =
    await swaggerApi.adventureController.adventureControllerFinishAdventure(
      id,
      body
    )
  return data.data
}

export const usePostFinishAdventureMutation = () => {
  return useMutation(postFinishAdventure)
}

const getUserAdventureCount = async (uuid: string) => {
  const response =
    await swaggerApi.adventureController.adventureControllerGetAdventureCount(
      uuid
    )
  return response.data
}

export const useGetUserAdventureCount = <
  TData = AdventureCountCreationResponseDto
>(
  uuid: string,
  options?: UseQueryOptions<
    Promise<AdventureCountCreationResponseDto>,
    AxiosError,
    TData,
    [QueryKey, string]
  >
): UseQueryResult<TData, AxiosError> => {
  return useQuery(
    [['getUserAdventureCount'], uuid],
    async () => await getUserAdventureCount(uuid),
    options
  )
}

const getUserAdventureList = async (uuid: string) => {
  const response =
    await swaggerApi.adventureController.adventureControllerGetRecentAdventure(
      uuid
    )
  return response.data
}

export const useGetUserAdventureList = <TData = RecentAdventureResponseDto[]>(
  uuid: string,
  options?: UseQueryOptions<
    Promise<RecentAdventureResponseDto>,
    AxiosError,
    TData,
    [QueryKey, string]
  >
): UseQueryResult<TData, AxiosError> => {
  return useQuery(
    [['getUserAdventureList'], uuid],
    async () => await getUserAdventureList(uuid),
    options
  )
}
