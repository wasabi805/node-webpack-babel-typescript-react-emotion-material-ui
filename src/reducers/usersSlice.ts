import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IUserState {
  name?: string;
  value?: number;
}

const initialState: IUserState = {
  name: "Tim",
  value: 0,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    increment: (state) => {
      state.value = state?.value! + 1;
    },
    decrement: (state) => {
      state.value = state?.value! - 1;
    },
  },
});

export const { increment, decrement } = userSlice.actions;

export default userSlice.reducer;
