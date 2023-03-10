import React from "react";
import {
  Paper,
  Box,
  TextField,
  Typography,
  InputAdornment,
  Button,
} from "@mui/material";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ marginTop: "100px", marginLeft: "30%" }}>
      <Paper elevation={24} sx={{ width: "45%", height: "60vh" }}>
        <Typography
          py={2}
          className="loginHeader"
          sx={{
            fontSize: "26px",
            alignContent: "center",
            textAlign: "center",
            fontWeight: "700",
          }}
        >
          LogIn
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <div className="inputDiv">
            <TextField
              className="userName"
              //   placeholder="Enter Your UserName"
              label="Email"
              type="email"
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <ContactMailIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              className="userName"
              type="password"
              //   placeholder="Enter Your password"
              label="Password"
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <LockPersonIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button variant="contained">Login</Button>
            <p className="buttonPara">OR</p>
            <Button variant="contained" onClick={() => navigate("/register")}>
              Register
            </Button>
          </div>
        </Box>
      </Paper>
    </Box>
  );
};

export default LoginPage;
