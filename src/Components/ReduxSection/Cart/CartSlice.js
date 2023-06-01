import { createSlice } from "@reduxjs/toolkit";
import {
  CartApi,
  CartDelete,
  PostCart,
  UpdateToCart,
} from "./../../BackendApi/Cart/Cart";

const initialState = {
  totalItem: 0,
  products: [],
  loading: false,
  success: false,
  error: null,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.products.push(action.payload);
      state.totalItem = state.totalItem + 1;
    },

    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (item) => item._id !== action.payload
      );
    },

    addQty: (state, action) => {
      const products = state.products.findIndex(
        (item) => item._id === action.payload._id
      );
      if (products !== -1) {
        state.products[products].products[0].quantity += 1;
        state.totalItem += 1;
      }
    },
    subQty: (state, action) => {
      const products = state.products.findIndex(
        (item) => item._id === action.payload._id
      );
      if (products !== -1) {
        state.products[products].products[0].quantity -= 1;
        state.totalItem -= 1;
      }
    },
  },

  extraReducers: {
    [PostCart.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },

    [CartApi.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },

    [UpdateToCart.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },

    [CartDelete.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },

    [PostCart.fulfilled]: (state, { payload }) => {
      state.loading = false;
    },

    [CartApi.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.products = payload;
    },

    [UpdateToCart.fulfilled]: (state, { payload }) => {
      state.loading = false;
    },

    [CartDelete.fulfilled]: (state, { payload }) => {
      state.loading = false;
    },

    [PostCart.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    [CartApi.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    [UpdateToCart.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    [CartDelete.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});
export const { addToCart, addQty, subQty, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;
