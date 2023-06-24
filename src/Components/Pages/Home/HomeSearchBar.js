import React, { useEffect, useState } from "react";
import { Box, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
// import { searchByTitle } from "../../ReduxSection/Home/HomeMiddleSlice";
// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useLocation } from "react-router-dom";
import { HomeProduct, ProductSearch } from "../../BackendApi/Home/HomeProduct";
import { MenProduct, MenProductSearch } from "../../BackendApi/Men/MenProduct";
// import { searchMenByTitle } from "../../ReduxSection/Mens/MensSlice";
import { Women, WomenProductSearch } from "../../BackendApi/Women/Women";
// import { searchWomenByTitle } from "../../ReduxSection/Women/WomenSlice";
import classes from "../../../Styles/Nav/Nav.module.css";
const HomeSearchBar = () => {
  const location = useLocation();
  const path = location.pathname;
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (query.trim().length && path === "/")
      dispatch(ProductSearch({ title: query }));
    if (query.trim().length && path === "/Men") {
      dispatch(MenProductSearch({ title: query }));
    }
    if (query.trim().length && path === "/Women") {
      dispatch(WomenProductSearch({ title: query }));
    } else if (path === "/" && !query.trim()) dispatch(HomeProduct(""));
    else if (path === "/Men" && !query.trim()) dispatch(MenProduct(""));
    else if (path === "/Women" && !query.trim()) dispatch(Women(""));
  }, [dispatch, query, path]);

  // const handleClick = (e) => {
  //   path === "/" && dispatch(searchByTitle);
  //   path === "/Men" && dispatch(searchMenByTitle);
  //   path === "/Women" && dispatch(searchWomenByTitle);
  // };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <TextField
        className={classes.search}
        size="small"
        placeholder="Search..."
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {/* <Button
        onClick={handleClick}
        sx={{ color: "#242424" }}
        size="small"
        startIcon={<SearchOutlinedIcon />}
      >
        search
      </Button> */}
    </Box>
  );
};

export default HomeSearchBar;
