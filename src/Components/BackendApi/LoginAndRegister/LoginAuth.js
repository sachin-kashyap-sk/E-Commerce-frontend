import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const backendURL = "http://localhost:5000";

export const registerUser = createAsyncThunk(
  "api/register",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post(
        `${backendURL}/api/register`,
        { email, password },
        config
      );
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const userLogin = createAsyncThunk(
  "api/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
          accessToken: localStorage.getItem("accessToken"),
          isAdmin: localStorage.getItem("isAdmin"),
        },
        config: { withCredentials: true },
      };

      const { data } = await axios.post(
        `${backendURL}/api/login`,
        { email, password },
        config
      );
      // store user's token in local storage
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("isAdmin", data.isAdmin);
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
