import React from "react";
import FooterTop from "../../Footer/FooterTop";
import Quality from "../../Home/Quality";
import classes from "../../../../Styles/Pages/Description/DescriptionTop.module.css";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
const MenThirdDes = () => {
  const { detail } = useSelector((state) => state.Men);
  return !!detail ? (
    <Box>
      <Box>
        <p className={classes.firstText}>Product Detail</p>
      </Box>
      <Box>
        <Box>
          <p className={classes.unorderedList}>
            DateFirstAvailable: {detail.DateFirstAvailable}
          </p>
          <p className={classes.unorderedList}>
            Manufacturer : {detail.Manufacturer}
          </p>
          <p className={classes.unorderedList}>
            ItemModelNumber : {detail.ItemModelNumber}
          </p>
          <p className={classes.unorderedList}>
            CountryOfOrigin : {detail.CountryOfOrigin}
          </p>
          <p className={classes.unorderedList}>
            Department : {detail.Department}
          </p>
          <p className={classes.unorderedList}>
            ItemWeight : {detail.ItemWeight}
          </p>

          <p className={classes.unorderedList}>
            GenericName : {detail.GenericName}
          </p>
        </Box>
      </Box>

      <Box className={classes.shortDesContainer}>
        <p className={classes.firstText}>Product Description</p>
        <p className={classes.shortDes}>{detail.shortDes}</p>
      </Box>
      <Quality />
      <FooterTop />
    </Box>
  ) : null;
};

export default MenThirdDes;
