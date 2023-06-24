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
import { showModal } from "../../ReduxSection/Home/HomeMiddleSlice";
import { showMenProductModal } from "../../ReduxSection/Mens/MensSlice";
import AddMenProducts from "../../Admin/AddProduct/AddMenProduct";
import { RemoveMenProduct } from "../../BackendApi/Men/MenProduct";
import { removeMenProduct } from "../../ReduxSection/Mens/MensSlice";
import newBin from "../../../Assets/newBin.png";
import EditMenProduct from "../../Admin/Edit/EditMenProduct";
const MenTop = () => {
  const { userInfo } = useSelector((state) => state.Auth);
  const [activeProduct, setActiveProduct] = useState("");

  const navigation = useNavigate();
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.Men);

  const valueIncreased = (item) => {
    dispatch(addToCart({ ...item, quantity: 1 }));
    dispatch(
      PostCart({
        products: [{ ...item }],
      })
    );
  };

  const RemoveHandler = (_id) => {
    dispatch(removeMenProduct(_id));
    dispatch(RemoveMenProduct(_id));
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
            <AddMenProducts />
          </Box>
        ) : null}

        <Box className={classes.mainContainer}>
          <Box className={classes.menLeft}>
            <LeftSection />
          </Box>
          <Box className={classes.menRight}>
            <Box>{/* <p className={classes.menText}>Mens</p> */}</Box>
            <Box className={classes.secMainContainer}>
              {!!value &&
                value.map((item) => (
                  <Box className={classes.card} key={item._id}>
                    <Card>
                      <CardContent>
                        <img
                          onClick={() => {
                            navigation(`/descriptionMen/${item._id}`);
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
                                dispatch(showMenProductModal(true));
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
        <EditMenProduct
          productId={activeProduct}
          setProduct={setActiveProduct}
        />
      )}
    </>
  );
};
export default MenTop;
