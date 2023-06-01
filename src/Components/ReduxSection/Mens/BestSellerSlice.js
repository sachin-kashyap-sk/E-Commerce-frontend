import { createSlice } from "@reduxjs/toolkit";
import BestSellerProduct from "../../BackendApi/BestSeller/BestSeller";

const initialState = {
  value: [
    {
      _id: "",
      image: "",
      title: "",
      price: 0,
    },
  ],
};

const bestSellerSlice = createSlice({
  name: "BestSeller",
  initialState,

  reducers: {},
  extraReducers: {
    [BestSellerProduct.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [BestSellerProduct.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state._id = payload;
      state.value = payload;
    },

    [BestSellerProduct.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default bestSellerSlice.reducer;
