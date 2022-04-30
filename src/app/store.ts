import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { launchApi } from "../services/launch";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [launchApi.reducerPath]: launchApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(launchApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
