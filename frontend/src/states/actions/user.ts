import userAPIs from '@/api/user'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const getUserDetails = createAsyncThunk('user/user-details', async (_: any, { dispatch, rejectWithValue }) => {
  const res = await dispatch(userAPIs.endpoints.getUserDetails.initiate())
  if (res.data) {
    return res.data.data
  } else {
    return rejectWithValue(res.error)
  }
})
