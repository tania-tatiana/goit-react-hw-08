import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuthHeader = (value) => {
  axios.defaults.headers.common.Authorization = value;
};

export const register = createAsyncThunk("auth/register", async (values) => {
  const res = await axios.post("users/signup", values);
  setAuthHeader(`Bearer ${res.data.token}`);
  return res.data;
});

export const logIn = createAsyncThunk("auth/login", async (values) => {
  const res = await axios.post("users/login", values);
  setAuthHeader(`Bearer ${res.data.token}`);
  return res.data;
});

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  const token = thunkAPI.getState().auth.token;
  if (!token) return;

  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  await axios.post("/users/logout");
  setAuthHeader("");
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const reduxState = thunkAPI.getState();
    setAuthHeader(`Bearer ${reduxState.auth.token}`);
  },
  {
    condition: (_, thunkAPI) => {
      const reduxState = thunkAPI.getState();
      return reduxState.auth.token !== null;
    },
  }
);
