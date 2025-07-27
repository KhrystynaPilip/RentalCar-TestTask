import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";
import toast from "react-hot-toast";

export const getAllCars = createAsyncThunk(
  "cars/getAllCars",
  async (params, thunkAPI) => {
    try {
      const response = await api.get("/cars", { params });
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
      toast.error("Something went wrong, please try again");
    }
  }
);

export const getCarById = createAsyncThunk(
  "oneCar/getCarById",
  async (id, thunkAPI) => {
    try {
      const response = await api.get(`/cars/${id}`);
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
      toast.error("Something went wrong, please try again");
    }
  }
);
