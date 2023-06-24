import { createSlice } from "@reduxjs/toolkit";
import {
  AddMenProduct,
  MenProduct,
  MenProductById,
  MenProductSearch,
  RemoveMenProduct,
  UpdateMenProduct,
} from "../../BackendApi/Men/MenProduct";
const initialState = {
  searchMenTitle: "",
  showMenProductModal: false,
  detail: null,
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
      console.log({ existingProduct });
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

    searchMenByTitle: (state, action) => {
      state.searchMenTitle = action.payload;
    },
    clearSearchMenTitle: (state, action) => {
      state.searchMenTitle = "";
    },

    removeMenProduct: (state, action) => {
      state.value = state.value.filter((item) => item._id !== action.payload);
    },

    showMenProductModal: (state, action) => {
      state.showMenProductModal = action.payload;
    },
  },

  extraReducers: {
    [MenProduct.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [MenProductSearch.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },

    [MenProductById.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },

    [AddMenProduct.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [RemoveMenProduct.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },

    [UpdateMenProduct.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },

    [MenProduct.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state._id = payload;
      state.value = payload;
    },

    [MenProductSearch.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.value = payload;
    },

    [MenProductById.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.detail = payload;
    },

    [AddMenProduct.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.value.push(payload);
    },

    [RemoveMenProduct.fulfilled]: (state, { payload }) => {
      state.loading = false;
    },

    [UpdateMenProduct.fulfilled]: (state, { payload }) => {
      state.loading = false;
    },

    [MenProduct.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    [MenProductSearch.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    [MenProductById.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    [AddMenProduct.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [RemoveMenProduct.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    [UpdateMenProduct.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const {
  rangeFilter,
  searchMenByTitle,
  clearSearchTitle,
  removeMenProduct,
  showMenProductModal,
  editProduct,
} = MensSlice.actions;

export const selectedMenProductModal = (state) => state.Men.showMenProductModal;
export default MensSlice.reducer;
