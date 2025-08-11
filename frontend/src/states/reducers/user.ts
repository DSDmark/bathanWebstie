import { createSlice } from '@reduxjs/toolkit'
import { getUserDetails } from '../actions/user'
import { userInitialState } from '../constants'

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    setUser: (state, action) => {
      state.details = action.payload
    },
    resetUser: state => {
      state.details = userInitialState.details
    },
  },
  extraReducers: builder => {
    // current User
    builder.addCase(getUserDetails.pending, state => {
      state.details = userInitialState.details
    })
    builder.addCase(getUserDetails.fulfilled, (state, action) => {
      state.details = action.payload
    })
    builder.addCase(getUserDetails.rejected, state => {
      state.details = userInitialState.details
    })
  },
})

export const { resetUser, setUser } = userSlice.actions
export default userSlice.reducer
