import React from "react";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import Container from "@mui/material/Container";
import classes from "../../../Styles/Nav/Pagination.module.css";
import Footer from "./../../Pages/Footer/index";
import RightSection from "./RightSection";
const PaginationWomen = () => {
  const [activeStep, setActiveStep] = React.useState(1);
  const NavLink = [
    {
      title: <RightSection />,
    },
  ];
  return (
    <Container maxWidth="false">
      <Box className={classes.mainContainer}>
        {NavLink.map((step, index) => (
          <Box key={index}>
            {Math.abs(activeStep - index) <= 1 ? <Box>{step.title}</Box> : null}
          </Box>
        ))}
        <Box className={classes.paginationContainer}>
          <Pagination
            defaultPage={activeStep}
            count={4}
            onChange={(event, value) => setActiveStep(value)}
          />
        </Box>
      </Box>
      <Footer />
    </Container>
  );
};
export default PaginationWomen;
