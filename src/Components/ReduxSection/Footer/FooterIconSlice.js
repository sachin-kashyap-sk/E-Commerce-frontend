import { createSlice } from "@reduxjs/toolkit";
import FooterIcon from "../../BackendApi/Footer/FooterIcon";

const initialState = {
  footerIcon: [
    {
      _id: "",
      image: "",
      title: "",
    },
  ],
  loading: false,
  success: false,
  error: null,
};

const FooterIconSlice = createSlice({
  name: "Footer",
  initialState,

  reducers: {},

  extraReducers: {
    [FooterIcon.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },

    [FooterIcon.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.footerIcon = payload;
    },

    [FooterIcon.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default FooterIconSlice.reducer;
