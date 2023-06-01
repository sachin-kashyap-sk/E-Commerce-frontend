import { createSlice } from "@reduxjs/toolkit";
import { AboutTeam } from "../../BackendApi/About/AboutTeam";

const initialState = {
  data: [
    {
      _id: "",
      name: "",
      profile: "",
      designation: "",
    },
  ],
  loading: false,
  error: null,
  success: false,
};

const AboutTeamSlice = createSlice({
  name: "AboutTeam",
  initialState,

  reducers: {},
  extraReducers: {
    [AboutTeam.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },

    [AboutTeam.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.data = payload;
    },

    [AboutTeam.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default AboutTeamSlice.reducer;
