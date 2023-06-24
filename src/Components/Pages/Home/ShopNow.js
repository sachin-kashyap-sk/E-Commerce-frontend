import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import classes from "../../../Styles/Pages/Home/Brand.module.css";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import HomeShopNow from "../../BackendApi/Home/HomeShopNow";
const ShopNow = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(HomeShopNow());
  }, [dispatch]);
  const { value, loading } = useSelector((state) => state.HomeShopNow);
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <Box className={classes.shopMain}>
      {!!value &&
        value.map((item) => (
          <Box className={classes.cardMain} key={item._id}>
            <Card className={classes.cardContainer} sx={{ maxWidth: 350 }}>
              <CardContent>
                <img
                  className={classes.card}
                  width="100%"
                  height="auto"
                  src={item.image}
                  alt="women"
                />
                <p className={classes.text}>{item.title}</p>
              </CardContent>
              <CardActions>
                <Button variant="contained">Shop Now</Button>
              </CardActions>
            </Card>
          </Box>
        ))}
    </Box>
  );
};
export default ShopNow;
