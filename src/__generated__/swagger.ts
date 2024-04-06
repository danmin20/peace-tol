/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface CreateUserDto {
  /** @example "0c6962ee-3658-4201-b74a-de81979f49ed" */
  uuid: string
}

export interface MissionDto {
  body: string
  quote: string
  imagePath: string
}

export interface AdventureResponseDto {
  id: number
  /** @format date-time */
  createdAt: string
  /** @format date-time */
  endedAt: string
  difficulty: number
  missions: MissionDto[]
}

export interface CreateAdventureDto {
  difficulty: number
  userUuid: string
}

export interface AdventureCreationResponseDto {
  id: number
}

export interface AddNextStepForAdventureDto {
  userUuid: string
  answerType: string
}

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from 'axios'
import axios from 'axios'

export type QueryParamsType = Record<string | number, any>

export interface FullRequestParams extends Omit<AxiosRequestConfig, 'data' | 'params' | 'url' | 'responseType'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean
  /** request path */
  path: string
  /** content type of request body */
  type?: ContentType
  /** query params */
  query?: QueryParamsType
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType
  /** request body */
  body?: unknown
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, 'data' | 'cancelToken'> {
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void
  secure?: boolean
  format?: ResponseType
}

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain'
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance
  private securityData: SecurityDataType | null = null
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker']
  private secure?: boolean
  private format?: ResponseType

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || '' })
    this.secure = secure
    this.format = format
    this.securityWorker = securityWorker
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data
  }

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method)

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {})
      }
    }
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === 'object' && formItem !== null) {
      return JSON.stringify(formItem)
    } else {
      return `${formItem}`
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key]
      const propertyContent: any[] = property instanceof Array ? property : [property]

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem))
      }

      return formData
    }, new FormData())
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {}
    const requestParams = this.mergeRequestParams(params, secureParams)
    const responseFormat = format || this.format || undefined

    if (type === ContentType.FormData && body && body !== null && typeof body === 'object') {
      body = this.createFormData(body as Record<string, unknown>)
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== 'string') {
      body = JSON.stringify(body)
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {})
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path
    })
  }
}

/**
 * @title Peacetol
 * @version 1.0
 * @contact
 *
 * API description
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  헬로헬로 = {
    /**
     * @description 안녕하신가요
     *
     * @tags 헬로 헬로
     * @name HelloControllerFindOne
     * @summary 헬로 n번 API
     * @request GET:/hello/{id}
     */
    helloControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/hello/${id}`,
        method: 'GET',
        ...params
      }),

    /**
     * @description 이건 서비스를 호출해서 반환
     *
     * @tags 헬로 헬로
     * @name HelloControllerFindWithService
     * @summary 헬로 서비스~
     * @request GET:/hello/with-service
     */
    helloControllerFindWithService: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/hello/with-service`,
        method: 'GET',
        ...params
      })
  }
  userController = {
    /**
     * No description
     *
     * @tags UserController
     * @name UserControllerCreateUserUuid
     * @summary 유저 uuid 생성 및 조회
     * @request POST:/api/v1/users
     */
    userControllerCreateUserUuid: (params: RequestParams = {}) =>
      this.request<CreateUserDto, any>({
        path: `/api/v1/users`,
        method: 'POST',
        format: 'json',
        ...params
      })
  }
  adventureController = {
    /**
     * No description
     *
     * @tags AdventureController
     * @name AdventureControllerGetById
     * @request GET:/api/v1/adventures/{id}
     */
    adventureControllerGetById: (id: string, params: RequestParams = {}) =>
      this.request<AdventureResponseDto, any>({
        path: `/api/v1/adventures/${id}`,
        method: 'GET',
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags AdventureController
     * @name AdventureControllerCreate
     * @summary 모험 생성
     * @request POST:/api/v1/adventures
     */
    adventureControllerCreate: (data: CreateAdventureDto, params: RequestParams = {}) =>
      this.request<AdventureCreationResponseDto, any>({
        path: `/api/v1/adventures`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags AdventureController
     * @name AdventureControllerAddNextStep
     * @summary 모험의 다음 단계 생성
     * @request PUT:/api/v1/adventures/{id}/next-step
     */
    adventureControllerAddNextStep: (id: string, data: AddNextStepForAdventureDto, params: RequestParams = {}) =>
      this.request<AdventureCreationResponseDto, any>({
        path: `/api/v1/adventures/${id}/next-step`,
        method: 'PUT',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params
      }),

    /**
     * No description
     *
     * @tags AdventureController
     * @name AdventureControllerAddFinalStep
     * @summary 모험의 마지막 단계 생성
     * @request PUT:/api/v1/adventures/{id}/final-step
     */
    adventureControllerAddFinalStep: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/adventures/${id}/final-step`,
        method: 'PUT',
        ...params
      }),

    /**
     * No description
     *
     * @tags AdventureController
     * @name AdventureControllerFinishAdventure
     * @summary 모험 마무리
     * @request POST:/api/v1/adventures/{id}/finish
     */
    adventureControllerFinishAdventure: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v1/adventures/${id}/finish`,
        method: 'POST',
        ...params
      })
  }
}
