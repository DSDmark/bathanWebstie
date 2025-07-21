import { AUTH_ROUTE, STORAGE_VALUES } from "@/constants";
import { CookiesUtil } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";
import Router from "next/router";

// import { getTokenData, getUserAppAccess, getUserData, resetUserData } from "../actions"
// import { userInitialState } from "../constants"

const userInitialState: any = {
  user: {},
};

const userDetailSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    resetUser: (state) => {
      state.user = userInitialState.user;
      CookiesUtil.remove(STORAGE_VALUES.mainAuthToken);
      Router.replace(AUTH_ROUTE.login);
    },
  },
  // extraReducers: builder => {
  //   // user
  //   builder.addCase(getUserData.fulfilled, (state, action) => {
  //     state.currentUser.user = action.payload.user
  //     state.currentUser.additionalData = action.payload.additionalData
  //   })
  //   // reset
  //   builder.addCase(resetUserData.fulfilled, state => {
  //     state.currentUser = userInitialState.currentUser
  //   })
  //   // token
  //   builder.addCase(getTokenData.fulfilled, (state, action) => {
  //     state.isLoggedIn = action.payload || false
  //   })
  //   // appAccess
  //   builder.addCase(getUserAppAccess.fulfilled, (state, action) => {
  //     state.userAppAccess = action.payload
  //   })
  // },
});

export const { resetUser, setUser } = userDetailSlice.actions;
export default userDetailSlice.reducer;
