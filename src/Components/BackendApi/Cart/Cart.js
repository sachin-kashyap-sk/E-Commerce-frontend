import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const backendURL = "http://localhost:5000";
export const PostCart = createAsyncThunk("api/addToCart", async (data) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        token: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      config: { withCredentials: true },
    };

    const { data: value } = await axios.post(
      `${backendURL}/api/addToCart`,
      { ...data },
      config
    );
    return value;
  } catch (error) {
    if (error.response && error.response.data.message) {
      return error.response.data.message;
    } else {
      return error.message;
    }
  }
});

export const CartApi = createAsyncThunk("api/getAllCart", async () => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        token: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      config: { withCredentials: true },
    };

    const { data } = await axios.get(`${backendURL}/api/getAllCart`, config);
    return data;
  } catch (error) {
    if (error.response && error.response.data.message) {
      return error.response.data.message;
    } else {
      return error.message;
    }
  }
});

export const UpdateToCart = createAsyncThunk(
  "api/updateToCart/:id",
  async (data) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          token: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        config: { withCredentials: true },
      };

      const { data: value } = await axios.post(
        `${backendURL}/api/updateToCart/${data._id}`,
        { products: data.products },

        config
      );
      return value;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return error.response.data.message;
      } else {
        return error.message;
      }
    }
  }
);

export const CartDelete = createAsyncThunk(
  "api/deleteFromCart/:id",
  async (data) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          token: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        config: { withCredentials: true },
      };

      const { data: value } = await axios.delete(
        `${backendURL}/api/deleteFromCart/${data}`,
        config
      );
      return value;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return error.response.data.message;
      } else {
        return error.message;
      }
    }
  }
);
