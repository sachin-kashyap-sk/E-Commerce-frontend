import React, { useEffect } from "react";
import { Box } from "@mui/material";
import classes from "../../../Styles/Pages/About/About.module.css";
import Container from "@mui/material/Container";
import Footer from "./../Footer/index";
import { useDispatch, useSelector } from "react-redux";
// import { selectedAbout } from "../../ReduxSection/About/AboutSlice";
import Quality from "../Home/Quality";
import { AboutHeader } from "../../BackendApi/About/AboutHeader";
import { AboutWeAre } from "../../BackendApi/About/AboutWeAre";
import { AboutFewWord } from "../../BackendApi/About/AboutFewWord";
import { AboutTeam } from "../../BackendApi/About/AboutTeam";
const About = () => {
  // const Data = useSelector(selectedAbout);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AboutHeader());
    dispatch(AboutWeAre());
    dispatch(AboutFewWord());
    dispatch(AboutTeam());
  }, [dispatch]);

  const { image } = useSelector((state) => state.AboutHeader);
  const { title, subTitle, weAreImage } = useSelector(
    (state) => state.AboutWeAre
  );
  const { fewWords, ourTeam, mainTitle } = useSelector(
    (state) => state.AboutFew
  );

  const { data } = useSelector((state) => state.AboutTeam);

  return (
    <Container maxWidth="false">
      <Box>
        <Box className={classes.imgContainer}>
          <img
            width="100%"
            height="auto"
            src={image?.[0]?.image}
            alt="discussion"
          />
        </Box>

        <Box className={classes.firstContainer}>
          <Box className={classes.innerFirst}>
            <p className={classes.firstText}>{title?.[0]?.title}</p>
            <p className={classes.secText}>{subTitle?.[0]?.subTitle}</p>
          </Box>
          <Box className={classes.innerSec}>
            <img
              width="100%"
              height="auto"
              src={weAreImage?.[0]?.weAreImage}
              alt="weAre"
            />
          </Box>
        </Box>

        <Box className={classes.secContainer}>
          <Box>
            <p className={classes.firstTitle}>{fewWords?.[0]?.fewWords}</p>
            <p className={classes.secTitle}>{ourTeam?.[0]?.ourTeam}</p>
            <p className={classes.thirdTitle}>{mainTitle?.[0]?.mainTitle}</p>
          </Box>

          <Box className={classes.cardContainer}>
            {data.map((item) => (
              <Box key={item._id} className={classes.card}>
                <img
                  width="100px"
                  height="100px"
                  src={item.profile}
                  alt="pic"
                />
                <p>{item.name}</p>
                <p>{item.designation}</p>
              </Box>
            ))}
          </Box>
        </Box>
        <Quality />
        <Footer />
      </Box>
    </Container>
  );
};
export default About;
