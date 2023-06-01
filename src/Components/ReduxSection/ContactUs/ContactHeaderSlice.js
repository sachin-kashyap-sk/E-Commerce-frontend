import { createSlice } from "@reduxjs/toolkit";
import ContactHeader from "../../BackendApi/ContactUs/ContactHeader";

const initialState = {
  image: "",
  loading: false,
  success: false,
  error: null,
};

const ContactHeaderSlice = createSlice({
  name: "ContactHeader",
  initialState,

  reducers: {},

  extraReducers: {
    [ContactHeader.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },

    [ContactHeader.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.image = payload;
      state.success = true;
    },

    [ContactHeader.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default ContactHeaderSlice.reducer;
