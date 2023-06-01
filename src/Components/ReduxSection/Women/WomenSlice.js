import { createSlice } from "@reduxjs/toolkit";
import Women from "../../BackendApi/Women/Women";

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

const WomenSlice = createSlice({
  name: "Women",
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
    [Women.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [Women.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state._id = payload;
      state.value = payload;
    },

    [Women.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { rangeFilter } = WomenSlice.actions;
export default WomenSlice.reducer;
