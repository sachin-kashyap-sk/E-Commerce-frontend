import React, { useEffect } from "react";
import { Box, Button } from "@mui/material";
import Container from "@mui/material/Container";
import classes from "../../../Styles/Pages/Contact/contact.module.css";
import TextField from "@mui/material/TextField";
import Footer from "./../Footer/index";
import { useDispatch, useSelector } from "react-redux";
import ContactHeader from "../../BackendApi/ContactUs/ContactHeader";
import ContactQueries from "../../BackendApi/ContactUs/ContactQueries";
import ContactComplain from "../../BackendApi/ContactUs/ContactComplain";
import ContactUserMessage from "../../BackendApi/ContactUs/ContactUserMessage";

const ContactUs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ContactHeader());
    dispatch(ContactQueries());
    dispatch(ContactComplain());
    dispatch(ContactUserMessage());
  }, [dispatch]);
  const { image } = useSelector((state) => state.ContactHeader);
  const { title, subTitle } = useSelector((state) => state.ContactQueries);
  const { data } = useSelector((state) => state.ContactComplain);
  const { headerText, msg, subMsg } = useSelector(
    (state) => state.ContactUserMessage
  );
  return (
    <Container maxWidth="false" sx={{ backgroundColor: " #e8f6ef" }}>
      <Box>
        <Box>
          <img
            width="100%"
            height="auto"
            src={image?.[0]?.image}
            alt="contact"
          />
        </Box>
        <Box className={classes.firstContainer}>
          <p className={classes.firstTitle}>{title?.[0]?.title}</p>
          <p className={classes.secTitle}>{subTitle?.[0]?.subTitle}​</p>
        </Box>
        <Box className={classes.secContainer}>
          <Box className={classes.cardContainer}>
            {data.map((item) => (
              <Box className={classes.card} key={item._id}>
                <p className={classes.department}>{item.department}</p>
                <p className={classes.title}>{item.title}</p>
                <p className={classes.contact}>{item.contact}</p>
              </Box>
            ))}
          </Box>
        </Box>
        <Box className={classes.bottomFirstMain}>
          <Box className={classes.bottomMain}>
            <Box className={classes.innerFirst}>
              <p className={classes.strangeText}>
                {headerText?.[0]?.headerText}
              </p>
              <p className={classes.listenText}>{msg?.[0]?.msg}</p>
              <p className={classes.mainMsg}>{subMsg?.[0]?.subMsg}</p>
            </Box>
            <Box className={classes.innerSec}>
              <TextField
                sx={{ width: "100%" }}
                id="outlined-basic"
                label="Name"
                variant="outlined"
              />
              <Box className={classes.input}>
                <TextField
                  sx={{ width: "100%" }}
                  id="outlined-basic"
                  label="Subject"
                  variant="outlined"
                />
              </Box>

              <Box className={classes.input}>
                <TextField
                  sx={{ width: "100%" }}
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                />
              </Box>
              <Box className={classes.input}>
                <textarea minLength="100%" placeholder="Message"></textarea>
              </Box>
              <Box className={classes.input}>
                <Button variant="contained">Send</Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Footer />
      </Box>
    </Container>
  );
};
export default ContactUs;
