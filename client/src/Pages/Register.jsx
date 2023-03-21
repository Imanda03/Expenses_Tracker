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
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { addRegister } from "../services/Api";
// import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [users, setUsers] = React.useState({
    fullName: "",
    userName: "",
    password: "",
    rePassword: "",
  });

  const handleChange = (event) => {
    setUsers({ ...users, [event.target.name]: event.target.value });
  };

  const submitData = (e) => {
    // const { fullName, userName, password, rePassword } = users;

    addRegister(users);
    navigate("/login");
  };

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
          Register
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <div className="inputDiv">
            <TextField
              name="fullName"
              label="Full Name"
              variant="standard"
              value={users.fullName}
              onChange={(event) => handleChange(event)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <GroupAddIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              name="userName"
              label="Email"
              type="email"
              variant="standard"
              onChange={(event) => handleChange(event)}
              value={users.userName}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <ContactMailIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              name="password"
              label="Password"
              type="password"
              variant="standard"
              value={users.password}
              onChange={(event) => handleChange(event)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <LockPersonIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              name="rePassword"
              type="password"
              label="Re-Enter Password"
              variant="standard"
              value={users.rePassword}
              onChange={(event) => handleChange(event)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <LockPersonIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              type="submit"
              onClick={() => submitData()}
            >
              Register
            </Button>
          </div>
        </Box>
      </Paper>
    </Box>
  );
};

export default Register;
