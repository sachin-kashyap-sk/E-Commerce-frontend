import { createSlice } from "@reduxjs/toolkit";
import HomeBrand from "./../../BackendApi/Home/HomeBrand";

const initialState = {
  value: [
    {
      _id: "",
      image: "",
    },
  ],
  loading: false,
  error: null,
  success: false,
};

const BrandSlice = createSlice({
  name: "Brand",
  initialState,

  reducers: {},

  extraReducers: {
    [HomeBrand.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },

    [HomeBrand.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.value = payload;
    },

    [HomeBrand.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default BrandSlice.reducer;
