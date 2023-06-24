import { Box, Card, CardContent, Container } from "@mui/material";
import React, { useEffect } from "react";
import Quality from "../../Home/Quality";
import classes from "../../../../Styles/Pages/Description/DescriptionTop.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { MenProductById } from "../../../BackendApi/Men/MenProduct";
import MenSecDes from "./MenSecDes";
import MenThirdDes from "./MenThirdDes";
const MenTopDes = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { detail } = useSelector((state) => state.Men);
  useEffect(() => {
    if (id) dispatch(MenProductById({ id }));
  }, [dispatch, id]);

  return !!detail ? (
    <Container maxWidth="false">
      <Box>
        <Box className={classes.firstContainer}>
          <img className={classes.desImage} src={detail.image} alt="cloth" />
          <Box className={classes.secContainer}>
            <p className={classes.brand}>Brand : {detail.brand}</p>
            <p className={classes.title}>{detail.title}</p>
            <p className={classes.price}>Price : {detail.price} $</p>
            <p className={classes.shortDes}>{detail.shortDes}</p>
            {/* <p className={classes.offer}>{detail.offer}</p> */}
            <p className={classes.offer}>Offers</p>

            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Card>
                  <CardContent>
                    <Box>
                      {/* <p>{detail.bankOffer}</p> */}
                      <p>Bank Offer</p>
                      <p>Upto $ 29.90 discount on select Credit Cards, HDFC…</p>

                      {/* <p>{detail.bankOfferText}</p> */}
                    </Box>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent>
                    <Box>
                      <p>No Cost EMI</p>
                      <p>
                        Avail No Cost EMI on select cards for orders above ₹3000
                      </p>
                      {/* <p>{detail.noCostEMI}</p> */}
                      {/* <p>{detail.emiText}</p> */}
                    </Box>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent>
                    <Box>
                      <p>Partner Offers</p>
                      <p>
                        Get GST invoice and save up to 28% on business
                        purchases.
                      </p>
                      {/* <p>{detail.partnerOffers}</p> */}
                      {/* <p>{detail.partnerOffersText}</p> */}
                    </Box>
                  </CardContent>
                </Card>
              </Box>
              <Box>{<Quality />}</Box>
              <Box>
                <MenSecDes />
              </Box>
            </Box>
          </Box>
        </Box>

        <Box>
          <MenThirdDes />
        </Box>
      </Box>
    </Container>
  ) : null;
};

export default MenTopDes;
