import { baseApi } from "@/api";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { rtkQueryErrorLogger } from "./middleware";

// reducers
import { DEV } from "@/constants";
import userReducer from "./reducers/user";

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  user: userReducer,
});

const makeStore = () => {
  const store = configureStore({
    devTools: DEV,
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseApi.middleware, rtkQueryErrorLogger),
  });
  return { store };
};

const { store } = makeStore();
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

// actions
export { resetUser, setUser } from "./reducers/user";
