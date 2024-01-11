import { configureStore } from "@reduxjs/toolkit";
import Slice1 from "./features/slice1";

export const store = configureStore({
  reducer: {
    Slice1,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
