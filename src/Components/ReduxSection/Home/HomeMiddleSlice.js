import { createSlice } from "@reduxjs/toolkit";
import HomeProduct from "../../BackendApi/Home/HomeProduct";
const initialState = {
  value: [
    {
      _id: "",
      image: "",
      title: "",
      gender: "",
      price: 0,
      description: "",
    },
  ],
  loading: false,
  error: null,
  success: false,
};

const HomeMiddleSlice = createSlice({
  name: "HomeMiddle",
  initialState,

  reducers: {},
  extraReducers: {
    [HomeProduct.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [HomeProduct.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.value = payload;
    },

    [HomeProduct.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default HomeMiddleSlice.reducer;
