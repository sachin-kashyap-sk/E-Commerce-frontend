import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const backendURL = "http://localhost:5000";

export const HomeProduct = createAsyncThunk(
  "api/getAllHomeProduct",
  async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          token: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        config: { withCredentials: true },
      };

      const { data } = await axios.get(
        `${backendURL}/api/getAllHomeProduct`,
        config
      );
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return error.response.data.message;
      } else {
        return error.message;
      }
    }
  }
);

export const HomeProductById = createAsyncThunk(
  "api/getByIdHomeProduct/:id",
  async (data) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          token: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        config: { withCredentials: true },
      };

      const { data: value } = await axios.get(
        `${backendURL}/api/getByIdHomeProduct/${data.id}`,
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

export const ProductSearch = createAsyncThunk(
  "api/searchProduct/:title",
  async (data) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          token: `Bearer ${localStorage.getItem("accessToken")}`,
        },

        config: { withCredentials: true },
      };

      const { data: value } = await axios.get(
        `${backendURL}/api/searchProduct/${data.title}`,
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

export const AddProduct = createAsyncThunk(
  "api/addHomeProduct",
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
        `${backendURL}/api/addHomeProduct`,
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
  }
);

export const UpdateProduct = createAsyncThunk(
  "api/updateHomeProduct/:id",
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
        `${backendURL}/api/updateHomeProduct/${data._id}`,
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
  }
);

export const RemoveHomeProduct = createAsyncThunk(
  "api/deleteHomeProduct/:id",
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
        `${backendURL}/api/deleteHomeProduct/${data}`,
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
