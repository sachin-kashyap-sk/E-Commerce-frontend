import { createSlice } from "@reduxjs/toolkit";
import FooterText from "../../BackendApi/Footer/FooterText";
const initialState = {
  value: [
    {
      _id: "",
      label: "",
      bestLook: "",
      forHer: "",
      optionFirst: "",
      optionSec: "",
      optionThird: "",
      optionForth: "",
      forHim: "",
      himOptionFirst: "",
      himOptionSec: "",
      himOptionThird: "",
      himOptionForth: "",
      himOptionFifth: "",
      copyRight: "",
    },
  ],
  loading: false,
  error: null,
  success: false,
};

const FooterTextSlice = createSlice({
  name: "FooterText",
  initialState,

  reducers: {},

  extraReducers: {
    [FooterText.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },

    [FooterText.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.value = payload;
    },

    [FooterText.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default FooterTextSlice.reducer;
