import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import classes from "../../../Styles/Pages/Footer/Footer.module.css";
import { useDispatch, useSelector } from "react-redux";
import FooterText from "../../BackendApi/Footer/FooterText";
const FooterTop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FooterText());
  }, [dispatch]);
  const { value, loading } = useSelector((state) => state.FooterText);

  if (loading) return <p>loading....</p>;

  return (
    <Box>
      {value.map((item) => (
        <Box key={item._id}>
          <Box className={classes.mainContainer}>
            <p>{item.label}</p>
          </Box>

          <Box className={classes.footerFirst}>
            <Box className={classes.footerSec}>
              <p className={classes.firstHeader}>{item.bestLook}</p>
              <Box className={classes.forHer}>
                <p className={classes.firstHeader}>{item.forHer}</p>
                <p className={classes.titles}>{item.optionFirst}</p>
                <p className={classes.titles}>{item.optionSec}</p>
                <p className={classes.titles}>{item.optionThird}</p>
                <p className={classes.titles}>{item.optionForth}</p>
              </Box>

              <Box className={classes.forHer}>
                <p className={classes.firstHeader}>{item.forHim}</p>
                <p className={classes.titles}>{item.himOptionFirst}</p>
                <p className={classes.titles}>{item.himOptionSec}</p>
                <p className={classes.titles}>{item.himOptionThird}</p>
                <p className={classes.titles}>{item.himOptionForth}</p>
                <p className={classes.titles}>{item.himOptionFifth}</p>
              </Box>
            </Box>
          </Box>

          <Box>
            <Box className={classes.copyRight}>
              <p>{item.copyRight}</p>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default FooterTop;
