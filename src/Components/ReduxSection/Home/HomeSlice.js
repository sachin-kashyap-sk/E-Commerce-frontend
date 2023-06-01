import { createSlice } from "@reduxjs/toolkit";
import HomeHeader from "../../BackendApi/Home/HomeHeader";
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

const HomeSlice = createSlice({
  name: "Home",
  initialState,

  reducers: {},

  extraReducers: {
    [HomeHeader.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },

    [HomeHeader.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state._id = payload;
      state.value = payload;
    },

    [HomeHeader.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});
export const selectedCard = (state) => state.Home.cards;
export default HomeSlice.reducer;
