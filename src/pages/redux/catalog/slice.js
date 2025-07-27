import { createSlice } from "@reduxjs/toolkit";
import { getAllCars, getCarById } from "./operations";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    data: [],
    totalPages: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    resetCars: (state) => {
      state.data = [];
      state.totalPages = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCars.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(getAllCars.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.data = action.payload.cars;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(getAllCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { resetCars } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;

const oneCarSlice = createSlice({
  name: "oneCar",
  initialState: {
    data: {},
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCarById.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(getCarById.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getCarById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const oneCarReducer = oneCarSlice.reducer;

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: { ids: [] },
  reducers: {
    addToFavorites: (state, action) => {
      if (!state.ids.includes(action.payload)) {
        state.ids.push(action.payload);
      }
    },
    deleteFromFavorites: (state, action) => {
      state.ids = state.ids.filter((id) => id !== action.payload);
    },
  },
});

export const { addToFavorites, deleteFromFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
