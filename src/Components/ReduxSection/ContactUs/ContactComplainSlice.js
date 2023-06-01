import { createSlice } from "@reduxjs/toolkit";
import ContactComplain from "../../BackendApi/ContactUs/ContactComplain";

const initialState = {
  data: [
    {
      _id: "",
      department: "",
      title: "",
      contact: "",
    },
  ],
  loading: false,
  success: false,
  error: null,
};

const ContactComplainSlice = createSlice({
  name: "ContactComplain",
  initialState,

  reducers: {},

  extraReducers: {
    [ContactComplain.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },

    [ContactComplain.fulfilled]: (state, { payload }) => {
      state.loading = false;
      // state.title = payload;
      state.data = payload;
      state.success = true;
    },

    [ContactComplain.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default ContactComplainSlice.reducer;
