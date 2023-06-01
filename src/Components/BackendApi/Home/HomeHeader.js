import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const backendURL = "http://localhost:5000";

const HomeHeader = createAsyncThunk("api/getAllHeader", async () => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        token: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      config: { withCredentials: true },
    };

    const { data } = await axios.get(`${backendURL}/api/getAllHeader`, config);
    // console.log(data);
    return data;
  } catch (error) {
    if (error.response && error.response.data.message) {
      return error.response.data.message;
    } else {
      return error.message;
    }
  }
});

export default HomeHeader;
