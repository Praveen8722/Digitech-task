import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Button, Typography, IconButton, Box, Paper } from '@mui/material';
import { Phone, WhatsApp, Save, Share } from '@mui/icons-material';
import MicrosoftIcon from '@mui/icons-material/Microsoft';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const UserCard = () => {
    const [showPersonalInfo, setShowPersonalInfo] = useState(false); // State for toggling personal information

    const handleTogglePersonalInfo = () => {
        setShowPersonalInfo((prev) => !prev); // Toggle the state
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#f4f4f4',
                position: 'relative',
            }}
        >
            <Card sx={{ width: 300, borderRadius: 2, boxShadow: 3, position: 'relative' }}>
                {/* Microsoft Icon */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 10,
                        left: 10,
                        zIndex: 1,
                    }}
                >
                    <MicrosoftIcon fontSize="large" sx={{ color: 'gray' }} />
                </Box>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '4.5%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 1,
                    }}
                >
                    <RemoveRedEyeIcon sx={{ width: 20, height: 20, color: 'gray' }} />
                </Box>

                {/* ToggleOn Icon */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        zIndex: 1,
                    }}
                >
                    <ToggleOnIcon
                        fontSize="large"
                        sx={{
                            width: 60,
                            height: 60,
                            mt: '-7px',
                            color: 'purple',
                        }}
                    />
                </Box>

                {/* Profile image */}
                <CardMedia
                    component="img"
                    height="200"
                    image="/src/assets/image1.png"
                    alt="Profile Picture"
                    sx={{ borderRadius: '10%', border: '3px solid gray', margin: '50px auto 10px', width: '80%' }}
                />

                <CardContent>
                    <Typography variant="h4" align="center" color="gray">
                        Dhanraj K
                    </Typography>
                    <Typography variant="h6" align="center" color="gray">
                        VENUS HARDWARE (OWNER)
                    </Typography>
                </CardContent>

                {/* Individual Paper components for each IconButton */}
                <Box display="flex" justifyContent="center" gap={2} paddingBottom={2}>
                    <Paper
                        variant="outlined"
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 1,
                            boxShadow: 10,
                        }}
                    >
                        <IconButton color="primary" onClick={() => console.log('Call')}>
                            <Phone />
                        </IconButton>
                    </Paper>
                    <Paper
                        variant="outlined"
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 1,
                            boxShadow: 10,
                        }}
                    >
                        <IconButton color="primary" onClick={() => console.log('WhatsApp')}>
                            <WhatsApp />
                        </IconButton>
                    </Paper>
                    <Paper
                        variant="outlined"
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 1,
                            boxShadow: 10,
                        }}
                    >
                        <IconButton color="secondary" onClick={() => console.log('Save')}>
                            <Save />
                        </IconButton>
                    </Paper>
                    <Paper
                        variant="outlined"
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 1,
                            boxShadow: 10,
                        }}
                    >
                        <IconButton color="primary" onClick={() => console.log('Share')}>
                            <Share />
                        </IconButton>
                    </Paper>
                </Box>

                {/* Action Buttons */}
                <Box padding={2} sx={{ borderRadius: '1rem', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
                    <Button
                        fullWidth
                        variant="outlined"
                        sx={{
                            marginBottom: 3,
                            borderRadius: '1rem',
                            boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
                        }}
                        onClick={handleTogglePersonalInfo} // Toggle visibility on click
                    >
                        Personal Information
                    </Button>

                    {/* Conditional rendering of user data */}
                    {showPersonalInfo && (
                        <Box sx={{ padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '1rem' }}>
                            <Typography variant="body1" color="textSecondary">
                                Name: Dhanraj K
                            </Typography>
                            <Typography variant="body1" color="textSecondary">
                                Business: VENUS HARDWARE (OWNER)
                            </Typography>
                            <Typography variant="body1" color="textSecondary">
                                Email: dhanraj@example.com
                            </Typography>
                            <Typography variant="body1" color="textSecondary">
                                Phone: +1234567890
                            </Typography>
                        </Box>
                    )}

                    <Button
                        fullWidth
                        variant="outlined"
                        sx={{
                            marginBottom: 3,
                            borderRadius: '1rem',
                            boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        Social Media
                    </Button>
                    <Button
                        fullWidth
                        variant="outlined"
                        sx={{
                            marginBottom: 3,
                            borderRadius: '1rem',
                            boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        Business Details
                    </Button>
                    <Button
                        fullWidth
                        variant="outlined"
                        sx={{
                            marginBottom: 3,
                            borderRadius: '1rem',
                            boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        Gallery / Catalogue
                    </Button>
                    <Button
                        fullWidth
                        variant="outlined"
                        sx={{
                            marginBottom: 3,
                            borderRadius: '1rem',
                            boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        Payment Option
                    </Button>
                </Box>
            </Card>
        </Box>
    );
};

export default UserCard;
