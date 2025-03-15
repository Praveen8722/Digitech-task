import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";

const FeedbackTable = ({ reviews }) => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ backgroundColor: "#66E2F8" }}>
        DIGITECH SOLUTIONS
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <TextField label="Type to Search..." variant="outlined" size="small" />
        <Button variant="outlined" startIcon={<SortIcon />}>
          Sort
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ bgcolor: "#3A4243" }}>
            <TableRow>
              <TableCell sx={{ color: "#fff" }}>S.No</TableCell>
              <TableCell sx={{ color: "#fff" }}>Name</TableCell>
              <TableCell sx={{ color: "#fff" }}>Mobile Number</TableCell>
              <TableCell sx={{ color: "#fff" }}>Write a review</TableCell>
              <TableCell sx={{ color: "#fff" }}>Submission Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reviews.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.mobile}</TableCell>
                <TableCell>{row.review}</TableCell>
                <TableCell>{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default FeedbackTable;
