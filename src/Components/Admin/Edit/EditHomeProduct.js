import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {
  editProduct,
  showHomeProductModal,
  selectedHomeProductModal,
} from "../../ReduxSection/Home/HomeMiddleSlice";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button } from "@mui/material";
import classes from "../../../Styles/Admin/Home/AddProduct.module.css";
import { UpdateProduct } from "../../BackendApi/Home/HomeProduct";

const EditHomeProduct = ({ productId, setProduct }) => {
  const dispatch = useDispatch();

  const product = useSelector((state) =>
    state.HomeMiddle.value.find((item) => item._id === productId)
  );

  const open = useSelector(selectedHomeProductModal);

  const handleClose = () => {
    dispatch(showHomeProductModal(false));
    setProduct(() => "");
  };

  const [input, setInput] = useState({
    id: product?.id || "",
    image: product?.image || "",
    title: product?.title || "",
    gender: product?.gender || "",
    price: product?.price || 0,
    description: product?.description || "",
    desImage: product?.desImage || "",
    brand: product?.brand || "",
    shortDes: product?.shortDes || "",
    pointFirst: product?.pointFirst || "",
    pointSec: product?.pointSec || "",
    pointThree: product?.pointThree || "",
    pointFour: product?.pointFour || "",
    pointFive: product?.pointFive || "",
    pointSix: product?.pointSix || "",
    DateFirstAvailable: product?.DateFirstAvailable || "",
    Manufacturer: product?.Manufacturer || "",
    ItemModelNumber: product?.ItemModelNumber || "",
    CountryOfOrigin: product?.CountryOfOrigin || "",
    Department: product?.Department || "",
    ItemWeight: product?.ItemWeight || 0,
    GenericName: product?.GenericName || "",
    bankOfferText: product?.bankOfferText || "",
    emiText: product?.emiText || "",
    partnerOfferText: product?.partnerOfferText || "",
  });

  const AddHandler = (productValue) => {
    dispatch(
      UpdateProduct({
        _id: productValue._id,
        title: productValue.title,
        gender: productValue.gender,
        price: productValue.price,
        description: productValue.description,
        brand: productValue.brand,
        shortDes: productValue.shortDes,
        pointFirst: productValue.pointFirst,
        pointSec: productValue.pointSec,
        pointThree: productValue.pointThree,
        pointFour: productValue.pointFour,
        pointFive: productValue.pointFive,
        pointSix: productValue.pointSix,
        DateFirstAvailable: productValue.DateFirstAvailable,
        Manufacturer: productValue.Manufacturer,
        ItemModelNumber: productValue.ItemModelNumber,
        CountryOfOrigin: productValue.CountryOfOrigin,
        Department: productValue.Department,
        ItemWeight: productValue.ItemWeight,
        GenericName: productValue.GenericName,
        ...input,
        image: productValue.image,
      })
    );
    dispatch(
      editProduct({
        _id: productValue._id,
        title: productValue.title,
        gender: productValue.gender,
        price: productValue.price,
        description: productValue.description,
        brand: productValue.brand,
        shortDes: productValue.shortDes,
        pointFirst: productValue.pointFirst,
        pointSec: productValue.pointSec,
        pointThree: productValue.pointThree,
        pointFour: productValue.pointFour,
        pointFive: productValue.pointFive,
        pointSix: productValue.pointSix,
        DateFirstAvailable: productValue.DateFirstAvailable,
        Manufacturer: productValue.Manufacturer,
        ItemModelNumber: productValue.ItemModelNumber,
        CountryOfOrigin: productValue.CountryOfOrigin,
        Department: productValue.Department,
        ItemWeight: productValue.ItemWeight,
        GenericName: productValue.GenericName,
        ...input,
        image: productValue.image,
      })
    );

    setInput({
      image: "",
      title: "",
      gender: "",
      price: 0,
      description: "",
      desImage: "",
      brand: "",
      shortDes: "",
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
      bankOfferText: "",
      emiText: "",
      partnerOfferText: "",
    });
    handleClose();
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box className={classes.style}>
          <form
            encType="multipart/form-data"
            onSubmit={(e) => {
              e.preventDefault();
              AddHandler(product);
            }}
          >
            <Box>
              <TextField
                onChange={(e) => {
                  setInput({ ...input, image: e.target.files[0] });
                }}
                sx={{ width: "100%" }}
                variant="outlined"
                type="file"
                accept="image/png,image/jpg"
                name="file"
                required
              />

              <Box sx={{ paddingTop: "2%" }}>
                <TextField
                  sx={{ width: "100%" }}
                  label="Edit Product Title"
                  variant="outlined"
                  value={input.title}
                  onChange={(e) => {
                    setInput({ ...input, title: e.target.value });
                  }}
                />
              </Box>
              <Box sx={{ paddingTop: "2%" }}>
                <TextField
                  sx={{ width: "100%" }}
                  label="Gender"
                  variant="outlined"
                  value={input.gender}
                  onChange={(e) => {
                    setInput({ ...input, gender: e.target.value });
                  }}
                />
              </Box>
              <Box sx={{ paddingTop: "2%" }}>
                <TextField
                  sx={{ width: "100%" }}
                  label="Price"
                  variant="outlined"
                  type="number"
                  value={input.price}
                  onChange={(e) => {
                    setInput({ ...input, price: e.target.value });
                  }}
                />
              </Box>
              <Box sx={{ paddingTop: "2%" }}>
                <TextField
                  sx={{ width: "100%" }}
                  label="Description"
                  variant="outlined"
                  value={input.description}
                  onChange={(e) => {
                    setInput({ ...input, description: e.target.value });
                  }}
                />
              </Box>
              <Box sx={{ paddingTop: "2%" }}>
                <TextField
                  sx={{ width: "100%" }}
                  label="Brand"
                  variant="outlined"
                  value={input.brand}
                  onChange={(e) => {
                    setInput({ ...input, brand: e.target.value });
                  }}
                />
              </Box>
              <Box sx={{ paddingTop: "2%" }}>
                <TextField
                  sx={{ width: "100%" }}
                  label="Short Description"
                  variant="outlined"
                  value={input.shortDes}
                  onChange={(e) => {
                    setInput({ ...input, shortDes: e.target.value });
                  }}
                />
              </Box>
              <Box sx={{ paddingTop: "2%" }}>
                <p>Product Main Points</p>
              </Box>
              <Box sx={{ paddingTop: "2%" }}>
                <TextField
                  sx={{ width: "100%" }}
                  label="Point One"
                  variant="outlined"
                  value={input.pointFirst}
                  onChange={(e) => {
                    setInput({ ...input, pointFirst: e.target.value });
                  }}
                />
              </Box>

              <Box sx={{ paddingTop: "2%" }}>
                <TextField
                  sx={{ width: "100%" }}
                  label="Point Two"
                  variant="outlined"
                  value={input.pointSec}
                  onChange={(e) => {
                    setInput({ ...input, pointSec: e.target.value });
                  }}
                />
              </Box>
              <Box sx={{ paddingTop: "2%" }}>
                <TextField
                  sx={{ width: "100%" }}
                  label="Point Three"
                  variant="outlined"
                  value={input.pointThree}
                  onChange={(e) => {
                    setInput({ ...input, pointThree: e.target.value });
                  }}
                />
              </Box>

              <Box sx={{ paddingTop: "2%" }}>
                <TextField
                  sx={{ width: "100%" }}
                  label="Point Four"
                  variant="outlined"
                  value={input.pointFour}
                  onChange={(e) => {
                    setInput({ ...input, pointFour: e.target.value });
                  }}
                />
              </Box>

              <Box sx={{ paddingTop: "2%" }}>
                <TextField
                  sx={{ width: "100%" }}
                  label="Point Five"
                  variant="outlined"
                  value={input.pointFive}
                  onChange={(e) => {
                    setInput({ ...input, pointFive: e.target.value });
                  }}
                />
              </Box>

              <Box sx={{ paddingTop: "2%" }}>
                <TextField
                  sx={{ width: "100%" }}
                  label="Point Six"
                  variant="outlined"
                  value={input.pointSix}
                  onChange={(e) => {
                    setInput({ ...input, pointSix: e.target.value });
                  }}
                />
              </Box>
              <Box sx={{ paddingTop: "2%" }}>
                <p>Product Detail</p>
              </Box>

              <Box sx={{ paddingTop: "2%" }}>
                <TextField
                  type="date"
                  sx={{ width: "100%" }}
                  variant="outlined"
                  value={input.DateFirstAvailable}
                  onChange={(e) => {
                    setInput({ ...input, DateFirstAvailable: e.target.value });
                  }}
                />
              </Box>

              <Box sx={{ paddingTop: "2%" }}>
                <TextField
                  sx={{ width: "100%" }}
                  label="Manufacturer"
                  variant="outlined"
                  value={input.Manufacturer}
                  onChange={(e) => {
                    setInput({ ...input, Manufacturer: e.target.value });
                  }}
                />
              </Box>

              <Box sx={{ paddingTop: "2%" }}>
                <TextField
                  sx={{ width: "100%" }}
                  label="Item Model Number"
                  variant="outlined"
                  value={input.ItemModelNumber}
                  onChange={(e) => {
                    setInput({ ...input, ItemModelNumber: e.target.value });
                  }}
                />
              </Box>

              <Box sx={{ paddingTop: "2%" }}>
                <TextField
                  sx={{ width: "100%" }}
                  label="CountryOfOrigin"
                  variant="outlined"
                  value={input.CountryOfOrigin}
                  onChange={(e) => {
                    setInput({ ...input, CountryOfOrigin: e.target.value });
                  }}
                />
              </Box>

              <Box sx={{ paddingTop: "2%" }}>
                <TextField
                  sx={{ width: "100%" }}
                  label="Department"
                  variant="outlined"
                  value={input.Department}
                  onChange={(e) => {
                    setInput({ ...input, Department: e.target.value });
                  }}
                />
              </Box>

              <Box sx={{ paddingTop: "2%" }}>
                <TextField
                  type="number"
                  sx={{ width: "100%" }}
                  label="ItemWeight"
                  variant="outlined"
                  value={input.ItemWeight}
                  onChange={(e) => {
                    setInput({ ...input, ItemWeight: e.target.value });
                  }}
                />
              </Box>

              <Box sx={{ paddingTop: "2%" }}>
                <TextField
                  sx={{ width: "100%" }}
                  label="Generic Name"
                  variant="outlined"
                  value={input.GenericName}
                  onChange={(e) => {
                    setInput({ ...input, GenericName: e.target.value });
                  }}
                />
              </Box>
            </Box>

            <Box
              sx={{
                paddingTop: "2%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Button type="submit" variant="contained">
                ADD
              </Button>

              <Button variant="outlined" onClick={handleClose}>
                Close
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default EditHomeProduct;
