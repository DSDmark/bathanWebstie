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
  }),
})

export const { useLoginMutation, useRegisterMutation, useUpdateUserProfileMutation } = userAPIs

export default userAPIs
