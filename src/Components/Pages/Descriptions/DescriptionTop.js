import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "../../../Styles/Pages/Description/DescriptionTop.module.css";
import { HomeProductById } from "../../BackendApi/Home/HomeProduct";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Quality from "../Home/Quality";
import DescriptionSecContainer from "./DescriptionSecContianer";
import DescriptionDetail from "./DescriptionDetail";

const DescriptionTop = () => {
  const dispatch = useDispatch();
  const { detail } = useSelector((state) => state.HomeMiddle);
  const { id } = useParams();

  useEffect(() => {
    if (id) dispatch(HomeProductById({ id }));
  }, [dispatch, id]);

  return !!detail ? (
    <Box>
      <Box className={classes.firstContainer}>
        <img className={classes.desImage} src={detail.image} alt="cloth" />
        <Box className={classes.secContainer}>
          <p className={classes.brand}>Brand : {detail.brand}</p>
          <p className={classes.title}>{detail.title}</p>
          <p className={classes.price}>Price : {detail.price} $</p>
          <p className={classes.shortDes}>{detail.shortDes}</p>
          {/* <p className={classes.offer}>{detail.offer}</p> */}
          <p className={classes.shortDes}>Offers</p>
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
                    <p>BankOffer</p>
                    <p>Upto $ 29.90 discount on select Credit Cards, HDFC…</p>
                    {/* <p>{detail.bankOfferText}</p> */}
                  </Box>
                </CardContent>
              </Card>

              <Card>
                <CardContent>
                  <Box>
                    {/* <p>{detail.noCostEMI}</p> */}
                    {/* <p>{detail.emiText}</p> */}
                    <p>No Cost EMI</p>
                    <p>
                      Avail No Cost EMI on select cards for orders above ₹3000
                    </p>
                  </Box>
                </CardContent>
              </Card>

              <Card>
                <CardContent>
                  <Box>
                    {/* <p>{detail.partnerOffers}</p> */}
                    {/* <p>{detail.partnerOffersText}</p> */}
                    <p>Partner Offers</p>
                    <p>
                      Get GST invoice and save up to 28% on business purchases.
                    </p>
                  </Box>
                </CardContent>
              </Card>
            </Box>
            <Box>{<Quality />}</Box>
            <Box>
              <DescriptionSecContainer />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box>
        <DescriptionDetail />
      </Box>
    </Box>
  ) : null;
};

export default DescriptionTop;
