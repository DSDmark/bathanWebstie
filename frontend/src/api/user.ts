import urlcat from 'urlcat'
import { baseApi } from '.'
import { SuccessResult } from './types/base'

const apiWithAuthTags = baseApi.enhanceEndpoints({ addTagTypes: ['user'] })
const userAPIs = apiWithAuthTags.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<SuccessResult<any>, any>({
      query: data => ({
        url: '/auth/login',
        method: 'POST',
        body: data,
      }),
      transformResponse: (res: any) => {
        return {
          message: res.message,
          data: res.data,
        }
      },
    }),
    register: builder.mutation<SuccessResult<any>, any>({
      query: data => ({
        url: '/auth/create-manager',
        method: 'POST',
        body: data,
      }),
      transformResponse: (res: any) => {
        return {
          message: res.message,
          data: res.data,
        }
      },
    }),
    getUserDetails: builder.query<SuccessResult<any>, void>({
      query: () => ({
        url: '/user/user-details',
        method: 'GET',
      }),
      transformResponse: (res: any) => {
        return {
          message: res.message,
          data: res.data,
        }
      },
    }),
    updateUserProfile: builder.mutation<SuccessResult<any>, any>({
      query: data => ({
        url: '/user/profile',
        method: 'PATCH',
        body: data,
      }),
      transformResponse: (res: any) => {
        return {
          message: res.message,
          data: res.data,
        }
      },
    }),
    createEngineer: builder.mutation<SuccessResult<any>, any>({
      query: data => ({
        url: '/user/create-engineer',
        method: 'POST',
        body: data,
      }),
      transformResponse: (res: any) => {
        return {
          message: res.message,
          data: res.data,
        }
      },
    }),
    getAllUserListByRole: builder.query<SuccessResult<any>, any>({
      query: data => ({
        url: urlcat('/user/user-by-role', data),
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

export const {
  useGetAllUserListByRoleQuery,
  useLoginMutation,
  useRegisterMutation,
  useUpdateUserProfileMutation,
  useCreateEngineerMutation,
} = userAPIs

export default userAPIs
