// import { baseApi } from '.'
// import { SuccessResult } from './types/base'

// const apiWithAuthTags = baseApi.enhanceEndpoints({ addTagTypes: ['engineer-management'] })
// const engineerManagementAPIs = apiWithAuthTags.injectEndpoints({
//   endpoints: builder => ({
//     createEngineer: builder.mutation<SuccessResult<any>, any>({
//       query: data => ({
//         url: '/engineer-management',
//         method: 'POST',
//         body: data,
//       }),
//       transformResponse: (res: any) => {
//         return {
//           message: res.message,
//           data: res.data,
//         }
//       },
//     }),
//   }),
// })

// export const { useCreateEngineerMutation } = engineerManagementAPIs
// export default engineerManagementAPIs
