import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import classes from "../../../Styles/Pages/Men/MenTop.module.css";
import LeftSection from "./LeftSection";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { addToCart } from "../../ReduxSection/Cart/CartSlice";
import { PostCart } from "../../BackendApi/Cart/Cart";
import { useNavigate } from "react-router-dom";
import AddWomenProducts from "../../Admin/AddProduct/AddWomenProducts";
import { showModal } from "../../ReduxSection/Home/HomeMiddleSlice";
import newBin from "../../../Assets/newBin.png";
import { RemoveWomenProduct } from "./../../BackendApi/Women/Women";
import EditWomenProduct from "./../../Admin/Edit/EditWomenProduct";
import {
  removeWomenProduct,
  showWomenProductModal,
} from "../../ReduxSection/Women/WomenSlice";
const RightSection = () => {
  const { userInfo } = useSelector((state) => state.Auth);
  const [activeProduct, setActiveProduct] = useState("");

  const dispatch = useDispatch();
  const navigation = useNavigate();

  const { value } = useSelector((state) => state.Women);
  const valueIncreased = (item) => {
    dispatch(addToCart({ ...item, quantity: 1 }));
    dispatch(
      PostCart({
        products: [{ ...item }],
      })
    );
  };

  const RemoveHandler = (_id) => {
    dispatch(removeWomenProduct(_id));
    dispatch(RemoveWomenProduct(_id));
  };

  return (
    <>
      <Box>
        {userInfo === "true" ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              paddingTop: "4%",
            }}
          >
            <Button
              variant="outlined"
              onClick={() => {
                dispatch(showModal(true));
              }}
            >
              ADD
            </Button>
            <AddWomenProducts />
          </Box>
        ) : null}
        <Box className={classes.mainContainer}>
          <Box className={classes.menLeft}>
            <LeftSection />
          </Box>
          <Box className={classes.menRight}>
            <Box>{/* <p className={classes.menText}>Women</p> */}</Box>
            <Box className={classes.secMainContainer}>
              {!!value &&
                value.map((item) => (
                  <Box className={classes.card} key={item._id}>
                    <Card>
                      <CardContent>
                        <img
                          onClick={() => {
                            navigation(`/descriptionWomen/${item._id}`);
                          }}
                          width="218"
                          height="218"
                          src={item.image}
                          alt="shoes"
                        />
                        <p className={classes.title}>{item.title}</p>
                        <p className={classes.gender}>{item.gender}</p>
                        <Box className={classes.cartInner}>
                          <p className={classes.price}>$ {item.price}</p>

                          {userInfo === "true" ? (
                            <Button
                              onClick={() => {
                                dispatch(showWomenProductModal(true));
                                setActiveProduct(() => item._id);
                              }}
                            >
                              Edit
                            </Button>
                          ) : null}

                          <Button onClick={() => valueIncreased(item)}>
                            Add To Cart
                          </Button>

                          {userInfo === "true" ? (
                            <Box>
                              <img
                                onClick={() => {
                                  RemoveHandler(item._id);
                                }}
                                width="24px"
                                height="24px"
                                src={newBin}
                                alt="newBin"
                              />
                            </Box>
                          ) : null}
                        </Box>
                      </CardContent>
                    </Card>
                  </Box>
                ))}
            </Box>
          </Box>
        </Box>
      </Box>

      {activeProduct && (
        <EditWomenProduct
          productId={activeProduct}
          setProduct={setActiveProduct}
        />
      )}
    </>
  );
};

export default RightSection;
