import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import classes from "../../../../Styles/Pages/Description/DescriptionTop.module.css";
const WomenSecDes = () => {
  const { detail } = useSelector((state) => state.Women);
  return !!detail ? (
    <Box>
      <Box>
        <Box>
          <ul className={classes.unorderedList}>
            <li>{detail.pointFirst}</li>
            <li>{detail.pointSec}</li>
            <li>{detail.pointThree}</li>
            <li>{detail.pointFour}</li>
            <li>{detail.pointFive}</li>
          </ul>
        </Box>
      </Box>
    </Box>
  ) : null;
};

export default WomenSecDes;
