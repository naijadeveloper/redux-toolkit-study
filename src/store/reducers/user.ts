import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type payload = {
  name: string;
  age: number;
  email: string;
}

type stateType<T> = {
  value: T
}



const user = createSlice({
  name: "user",
  initialState: {value: {name: "", age: 0, email: ""}} as stateType<payload>,
  reducers: {
  }
});


export const userActions = user.actions;
export const userReducer = user.reducer;