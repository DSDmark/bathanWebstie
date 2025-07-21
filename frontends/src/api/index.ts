import { AUTH_ROUTE, BASE_URL_WITH_POSTFIX, STORAGE_VALUES } from "@/constants";
import { CookiesUtil } from "@/utils";
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import Router from "next/router";

const baseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const rawBaseQuery = fetchBaseQuery({
    baseUrl: `${BASE_URL_WITH_POSTFIX}`,
    prepareHeaders: (headers) => {
      const accessToken = CookiesUtil.get(STORAGE_VALUES.mainAuthToken);

      if (accessToken) {
        headers.set("Authorization", `Bearer ${accessToken}`);
      }

      return headers;
    },
  });

  const result = await rawBaseQuery(args, api, extraOptions);
  if (result?.meta?.response) {
    const accessToken = result.meta.response.headers.get(
      STORAGE_VALUES.mainAuthToken
    );

    if (accessToken) {
      CookiesUtil.set(STORAGE_VALUES.mainAuthToken, { value: accessToken });
    }
  }

  return result;
};

const baseQueryWithReAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    CookiesUtil.remove(STORAGE_VALUES.mainAuthToken);
    Router.push(AUTH_ROUTE.login);
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "apiService",
  baseQuery: baseQueryWithReAuth,
  keepUnusedDataFor: 5 * 60,
  refetchOnMountOrArgChange: 30 * 60,
  endpoints: () => ({}),
});
