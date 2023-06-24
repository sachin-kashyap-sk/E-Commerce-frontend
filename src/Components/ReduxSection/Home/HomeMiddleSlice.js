import { createSlice } from "@reduxjs/toolkit";
import {
  HomeProduct,
  HomeProductById,
  ProductSearch,
  AddProduct,
  UpdateProduct,
  RemoveHomeProduct,
  // AddImage,
} from "../../BackendApi/Home/HomeProduct";
const initialState = {
  searchTitle: "",
  detail: null,
  showHomeProductModal: false,
  showModal: false,
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
  loading: false,
  error: null,
  success: false,
};

const HomeMiddleSlice = createSlice({
  name: "HomeMiddle",
  initialState,

  reducers: {
    filterByTitle: (state, action) => {
      state.value = state.value.filter((item) => item.title === action.payload);
    },

    searchByTitle: (state, action) => {
      state.searchTitle = action.payload;
    },
    clearSearchTitle: (state, action) => {
      state.searchTitle = "";
    },

    showModal: (state, action) => {
      state.showModal = action.payload;
    },
    showHomeProductModal: (state, action) => {
      state.showHomeProductModal = action.payload;
    },

    addProduct: (state, action) => {
      state.value.push({ ...action.payload });
    },

    removeProduct: (state, action) => {
      state.value = state.value.filter((item) => item._id !== action.payload);
    },

    editProduct: (state, action) => {
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
  },

  extraReducers: {
    [HomeProduct.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },

    [ProductSearch.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },

    [HomeProductById.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [AddProduct.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },

    [UpdateProduct.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },

    [RemoveHomeProduct.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },

    [HomeProduct.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.value = payload;
    },

    [HomeProductById.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.detail = payload;
    },

    [ProductSearch.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.value = payload;
    },

    [AddProduct.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.value.push(payload);
    },

    [UpdateProduct.fulfilled]: (state, { payload }) => {
      state.loading = false;
    },

    [RemoveHomeProduct.fulfilled]: (state, { payload }) => {
      state.loading = false;
    },

    [HomeProduct.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    [HomeProductById.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [ProductSearch.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    [AddProduct.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    [UpdateProduct.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    [RemoveHomeProduct.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const {
  filterByTitle,
  searchByTitle,
  clearSearchTitle,
  showModal,
  addProduct,
  editProduct,
  selectedId,
  showHomeProductModal,
  removeProduct,
} = HomeMiddleSlice.actions;
export const selectedModal = (state) => state.HomeMiddle.showModal;
export const selectedHomeProductModal = (state) =>
  state.HomeMiddle.showHomeProductModal;
export default HomeMiddleSlice.reducer;
