import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setUserData: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export const { setUserData } = profileSlice.actions;

export default profileSlice.reducer;
