import { createSlice } from "@reduxjs/toolkit";
import ContactQueries from "./../../BackendApi/ContactUs/ContactQueries";

const initialState = {
  title: "",
  subTitle: "",
  loading: false,
  success: false,
  error: null,
};

const ContactQueriesSlice = createSlice({
  name: "ContactQueries",
  initialState,

  reducers: {},
  extraReducers: {
    [ContactQueries.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },

    [ContactQueries.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.title = payload;
      state.subTitle = payload;
      state.success = true;
    },

    [ContactQueries.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default ContactQueriesSlice.reducer;
