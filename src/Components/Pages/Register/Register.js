import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Box, Button, FormLabel, TextField } from "@mui/material";
import classes from "../../../Styles/Pages/Login/Login.module.css";
import { registerUser } from "../../BackendApi/LoginAndRegister/LoginAuth";

const strengthLabels = ["weak", "medium", "strong"];

const Register = () => {
  const { error, success } = useSelector((state) => state.Auth);
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [strength, setStrength] = useState("");
  const getStrength = (password) => {
    let strengthIndicator = -1;
    let upper = false;
    let lower = false;
    let numbers = false;
  

    for (let i = 0; i < password.length; i++) {
      let char = password.charCodeAt(i);
      if (!upper && char >= 65 && char <= 90) {
        upper = true;
        strengthIndicator++;
      }

      if (!numbers && char >= 48 && char <= 57) {
        numbers = true;
        strengthIndicator++;
      }

      if (!lower && char >= 97 && char <= 122) {
        lower = true;
        strengthIndicator++;
      }
    }
    setStrength(strengthLabels[strengthIndicator] ?? "");
  };

  const handleChange = (e) => {
    getStrength(e.target.value);
  };

  const submitForm = (data) => {
    data.email = data.email.toLowerCase();
    dispatch(registerUser(data));
  };

  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.container}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}

        <form onSubmit={handleSubmit(submitForm)}>
          <div>
            <p className={classes.login}>Register</p>
          </div>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <FormLabel sx={{ paddingTop: "2%" }}>Email address</FormLabel>
            <TextField variant="outlined" {...register("email")} />
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <FormLabel sx={{ paddingTop: "5%" }}>Password</FormLabel>
            <TextField {...register("password")} onChange={handleChange} />
          </Box>

          <div>{strength && <>{strength} password</>}</div>

          <Box sx={{ paddingTop: "5%" }}>
            <Button variant="contained" className={classes.btn} type="submit">
              Register
            </Button>
          </Box>
          <Box style={{ paddingTop: "3%" }}>
            <p>
              Move To Login Page ?
              <Button onClick={() => navigation("/Login")}>Login</Button>
            </p>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Register;
