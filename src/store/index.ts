import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "../store/reducers/quote";

const store = configureStore({
  reducer: {
    quote: quoteReducer,
  }
});

export type rootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;

export default store;