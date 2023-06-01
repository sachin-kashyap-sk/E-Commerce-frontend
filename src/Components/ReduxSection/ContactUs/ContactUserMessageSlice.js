import { createSlice } from "@reduxjs/toolkit";
import ContactUserMessage from "./../../BackendApi/ContactUs/ContactUserMessage";

const initialState = {
  headerText: "",
  msg: "",
  subMsg: "",
  loading: false,
  success: false,
  error: null,
};

const ContactUserMessageSlice = createSlice({
  name: "ContactUserMessage",
  initialState,

  reducers: {},

  extraReducers: {
    [ContactUserMessage.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },

    [ContactUserMessage.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.headerText = payload;
      state.msg = payload;
      state.subMsg = payload;
      state.success = true;
    },

    [ContactUserMessage.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default ContactUserMessageSlice.reducer;
