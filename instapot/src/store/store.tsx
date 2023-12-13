import { configureStore } from "@reduxjs/toolkit";
import authReducer, { rootReducer } from "./reducers";

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: { authReducer },
});

export default store;
