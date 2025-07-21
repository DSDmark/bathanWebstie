// import userAPIs from "@/api/user"
// import { APP_NAME, FRONTEND_BASE_URL, LOGIN_REDIRECT_URL, PUBLIC_ROUTE, STORAGE_VALUES } from "@/constants"
// import { createAsyncThunk } from "@reduxjs/toolkit"
// import Cookie from "js-cookie"
// import Router from "next/router"

// import { persistor, setIsLoggedIn, setUserAppAccess } from ".."
// import { resetPermissions, setPermissions } from "../reducers/permission"

// export const getUserData = createAsyncThunk(
//   "user/getUserDetails",
//   async (id: number | null, { dispatch, rejectWithValue }) => {
//     const res = await dispatch(userAPIs.endpoints.getUserDetails.initiate({ id }))
//     if (res.data) {
//       dispatch(setPermissions({ role: res?.data?.data?.user.role, permissions: res.data?.data?.permissions }))
//       dispatch(getUserAppAccess(res?.data?.data?.user?.ssoId))
//       return res.data.data
//     } else {
//       return rejectWithValue(res.error)
//     }
//   },
// )
