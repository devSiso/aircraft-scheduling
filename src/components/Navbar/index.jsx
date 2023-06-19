import React from "react";
import { Box, Typography } from "@mui/material";
import AirlinesIcon from '@mui/icons-material/Airlines';

const Navbar = () => {
  return (
    <Box sx={{ width: '100%', height: 40, backgroundColor: '#1976d2', display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <a href="/" style={{ textDecoration: 'none', color: '#fff', display: 'flex', alignItems: 'center'}}>
          <AirlinesIcon style={{ fill: '#fd7702' }} />
          <Typography variant="h6" component="div" color="#fff">
            lphaFlights
          </Typography>
        </a>
      </Box>
    </Box>
  );
}

export default Navbar