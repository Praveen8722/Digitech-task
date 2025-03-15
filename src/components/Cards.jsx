import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Tooltip,
  IconButton,
} from '@mui/material';
import QrCodeIcon from '@mui/icons-material/QrCode';

const MyCard = () => {
  return (
    <Card sx={{ maxWidth: 400,ml:5 , mt: 8 }}>
      {/* Card Header */}
       <Box bgcolor={'#EAF9F2'} display="flex" alignItems="center" justifyContent="space-between" mb={2}>
          <Typography variant="body2" fontWeight="bold" ml={2}>
            9mmq7d
          </Typography>
          <Box display="flex" alignItems="center">
            <Chip label="Active" color="success" size="small" sx={{ mr: 26 }} />
            <Tooltip title="QR Code">
              <IconButton>
                <QrCodeIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>

      {/* Card Content */}
      <CardContent>
  <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between' }}>
    <Typography variant="body2" color="text.secondary">
      <strong>Id:</strong>
    </Typography>
    <Typography variant="body2" color="text.secondary">
      9mmq7d
    </Typography>
  </Box>
  <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between' }}>
    <Typography variant="body2" color="text.secondary">
      <strong>Google review URL:</strong>
    </Typography>
    <Typography variant="body2" color="text.secondary">
      <a
        href="https://reviewthis.biz/cakesbay"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://reviewthis.biz/cakesbay
      </a>
    </Typography>
  </Box>
  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
    <Typography variant="body2" color="text.secondary">
      <strong>Click count:</strong>
    </Typography>
    <Typography variant="body2" color="text.secondary">
      289
    </Typography>
  </Box>
</CardContent>

    </Card>
  );
};

export default MyCard;
