import React from "react";
import Container from "@mui/material/Container";
import Brand from "./Brands";
import ShopNow from "./ShopNow";
import MiddleSection from "./MiddleSection";
import LimitedTimeOffer from "./LimitedTimeOffer";
import Quality from "./Quality";
import Footer from "./../Footer/index";
import HomeHeaderPage from "./HomeHeader";

const Home = () => {
  return (
    <Container maxWidth="false">
      <HomeHeaderPage />
      <Brand />
      <ShopNow />
      <MiddleSection />
      <LimitedTimeOffer />
      <Quality />
      <Footer />
    </Container>
  );
};
export default Home;
