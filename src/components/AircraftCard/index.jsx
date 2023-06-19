import React from 'react';
import { useSelector } from 'react-redux';
import {
  Card,
  CardContent,
  Typography,
  Box
} from '@mui/material';

import { LinearProgressWithLabel } from '../';

const AircraftCard = ({ aircraft, isActive, ...props }) => {
  const rotations = useSelector(state => state.rotations.data[aircraft.ident]);

  const levelOfUsage = rotations ? rotations.reduce((acc, rotation) => {
    const { departuretime, arrivaltime } = rotation;
    return acc + (arrivaltime - departuretime);
  }, 0) / 86400 * 100 : 0;

  return (
    <div {...props}>
      <Card sx={{ width: '100%', backgroundColor: isActive ? '#eee' : '#fff' }}>
        <CardContent>
          <Box>
            <Box>
              <Typography variant="h6" component="div">
                Plane {aircraft.ident}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {aircraft.type}
              </Typography>
            </Box>
            <LinearProgressWithLabel value={levelOfUsage} />
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default AircraftCard;