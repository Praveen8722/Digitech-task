import React from "react";
import { Container, Box, Typography, TextField, Button, IconButton } from "@mui/material";
import { Facebook, Instagram, LinkedIn, LocationOn } from "@mui/icons-material";

const DigiTech = () => {
  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", py: 4 }}>
      {/* Logo Image */}
      <Box
        component="img"
        src="/src/assets/image2.png"
        alt="Logo"
        sx={{ width: "150px", height: "150px", mx: "auto", mb: 3 }}
      />

      {/* Social Media Icons */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 4 }}>
        <IconButton href="https://instagram.com" target="_blank" color="primary">
          <Instagram />
        </IconButton>
        <IconButton href="https://facebook.com" target="_blank" color="primary">
          <Facebook />
        </IconButton>
        <IconButton href="https://linkedin.com" target="_blank" color="primary">
          <LinkedIn />
        </IconButton>
        <IconButton color="primary">
          <LocationOn />
        </IconButton>
      </Box>

      {/* Form */}
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          alignItems: "center",
        }}
        noValidate
        autoComplete="off"
      >
        {/* Contact Name Input */}
        <TextField
          label="Contact Name"
          variant="outlined"
          fullWidth
          sx={{ maxWidth: "400px" }}
        />

        {/* Email Input */}
        <TextField
          label="Email Address"
          variant="outlined"
          fullWidth
          sx={{ maxWidth: "400px" }}
        />

        {/* Phone Number Input */}
        <TextField
          label="Phone Number"
          variant="outlined"
          fullWidth
          sx={{ maxWidth: "400px" }}
        />

        {/* Message Textarea */}
        <TextField
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          sx={{ maxWidth: "400px" }}
        />

        {/* Submit Button */}
        <Button variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default DigiTech;
