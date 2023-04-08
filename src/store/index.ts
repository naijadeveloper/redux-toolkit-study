import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user";

const store = configureStore({
  reducer: {
    userInfo: userReducer,
  }
});

export type rootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;

export default store;