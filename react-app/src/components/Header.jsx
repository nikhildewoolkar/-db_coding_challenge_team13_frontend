import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import MenuBook from "@mui/icons-material/MenuBook";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import { useLocation, useNavigate, Link } from "react-router-dom";

export default function Header(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname.split("/")[1];
  function logoutHandler() {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    navigate("/");
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Icon
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {path === "trades" ? <RequestQuoteIcon /> : path === "books" ? <MenuBook /> : <AttachMoneyIcon />}
          </Icon>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {path === "trades" ? (
              <Link
                to="/books"
                style={{ textDecoration: "none", color: "white" }}
              >
                Back
              </Link>
            ) : (
              "FIC Team"
            )}
          </Typography>
          {localStorage.getItem("username") && (
            <Button color="inherit">{localStorage.getItem("username")}</Button>
          )}
          {localStorage.getItem("username") && (
            <Button color="inherit" onClick={() => logoutHandler()}>
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
