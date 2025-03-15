import React, { useState } from "react";
import { TextField, Button, Typography, Rating } from "@mui/material";

function ReviewForm({ onSubmitReview }) {
  const [rating, setRating] = useState(2);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const reviewData = { name, mobile, review, rating };
    onSubmitReview(reviewData);
    setName("");
    setMobile("");
    setReview("");
    setRating(2); // Reset the form
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        maxWidth: "500px",
        margin: "auto",
        padding: "24px",
        borderRadius: "8px",
        backgroundColor: "#fff",
      }}
    >
      {/* Google Logo */}
      <div style={{ marginBottom: "16px" }}>
        <img
          src="/src/assets/google.webp"
          alt="Google Logo"
          style={{ width: "250px" }}
        />
      </div>

      {/* Rating Component */}
      <Rating
        name="rating"
        value={rating}
        onChange={(event, newValue) => setRating(newValue)}
        size="large"
      />

      <Typography variant="h6" style={{ marginTop: "16px", fontWeight: "bold" }}>
        Submit Your Review
      </Typography>

      {/* Form */}
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <TextField
        required
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
        required
          label="Mobile Number"
          variant="outlined"
          fullWidth
          margin="normal"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <TextField
        required
          label="Write a review"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: "16px" }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default ReviewForm;
