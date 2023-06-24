import React, { useState } from "react";
import classes from "../../../Styles/Pages/Home/HomeMiddle.module.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { addToCart } from "../../ReduxSection/Cart/CartSlice";
import { PostCart } from "../../BackendApi/Cart/Cart";
import { useNavigate } from "react-router-dom";
import AddHomeProduct from "../../Admin/AddProduct/AddHomeProduct";
import {
  showModal,
  showHomeProductModal,
  removeProduct,
} from "../../ReduxSection/Home/HomeMiddleSlice";
import { RemoveHomeProduct } from "../../BackendApi/Home/HomeProduct";
import EditHomeProduct from "../../Admin/Edit/EditHomeProduct";
import newBin from "../../../Assets/newBin.png";
const MiddleSection = () => {
  const { userInfo } = useSelector((state) => state.Auth);
  const [activeProduct, setActiveProduct] = useState("");
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const { value, loading } = useSelector((state) => state.HomeMiddle);
  const ValueIncreased = (item) => {
    dispatch(addToCart({ ...item, quantity: 1 }));
    dispatch(
      PostCart({
        products: [{ ...item }],
      })
    );
  };

  if (loading)
    return (
      <Box className={classes.loadingContainer}>
        <p>Loading...</p>
      </Box>
    );

  const RemoveHandler = (_id) => {
    dispatch(removeProduct(_id));
    dispatch(RemoveHomeProduct(_id));
  };

  return (
    <>
      <Box>
        {userInfo === "true" ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
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
            <AddHomeProduct />
          </Box>
        ) : null}

        <Box className={classes.mainContainer}>
          {!!value &&
            value.map((item) => (
              <Box className={classes.card} key={item._id}>
                <Card>
                  <CardContent>
                    <img
                      onClick={() => {
                        navigation(`/description/${item._id}`);
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
                            dispatch(showHomeProductModal(true));
                            setActiveProduct(() => item._id);
                          }}
                        >
                          Edit
                        </Button>
                      ) : null}

                      <Button onClick={() => ValueIncreased(item)}>
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
      {activeProduct && (
        <EditHomeProduct
          productId={activeProduct}
          setProduct={setActiveProduct}
        />
      )}
    </>
  );
};

export default MiddleSection;
