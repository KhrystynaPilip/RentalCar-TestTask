import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { carsReducer, favoritesReducer, oneCarReducer } from "./catalog/slice";
import filtersReducer from "./filters/slice";

const favoritesConfig = {
  key: "favorites",
  storage,
};

export const store = configureStore({
  reducer: {
    favorites: persistReducer(favoritesConfig, favoritesReducer),
    cars: carsReducer,
    oneCar: oneCarReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
