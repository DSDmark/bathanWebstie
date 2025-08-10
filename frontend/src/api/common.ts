import urlcat from 'urlcat'
import { baseApi } from '.'
import { SuccessResult } from './types/base'

const apiWithAuthTags = baseApi.enhanceEndpoints({ addTagTypes: ['common'] })
const commonAPIs = apiWithAuthTags.injectEndpoints({
  endpoints: builder => ({
    getSkills: builder.query<SuccessResult<any>, any>({
      query: params => ({
        url: urlcat('/common/skills', params),
        method: 'GET',
      }),
      transformResponse: (res: any) => {
        return {
          message: res.message,
          data: res.data,
        }
      },
    }),
    getDepartments: builder.query<SuccessResult<any>, any>({
      query: params => ({
        url: urlcat('/common/departments', params),
        method: 'GET',
      }),
      transformResponse: (res: any) => {
        return {
          message: res.message,
          data: res.data,
        }
      },
    }),
    getSeniorityLevels: builder.query<SuccessResult<any>, any>({
      query: params => ({
        url: urlcat('/common/seniority-levels', params),
        method: 'GET',
      }),
      transformResponse: (res: any) => {
        return {
          message: res.message,
          data: res.data,
        }
      },
    }),
    getEmpTypes: builder.query<SuccessResult<any>, any>({
      query: params => ({
        url: urlcat('/common/emp-types', params),
        method: 'GET',
      }),
      transformResponse: (res: any) => {
        return {
          message: res.message,
          data: res.data,
        }
      },
    }),
  }),
})

export const { useGetSkillsQuery } = commonAPIs

export default commonAPIs
