import { createSlice } from "@reduxjs/toolkit";
import HomeShopNow from "./../../BackendApi/Home/HomeShopNow";
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

const HomeShopNowSlice = createSlice({
  name: "HomeShopNow",
  initialState,

  reducers: {},

  extraReducers: {
    [HomeShopNow.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [HomeShopNow.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state._id = payload;
      state.value = payload;
    },

    [HomeShopNow.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default HomeShopNowSlice.reducer;
