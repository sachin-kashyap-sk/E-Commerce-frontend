import { createSlice } from "@reduxjs/toolkit";
import { AboutWeAre } from "../../BackendApi/About/AboutWeAre";

const initialState = {
  _id: "",
  title: "",
  subTitle: "",
  weAreImage: "",
  loading: false,
  error: null,
  success: false,
};

const AboutWeAreSlice = createSlice({
  name: "AboutWeAre",
  initialState,

  reducers: {},

  extraReducers: {
    [AboutWeAre.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },

    [AboutWeAre.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state._id = payload;
      state.title = payload;
      state.subTitle = payload;
      state.weAreImage = payload;
    },

    [AboutWeAre.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default AboutWeAreSlice.reducer;
