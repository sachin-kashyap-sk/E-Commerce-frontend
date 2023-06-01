import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import classes from "../../../Styles/Pages/Men/BestSeller.module.css";
import { useDispatch, useSelector } from "react-redux";
import BestSellerProduct from "../../BackendApi/BestSeller/BestSeller";
const BestSeller = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(BestSellerProduct());
  }, [dispatch]);
  const { value, loading } = useSelector((state) => state.BestSeller);

  if (loading) {
    return <p>loading....</p>;
  }
  return (
    <Box>
      <Box className={classes.seller}>
        <p className={classes.sellerText}>Our Best Seller</p>
        <Box>
          {value.map((item) => (
            <Box key={item._id}>
              <Box className={classes.firstContainer}>
                <img
                  width="100px"
                  height="100px"
                  src={item.image}
                  alt="products"
                />
                <Box>
                  <p className={classes.brand}>Brand : {item.title}</p>
                  <p className={classes.price}>Price: {item.price} $</p>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default BestSeller;
