import React from "react";
import { AppBar, Box, Toolbar, Typography, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const Para = styled(NavLink)`
  font-size: 20px;
  margin-right: 20px;
  color: white;
  text-decoration: none;
`;

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ width: "100%" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Para to="/">Expenses Tracker</Para>
          </Typography>
          <Para to="/login">Login</Para>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
