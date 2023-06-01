import { createSlice } from "@reduxjs/toolkit";
import HomeLimitedTimeOffer from "../../BackendApi/Home/HomeLimitedTimeOffer";

const initialState = {
  value: [
    {
      _id: "",
      headerTitle: "",
      title: "",
      subTitle: "",
      image: "",
    },
  ],

  loading: false,
  success: false,
  error: null,
};

const LimitedTimeOfferSlice = createSlice({
  name: "LimitedOffer",
  initialState,

  reducers: {},

  extraReducers: {
    [HomeLimitedTimeOffer.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },

    [HomeLimitedTimeOffer.fulfilled]: (state, { payload }) => {
      state.loading = false;
      // state._id = payload;
      state.value = payload;
      // state.success = true;
    },

    [HomeLimitedTimeOffer.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default LimitedTimeOfferSlice.reducer;
