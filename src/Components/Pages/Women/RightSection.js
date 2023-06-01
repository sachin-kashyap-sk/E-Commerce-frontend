import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import classes from "../../../Styles/Pages/Men/MenTop.module.css";
import LeftSection from "./LeftSection";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { addToCart } from "../../ReduxSection/Cart/CartSlice";
import Women from "../../BackendApi/Women/Women";
import { PostCart } from "../../BackendApi/Cart/Cart";
const RightSection = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Women());
  }, [dispatch]);
  const { value } = useSelector((state) => state.Women);
  const valueIncreased = (item) => {
    dispatch(addToCart({ ...item, quantity: 1 }));
    dispatch(
      PostCart({
        products: [{ ...item }],
      })
    );
  };

  return (
    <Box>
      <Box className={classes.mainContainer}>
        <Box className={classes.menLeft}>
          <LeftSection />
        </Box>
        <Box className={classes.menRight}>
          <Box>{/* <p className={classes.menText}>Women</p> */}</Box>
          <Box className={classes.secMainContainer}>
            {value.map((item) => (
              <Box className={classes.card} key={item._id}>
                <Card>
                  <CardContent>
                    <img
                      width="218"
                      height="218"
                      src={item.image}
                      alt="shoes"
                    />
                    <p className={classes.title}>{item.title}</p>
                    <p className={classes.gender}>{item.gender}</p>
                    <Box className={classes.cartInner}>
                      <p className={classes.price}>$ {item.price}</p>
                      <Button onClick={() => valueIncreased(item)}>
                        Add To Cart
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RightSection;
