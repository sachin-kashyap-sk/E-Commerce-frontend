import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import classes from "../../../Styles/Pages/Home/Quality.module.css";
import { useDispatch, useSelector } from "react-redux";
import FooterIcon from "../../BackendApi/Footer/FooterIcon";

const Quality = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FooterIcon());
  }, [dispatch]);
  const { footerIcon } = useSelector((state) => state.Footer);
  return (
    <Box className={classes.mainContainer}>
      {footerIcon?.[0]?.footerIcon?.map((item) => (
        <Box key={item._id} className={classes.container}>
          <Box className={classes.innerContainer}>
            <img className={classes.quality} src={item.image} alt="quality" />
            <p className={classes.title}>{item.title}</p>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Quality;
