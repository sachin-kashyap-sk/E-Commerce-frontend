import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../BackendApi/LoginAndRegister/LoginAuth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Box, Button, FormLabel, TextField } from "@mui/material";
import classes from "../../../Styles/Pages/Login/Login.module.css";
const Login = () => {
  const { userInfo, loading, error } = useSelector((state) => state.Auth);
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    } else if (!loading && userInfo) navigate("/");
  }, [userInfo, loading, navigate]);

  const submitForm = (data) => {
    dispatch(userLogin(data));
  };
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.container}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSubmit(submitForm)}>
          <div>
            <p className={classes.login}>Login</p>
          </div>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <FormLabel sx={{ paddingTop: "2%" }}>Email address</FormLabel>
            <TextField type="email" variant="outlined" {...register("email")} />
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <FormLabel sx={{ paddingTop: "5%" }}>Password</FormLabel>
            <TextField type="password" {...register("password")} />
          </Box>
          <Box sx={{ paddingTop: "5%" }}>
            <Button variant="contained" className={classes.btn} type="submit">
              Login
            </Button>
          </Box>
          <Box style={{ paddingTop: "3%" }}>
            <p>
              Not Have a Account ?
              <Button onClick={() => navigate("/Register")}>
                Register Now
              </Button>
            </p>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
