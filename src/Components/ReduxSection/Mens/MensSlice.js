import { createSlice } from "@reduxjs/toolkit";
import MenProduct from "../../BackendApi/Men/MenProduct";

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
};

const MensSlice = createSlice({
  name: "Men",
  initialState,
  reducers: {
    rangeFilter: (state, action) => {
      state.value = state.value.filter(
        (item) =>
          item.price >= action.payload[0] && item.price <= action.payload[1]
      );
    },
  },

  extraReducers: {
    [MenProduct.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [MenProduct.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state._id = payload;
      state.value = payload;
    },

    [MenProduct.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { rangeFilter } = MensSlice.actions;
export default MensSlice.reducer;
