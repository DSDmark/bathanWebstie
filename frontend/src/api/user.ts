import { baseApi } from ".";
import { SuccessResult } from "./types/base";

const apiWithAuthTags = baseApi.enhanceEndpoints({ addTagTypes: ["user"] });
const userAPIs = apiWithAuthTags.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<SuccessResult<any>, any>({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
      transformResponse: (res: any) => {
        return {
          message: res.message,
          data: res.data,
        };
      },
    }),
    register: builder.mutation<SuccessResult<any>, any>({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        body: data,
      }),
      transformResponse: (res: any) => {
        return {
          message: res.message,
          data: res.data,
        };
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = userAPIs;

export default userAPIs;
