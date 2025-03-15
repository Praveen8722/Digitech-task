import React from "react";
import { Box, List, ListItem, ListItemButton, ListItemIcon, TextField, IconButton, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ReviewsIcon from "@mui/icons-material/RateReview";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Sidebar = () => {
  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/" },
    { text: "Customers", icon: <PeopleIcon />, path: "/customers" },
    { text: "Reviews", icon: <ReviewsIcon />, path: "/reviews" },
    { text: "Cards", icon: <CardMembershipIcon />, path: "/cards" },
    { text: "Settings", icon: <SettingsIcon />, path: "/settings" },
  ];

  return (
    <Box
      width={240}
      sx={{
        height: "100vh",
        backgroundColor: "#f5f5f5",
        borderRight: "1px solid #ddd",
        display: "flex",
        flexDirection: "column",
        position: "relative", // Ensures the sidebar content respects the fixed search bar
      }}
    >
      {/* Fixed Search Bar and Icons */}
      <Box
      width={1150}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          position: "fixed",
          top: 0, // Fixed at the top of the screen
          right: 0,
          padding: "16px",
          backgroundColor: "white", // Ensures background is visible
          zIndex: 1000, // Ensures it stays above the sidebar content
        }}
      >
        <TextField variant="standard" size="small" placeholder="Search..." fullWidth />
        <Box display="flex" alignItems="center">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Adjusting for Fixed Search Bar */}
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <img
          style={{ width: "9rem", height: "4rem" }}
          src="/src/assets/image2.png"
          alt="Logo"
        />
      </Box>

      {/* Sidebar Menu Items */}
      <List>
        {menuItems.map((item, index) => (
          <ListItem disablePadding key={index}>
            <ListItemButton component={Link} to={item.path}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
