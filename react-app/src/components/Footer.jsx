import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Icon from "@mui/material/Icon";
import { BottomNavigation } from "@mui/material";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const Footer = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 2 }}>
        <AppBar position="static" style={{ bottom: 0, position: "fixed" }}>
          <Toolbar>
            <Typography variant="p" component="div" sx={{ flexGrow: 1 }}>
              Copyright © 2022 FIC Portal
            </Typography>
            <div style={{display: 'flex'}}>
            <Icon size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
              <ContactMailIcon />
            </Icon>
            <Typography variant="p" component="div" sx={{ flexGrow: 1 }}>
              Contact:{" "}
              <a href="mailto:ficadmin@fic.com" style={{ color: "white" }}>
                ficadmin@fic.com
              </a>
            </Typography>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
      <BottomNavigation />
    </div>
  );
};
export default Footer;
