import React from "react";
import Box from "@mui/material/Box";
import classes from "../../../Styles/Pages/Men/LeftSection.module.css";
import { Button } from "@mui/material";
import Slider from "@mui/material/Slider";
import BestSeller from "../Mens/BestSeller";
import { useDispatch } from "react-redux";
import { rangeFilter } from "../../ReduxSection/Women/WomenSlice";
const LeftSection = () => {
  const [value, setValue] = React.useState([0, 1000]);
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClick = () => {
    dispatch(rangeFilter(value));
  };

  return (
    <Box>
      <p className={classes.filterText}>Filter By Price</p>
      <Box className={classes.mainContainer}>
        <Box className={classes.rangeContainer}>
          <Slider min={0} max={1000} value={value} onChange={handleChange} />
          <Box className={classes.filterContainer}>
            <Box>
              <Button onClick={handleClick} size="small" variant="contained">
                Filter
              </Button>
            </Box>
            <Box>
              Price $ {value[0]} - {value[1]}
            </Box>
          </Box>
        </Box>
      </Box>
      <BestSeller />
    </Box>
  );
};

export default LeftSection;
