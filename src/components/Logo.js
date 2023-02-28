import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// react icons
import { FaPatreon } from 'react-icons/fa';
import { flexCenter } from '../themes/commonStyles';
import { blue } from '@mui/material/colors';

const Logo = () => {
  return (
    <Box sx={flexCenter}>
      <FaPatreon size={40} color={blue[500]} />
      <Typography
        sx={{
          ml: 1,
          color: (theme) => theme.palette.secondary.main,
          fontSize: '20px',
          fontWeight: 'bold',
        }}
        component="h3"
      >
        Poziks
      </Typography>
    </Box>
  );
};

export default Logo;
