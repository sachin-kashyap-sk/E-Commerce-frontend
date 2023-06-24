import { createSlice } from "@reduxjs/toolkit";
import {
  userLogin,
  registerUser,
} from "../../BackendApi/LoginAndRegister/LoginAuth";

// initialize userToken from local storage
const accessToken = localStorage.getItem("accessToken")
  ? localStorage.getItem("token")
  : null;

const initialState = {
  loading: false,
  userInfo: localStorage.getItem("isAdmin") || "false",
  accessToken,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    resetState: (state) => {
      state.loading = false;
      state.userInfo = null;
      state.accessToken = null;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: {
    // Register user

    [registerUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true; // registration successful
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    // login user

    [userLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload.isAdmin.toString();
      state.success = true;
      state.accessToken = payload.accessToken;
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});
export const { resetState } = authSlice.actions;
export const selectedUser = (state) => state.Auth;
export default authSlice.reducer;
