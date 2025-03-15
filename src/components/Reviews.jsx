import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Rating,
  Typography,
} from '@mui/material';

const reviews = [
  { name: 'Kareem', store: 'CAKES BAY', phone: '7012853601', rating: 1, review: 'Not satisfied' },
  { name: 'Asfaq', store: 'CAKES BAY', phone: '9745236412', rating: 2, review: 'Not satisfied' },
  { name: 'Razi', store: 'CAKES BAY', phone: '9734561834', rating: 2, review: 'Not satisfied' },
  { name: 'Zayaan', store: 'CAKES BAY', phone: '9845236852', rating: 3, review: 'Ok' },
  { name: 'Hello test', store: 'CAKES BAY', phone: '7523651254', rating: 3, review: 'Hello' },
  { name: 'Hanzal', store: 'CAKES BAY', phone: '9995056553', rating: 2, review: 'B' },
  { name: 'Maheshchandra Dhyanachand', store: 'CAKES BAY', phone: '8888888888', rating: 1, review: 'Testing testing testing' },
  { name: 'Test', store: 'CAKES BAY', phone: '9191919191', rating: 2, review: 'Test' },
  { name: 'Test', store: 'CAKES BAY', phone: '9090909091', rating: 1, review: 'Test' },
  { name: 'Kishore', store: 'CAKES BAY', phone: '879208468', rating: 1, review: 'Huuuujjj' },
];

export default function ReviewTable() {
  return (
    <TableContainer sx={{mt:'3rem'}}>
        <Typography mb={1} fontSize={'24px'} fontWeight={600} color='gray'>
        Reviews (Negative =3)
        </Typography>
      <Table >
        <TableHead >
          <TableRow component={Paper}>
            <TableCell>Customer Name</TableCell>
            <TableCell>Store</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Rating</TableCell>
            <TableCell>Review</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reviews.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.store}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell>
                <Rating value={row.rating} readOnly />
              </TableCell>
              <TableCell>{row.review}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
