import { createSlice } from "@reduxjs/toolkit";
import { AboutHeader } from "../../BackendApi/About/AboutHeader";

const initialState = {
  _id: "",
  image: "",
  loading: false,
  error: null,
  success: false,
};

const AboutHeaderSlice = createSlice({
  name: "AboutHeader",
  initialState,

  reducers: {},

  extraReducers: {
    [AboutHeader.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },

    [AboutHeader.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state._id = payload;
      state.image = payload;
    },

    [AboutHeader.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default AboutHeaderSlice.reducer;
