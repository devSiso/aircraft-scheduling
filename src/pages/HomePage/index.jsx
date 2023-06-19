import React, {
  useEffect,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Typography,
  Box,
  Grid,
  Snackbar,
  Alert,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ClickAwayListener
} from '@mui/material';

import AircraftsAPI from '../../api/services/aircrafts';
import FlightsAPI from '../../api/services/flights';

import {
  getAircraftsStart,
  getAircraftsSuccess,
  getAircraftsFailure,
  selectAircraft,
} from '../../store/slices/aircrafts';

import {
  getFlightsStart,
  getFlightsSuccess,
  getFlightsFailure,
} from '../../store/slices/flights';

import {
  DateHeading,
  AircraftCard,
  FlightCard,
  RotationList,
  SearchBar,
  FlightTimeline
} from '../../components';

import { FlightsList, GridHeader } from './styles';

const HomePage = () => {
  const [error, setError] = useState('');
  const [isFlightListOpen, setIsFlightListOpen] = useState(false);
  const dispatch = useDispatch();

  const aircrafts = useSelector(state => state.aircrafts.data);
  const flights = useSelector(state => state.flights.data);
  const selectedAircraft = !!aircrafts.length && aircrafts.find(aircraft => aircraft.selected);
  
  const rotations = useSelector(state => selectedAircraft && state.rotations.data[selectedAircraft.ident])
  const lastRotationFlight = rotations && rotations[rotations.length - 1];

  const filtered_Flights = selectedAircraft && lastRotationFlight ? flights.filter(flight => {
    return flight.origin ===  lastRotationFlight.destination
  }): flights;


  const handleCloseSnackbar = () => setError(null);

  const handleOpenFlightsList = () => setIsFlightListOpen(true);
  const handleCloseFlightsList = () => setIsFlightListOpen(false);

  const handleAircraftSelect = aircraft => {
    dispatch(selectAircraft(aircraft))
  };

  const handleFlightSearch = value => {
    const copyFlights = [...filtered_Flights];

    const filteredFlights = copyFlights.map(flight => {
      const flightNumber = flight.ident.toLowerCase().includes(value.toLowerCase());
      const departure = flight.origin.toLowerCase().includes(value.toLowerCase());
      const arrival = flight.destination.toLowerCase().includes(value.toLowerCase());

      if (flightNumber || departure || arrival) {
        return { ...flight, hidden: false }
      } else {
        return { ...flight, hidden: true }
      }
    });

    dispatch(getFlightsSuccess(filteredFlights));
  }

  const fetchAircrafts = async () => {
    dispatch(getAircraftsStart());

    try {
      const response = await AircraftsAPI.getAircrafts();
      dispatch(getAircraftsSuccess(response));
      handleAircraftSelect(response[0]);
    } catch (error) {
      dispatch(getAircraftsFailure(error));
    }
  };

  const fetchFlights = async () => {
    dispatch(getFlightsStart());
    const savedHiddenFlights = flights.filter(flight => flight.hidden === true)

    try {
      const response = await FlightsAPI.getFlights();

      const filteredArray = response.map(flight => {
        const foundFlight = savedHiddenFlights.find(savedFlight => savedFlight.ident === flight.ident) || null;
        if (foundFlight) {
          return { ...flight, hidden: true }
        } else {
          return { ...flight, hidden: false }
        }
      })

      dispatch(getFlightsSuccess(filteredArray));
    } catch (error) {
      dispatch(getFlightsFailure(error));
    }
  };

  useEffect(() => {
    fetchAircrafts();
    fetchFlights();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={!!error}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert severity="error">{error}</Alert>
      </Snackbar>
      <Box sx={{ flexGrow: 1, mb: 4 }}>
        <DateHeading />
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={3}>
          <Box>
            <GridHeader>
              <Typography variant="h6">
                Aircrafts
              </Typography>
            </GridHeader>
            <FormControl variant="standard" sx={{ mb: 2, width: '100%' }}>
              <InputLabel id="aircraft">Aircraft</InputLabel>
              <Select
                labelId="aircraft"
                value={selectedAircraft || ''}
                onChange={e => handleAircraftSelect(e.target.value)}
                label="Aircraft"
              >
                {aircrafts.map(aircraft => (
                  <MenuItem key={aircraft.ident} value={aircraft}>Plane {aircraft.ident}</MenuItem>
                ))}
              </Select>
            </FormControl>
            {selectedAircraft && (
              <AircraftCard aircraft={selectedAircraft} />
            )}
          </Box>
          <Box>
            <GridHeader>
              <Typography variant="h6">
                Flights
              </Typography>
            </GridHeader>
            <ClickAwayListener onClickAway={handleCloseFlightsList}>
              <div className='flights-list__searchbar-wrapper'>
                <SearchBar
                  label='Search flight (Ex: AS1058)'
                  id='flight-search'
                  onFocus={handleOpenFlightsList}
                  onChange={handleFlightSearch}
                  onSubmit={handleFlightSearch}
                  aria-controls={isFlightListOpen ? 'flight-list' : undefined}
                  aria-haspopup="true"
                  aria-expanded={isFlightListOpen ? 'true' : undefined}
                />
                {isFlightListOpen && (
                  <FlightsList id="flight-list" aria-labelledby='flight-search'>
                    {filtered_Flights.map(flight => (
                      <FlightCard data-hidden={flight.hidden} key={flight.ident} data={flight} onError={setError} />
                    ))}
                  </FlightsList>
                )}
              </div>
            </ClickAwayListener>
          </Box>
        </Grid>
        <Grid item xs={12} lg={9}>
          {selectedAircraft && (
            <>
              <GridHeader>
                <FlightTimeline aircraft={selectedAircraft} />
              </GridHeader>
              <RotationList selectedAircraft={selectedAircraft} />
            </>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default HomePage;