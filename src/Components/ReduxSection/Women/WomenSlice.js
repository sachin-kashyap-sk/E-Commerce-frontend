import { createSlice } from "@reduxjs/toolkit";
import {
  Women,
  WomenProductById,
  WomenProductSearch,
  AddWomenProduct,
  UpdateWomenProduct,
} from "../../BackendApi/Women/Women";
import { RemoveWomenProduct } from "../../BackendApi/Women/Women";
const initialState = {
  searchWomenTitle: "",
  detail: null,
  showWomenProductModal: false,

  value: [
    {
      _id: "",
      image: "",
      title: "",
      gender: "",
      price: 0,
      description: "",

      desImage: "",
      brand: "",
      shortDes: "",
      offer: "",
      bankOffer: "",
      bankOfferText: "",
      noCostEMI: "",
      emiText: "",
      partnerOffers: "",
      partnerOfferText: "",

      pointFirst: "",
      pointSec: "",
      pointThree: "",
      pointFour: "",
      pointFive: "",
      pointSix: "",
      DateFirstAvailable: "",
      Manufacturer: "",
      ItemModelNumber: "",
      CountryOfOrigin: "",
      Department: "",
      ItemWeight: 0,
      GenericName: "",
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

    searchWomenByTitle: (state, action) => {
      state.searchWomenTitle = action.payload;
    },

    clearSearchWomenTitle: (state, action) => {
      state.searchWomenTitle = "";
    },
    removeWomenProduct: (state, action) => {
      state.value = state.value.filter((item) => item._id !== action.payload);
    },

    editWomenProduct: (state, action) => {
      const {
        _id,
        image,
        title,
        gender,
        price,
        description,
        brand,
        shortDes,
        pointFirst,
        pointSec,
        pointThree,
        pointFour,
        pointFive,
        pointSix,
        DateFirstAvailable,
        Manufacturer,
        ItemModelNumber,
        CountryOfOrigin,
        Department,
        ItemWeight,
        GenericName,
      } = action.payload;
      const existingProduct = state.value.findIndex((item) => item._id === _id);
      if (existingProduct !== -1) {
        state.value[existingProduct].image = image;
        state.value[existingProduct].title = title;
        state.value[existingProduct].gender = gender;
        state.value[existingProduct].price = price;
        state.value[existingProduct].description = description;
        state.value[existingProduct].brand = brand;
        state.value[existingProduct].shortDes = shortDes;
        state.value[existingProduct].pointFirst = pointFirst;
        state.value[existingProduct].pointSec = pointSec;
        state.value[existingProduct].pointThree = pointThree;
        state.value[existingProduct].pointFour = pointFour;
        state.value[existingProduct].pointFive = pointFive;
        state.value[existingProduct].pointSix = pointSix;
        state.value[existingProduct].DateFirstAvailable = DateFirstAvailable;
        state.value[existingProduct].Manufacturer = Manufacturer;
        state.value[existingProduct].ItemModelNumber = ItemModelNumber;
        state.value[existingProduct].CountryOfOrigin = CountryOfOrigin;
        state.value[existingProduct].Department = Department;
        state.value[existingProduct].ItemWeight = ItemWeight;
        state.value[existingProduct].GenericName = GenericName;
      }
    },

    showWomenProductModal: (state, action) => {
      state.showWomenProductModal = action.payload;
    },
  },

  extraReducers: {
    [Women.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },

    [WomenProductSearch.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },

    [WomenProductById.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },

    [RemoveWomenProduct.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },

    [AddWomenProduct.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },

    [UpdateWomenProduct.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },

    [Women.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state._id = payload;
      state.value = payload;
    },

    [WomenProductSearch.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.value = payload;
    },
    [WomenProductById.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.detail = payload;
    },

    [RemoveWomenProduct.fulfilled]: (state, { payload }) => {
      state.loading = false;
    },

    [AddWomenProduct.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.value.push(payload);
    },

    [UpdateWomenProduct.fulfilled]: (state, { payload }) => {
      state.loading = false;
    },

    [Women.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    [WomenProductSearch.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    [WomenProductById.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [RemoveWomenProduct.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [AddWomenProduct.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [UpdateWomenProduct.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const {
  rangeFilter,
  searchWomenByTitle,
  clearSearchWomenTitle,
  removeWomenProduct,
  editWomenProduct,
  showWomenProductModal,
} = WomenSlice.actions;

export const selectedWomenProductModal = (state) =>
  state.Women.showWomenProductModal;

export default WomenSlice.reducer;
