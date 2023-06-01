import { createSlice } from "@reduxjs/toolkit";
import { AboutFewWord } from "./../../BackendApi/About/AboutFewWord";

const initialState = {
  fewWords: "",
  ourTeam: "",
  mainTitle: "",
  loading: false,
  error: null,
  success: false,
};

const AboutFewWorldSlice = createSlice({
  name: "AboutFew",
  initialState,

  reducers: {},
  extraReducers: {
    [AboutFewWord.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },

    [AboutFewWord.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state._id = payload;
      state.fewWords = payload;
      state.ourTeam = payload;
      state.mainTitle = payload;
    },

    [AboutFewWord.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default AboutFewWorldSlice.reducer;
