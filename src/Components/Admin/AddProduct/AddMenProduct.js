import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {
  selectedModal,
  showModal,
} from "../../ReduxSection/Home/HomeMiddleSlice";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button } from "@mui/material";
// import { addProduct } from "../../ReduxSection/Home/HomeMiddleSlice";
// import { AddProduct } from "../../BackendApi/Home/HomeProduct";
import { AddMenProduct } from "../../BackendApi/Men/MenProduct";
import classes from "../../../Styles/Admin/Home/AddProduct.module.css";
import axios from "axios";

const AddMenProducts = () => {
  const dispatch = useDispatch();
  const open = useSelector(selectedModal);
  const handleClose = () => {
    dispatch(showModal(false));
  };

  const [input, setInput] = useState({
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", input.image);
    data.append("title", input.title);
    try {
      const { data: res } = await axios.post(
        `http://localhost:5000/api/files`,
        data
      );

      if (res.statusCode === 201) {
        // alert("File uploaded successfully!");

        setInput((prev) => ({ ...prev, image: res.data }));
        dispatch(AddMenProduct({ ...input, image: res.data }));
      }
    } catch (err) {
      console.log(err);
      // alert("Something went wrong while uploading image");
    }
  };

  const AddHandler = () => {
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
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box className={classes.style}>
          <form
            encType="multipart/form-data"
            onSubmit={AddHandler && handleSubmit}
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
                  // id="outlined-basic"
                  label="Product Title"
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
                  // id="outlined-basic"
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
                  // id="outlined-basic"
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
                  // id="outlined-basic"
                  label="Description"
                  variant="outlined"
                  value={input.description}
                  onChange={(e) => {
                    setInput({ ...input, description: e.target.value });
                  }}
                />
              </Box>
              <Box sx={{ paddingTop: "2%" }}>
                {/* <TextField
                  // onChange={(e) => {
                  //   setInput({ ...input, desImage: e.target.files[0] });
                  // }}
                  // sx={{ width: "100%" }}
                  // variant="outlined"
                  // type="file"
                  // accept="image/png,image/jpg"
                  // name="file"
                  // required

                  // sx={{ width: "100%" }}
                  // label="Description - Image"
                  // variant="outlined"
                  // value={input.desImage}
                  // onChange={(e) => {
                  //   setInput({ ...input, desImage: e.target.value });
                  // }}
                /> */}
              </Box>
              <Box sx={{ paddingTop: "2%" }}>
                <TextField
                  sx={{ width: "100%" }}
                  // id="outlined-basic"
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
                  // id="outlined-basic"
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
                  // id="outlined-basic"
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
                  // id="outlined-basic"
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
                  // id="outlined-basic"
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
                  // id="outlined-basic"
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
                  // id="outlined-basic"
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
                  // id="outlined-basic"
                  label="Point Six"
                  variant="outlined"
                  value={input.pointSix}
                  onChange={(e) => {
                    setInput({ ...input, pointSix: e.target.value });
                  }}
                />
              </Box>
              {/* <ProductPoints /> */}
              <Box sx={{ paddingTop: "2%" }}>
                <p>Product Detail</p>
              </Box>

              <Box sx={{ paddingTop: "2%" }}>
                <TextField
                  type="date"
                  sx={{ width: "100%" }}
                  // id="outlined-basic"
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
                  // id="outlined-basic"
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
                  // id="outlined-basic"
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
                  // id="outlined-basic"
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
                  // id="outlined-basic"
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
                  // id="outlined-basic"
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
                  // id="outlined-basic"
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

export default AddMenProducts;
