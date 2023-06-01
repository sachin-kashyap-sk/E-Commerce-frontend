import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button } from "@mui/material";
import classes from "../../../Styles/Pages/Home/LimitedOffer.module.css";
import { useDispatch, useSelector } from "react-redux";
import HomeLimitedTimeOffer from "../../BackendApi/Home/HomeLimitedTimeOffer";
const LimitedTimeOffer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(HomeLimitedTimeOffer());
  }, [dispatch]);

  const { value } = useSelector((state) => state.LimitedOffer);
  return (
    <Box>
      <Box className={classes.limitedContainer}>
        <Card className={classes.card}>
          <CardContent>
            <Box>
              {value.map((item) => (
                <Box className={classes.mainContainer} key={item._id}>
                  <Box className={classes.firstContainer}>
                    <p className={classes.offerText}>{item.headerTitle}</p>
                    <p className={classes.splEdition}>{item.title}</p>
                    <p className={classes.buyText}>{item.subTitle}</p>
                    <Box className={classes.btn}>
                      <Button variant="contained">Shop Now</Button>
                    </Box>
                  </Box>
                  <Box className={classes.secContainer}>
                    <img
                      loading="lazy"
                      width="100%"
                      height="auto"
                      src={item.image}
                      alt="limitedOffer"
                    />
                  </Box>
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default LimitedTimeOffer;
