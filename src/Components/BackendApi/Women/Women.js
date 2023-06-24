import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const backendURL = "http://localhost:5000";

export const Women = createAsyncThunk("api/getAllWomenProduct", async () => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        token: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      config: { withCredentials: true },
    };

    const { data } = await axios.get(
      `${backendURL}/api/getAllWomenProduct`,
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
});

export const WomenProductSearch = createAsyncThunk(
  "api/searchWomenTitle/:title",
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
        `${backendURL}/api/searchWomenTitle/${data.title}`,
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

export const WomenProductById = createAsyncThunk(
  "api/getByIdWomenProduct/:id",
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
        `${backendURL}/api/getByIdWomenProduct/${data.id}`,
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

export const AddWomenProduct = createAsyncThunk(
  "api/addWomenProduct",
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
        `${backendURL}/api/addWomenProduct`,
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

export const RemoveWomenProduct = createAsyncThunk(
  "api/deleteByIdWomen/:id",
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
        `${backendURL}/api/deleteByIdWomen/${data}`,
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

export const UpdateWomenProduct = createAsyncThunk(
  "api/updateWomen/:id",
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
        `${backendURL}/api/updateWomen/${data._id}`,
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
