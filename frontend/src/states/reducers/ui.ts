import { createSlice } from "@reduxjs/toolkit";
import { uiInitialState } from "../constants";

const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { setMode } = uiSlice.actions;
export default uiSlice.reducer;
