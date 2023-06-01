import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import HomeBrand from "../../BackendApi/Home/HomeBrand";
import classes from "../../../Styles/Pages/Home/Brand.module.css";

const Brand = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(HomeBrand());
  }, [dispatch]);

  const { value, loading } = useSelector((state) => state.Brand);

  if (loading) return <p>Loading...</p>;

  return (
    <Box className={classes.mainContainer}>
      {value.map((step) => (
        <Box key={step._id}>
          <img width="100%" height="auto" src={step.image} alt="img-logo" />
        </Box>
      ))}
    </Box>
  );
};

export default Brand;
