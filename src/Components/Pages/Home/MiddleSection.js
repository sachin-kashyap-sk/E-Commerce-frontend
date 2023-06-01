import React, { useEffect } from "react";
import classes from "../../../Styles/Pages/Home/HomeMiddle.module.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { addToCart } from "../../ReduxSection/Cart/CartSlice";
import HomeProduct from "../../BackendApi/Home/HomeProduct";
import { PostCart } from "../../BackendApi/Cart/Cart";

const MiddleSection = () => {
  const dispatch = useDispatch();
  const { value, loading } = useSelector((state) => state.HomeMiddle);
  useEffect(() => {
    dispatch(HomeProduct());
  }, [dispatch]);

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

  return (
    <Box className={classes.mainContainer}>
      {value.map((item) => (
        <Box className={classes.card} key={item._id}>
          <Card>
            <CardContent>
              <img width="218" height="218" src={item.image} alt="shoes" />
              <p className={classes.title}>{item.title}</p>
              <p className={classes.gender}>{item.gender}</p>
              <Box className={classes.cartInner}>
                <p className={classes.price}>$ {item.price}</p>
                <Button  onClick={() => ValueIncreased(item)}>
                  Add To Cart
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Box>
  );
};

export default MiddleSection;
