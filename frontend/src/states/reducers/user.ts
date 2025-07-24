import { AUTH_ROUTE, STORAGE_VALUES } from "@/constants";
import { CookiesUtil } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";
import Router from "next/router";
import { userInitialState } from "../constants";

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    setUser: (state, action) => {
      state.details = action.payload;
    },
    resetUser: (state) => {
      state.details = userInitialState;
      CookiesUtil.remove(STORAGE_VALUES.mainAuthToken);
      Router.replace(AUTH_ROUTE.login);
    },
  },
});

export const { resetUser, setUser } = userSlice.actions;
export default userSlice.reducer;
