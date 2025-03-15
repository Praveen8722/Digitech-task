import React from 'react';
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
  Typography,
} from '@mui/material';

const CustomerTable = () => {
  const customers = [
    { name: 'Mubarak', storeName: 'CAKES BAY', email: '', phone: '6001714180' },
    { name: 'Rishad', storeName: 'CAKES BAY', email: '', phone: '7012891601' },
    { name: 'Jaseem Chaili', storeName: 'CAKES BAY', email: '', phone: '9947006008' },
    { name: 'Rajeev', storeName: 'CAKES BAY', email: '', phone: '9805390554' },
    { name: 'Pogan Pansa', storeName: 'CAKES BAY', email: '', phone: '7299695571' },
    { name: 'Kareem', storeName: 'CAKES BAY', email: '', phone: '7012853601' },
    { name: 'Asfaq', storeName: 'CAKES BAY', email: '', phone: '9745298412' },
    { name: 'Razi', storeName: 'CAKES BAY', email: '', phone: '9734561834' },
  ];

  return (
    <Box sx={{ padding: '16px',mt:'2rem' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
       <Typography fontSize={'24px'} fontWeight={600} color='gray'>Customers</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
  <Select sx={{ marginRight: '8px' }} size="small" defaultValue="" displayEmpty>
    <MenuItem value="">Select a card</MenuItem>
    <MenuItem value="Card1">Card 1</MenuItem>
    <MenuItem value="Card2">Card 2</MenuItem>
  </Select>
  <Button variant="outlined" color="success" sx={{ marginRight: '8px' }}>
    Export
  </Button>
  <Button variant="contained" color="primary">
    Add Customer
  </Button>
</Box>

      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Store Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((customer, index) => (
              <TableRow key={index}>
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.storeName}</TableCell>
                <TableCell>{customer.email || '-'}</TableCell>
                <TableCell>{customer.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
        <Button variant="text">Next</Button>
      </Box>
    </Box>
  );
};

export default CustomerTable;
