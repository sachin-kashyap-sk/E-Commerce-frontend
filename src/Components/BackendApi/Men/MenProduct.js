import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const backendURL = "http://localhost:5000";

export const MenProduct = createAsyncThunk("api/getAllMenProduct", async () => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        token: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      config: { withCredentials: true },
    };

    const { data } = await axios.get(
      `${backendURL}/api/getAllMenProduct`,
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

export const MenProductSearch = createAsyncThunk(
  "api/searchMenTitle/:title",
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
        `${backendURL}/api/searchMenTitle/${data.title}`,
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

export const MenProductById = createAsyncThunk(
  "api/getByIdMen/:id",
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
        `${backendURL}/api/getByIdMen/${data.id}`,
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


export const AddMenProduct = createAsyncThunk(
  "api/addMenProduct",
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
        `${backendURL}/api/addMenProduct`,
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


export const RemoveMenProduct = createAsyncThunk(
  "api/deleteByIdMen/:id",
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
        `${backendURL}/api/deleteByIdMen/${data}`,
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

export const UpdateMenProduct = createAsyncThunk(
  "api/updateMenProduct/:id",
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
        `${backendURL}/api/updateMenProduct/${data._id}`,
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


