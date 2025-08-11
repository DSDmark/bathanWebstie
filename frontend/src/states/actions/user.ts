import userAPIs from '@/api/user'
import { AUTH_ROUTE, STORAGE_VALUES } from '@/constants'
import { CookiesUtil } from '@/utils'
import { createAsyncThunk } from '@reduxjs/toolkit'
import Router from 'next/router'
import { resetUser } from '../reducers/user'

export const logoutUser = () => (dispatch: any) => {
  dispatch(resetUser())
  dispatch(userAPIs.util.invalidateTags(['user']))
  CookiesUtil.remove(STORAGE_VALUES.mainAuthToken)
  if (!Object.values(AUTH_ROUTE).includes(Router.pathname)) {
    Router.replace(AUTH_ROUTE.login)
  }
}

export const getUserDetails = createAsyncThunk('user/user-details', async (_: any, { dispatch, rejectWithValue }) => {
  const res = await dispatch(userAPIs.endpoints.getUserDetails.initiate(undefined, { forceRefetch: true }))
  if (res.data) {
    return res.data.data
  } else {
    return rejectWithValue(res.error)
  }
})
