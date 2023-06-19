import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Card, CardContent, IconButton } from "@mui/material";

import PlusIcon from '@mui/icons-material/AddCircleOutline';
import FlightIcon from '@mui/icons-material/Flight';

import { FlightCardHeader, FlightCardContent, Small } from "./styles";

import { setRotationFlight } from "../../store/slices/rotations";
import { hideFlight } from "../../store/slices/flights";

import { TURNAROUND_TIME_IN_SECONDS } from "../../constants";

const ERROR_MESSAGES = {
  invalid_departure: 'Invalid departure time',
  invalid_arrival: 'Invalid arrival time',
  invalid_origin: 'Flight origin is not the same as the last destination'
}

const FlightCard = ({ data, onError, ...props }) => {
  const dispatch = useDispatch();
  const selectedAircraft = useSelector(state => state.aircrafts.data.find(aircraft => aircraft.selected));
  const rotationFlights = useSelector(state => state.rotations.data);

  const validateFlight = flight => {
    const rotations = rotationFlights[selectedAircraft.ident];
    const lastRotationFlight = rotations && rotations[rotations.length - 1];

    if (!selectedAircraft) return false;
    if (!rotations) return false;


    const invalidOrigin =  lastRotationFlight ? flight.origin !== lastRotationFlight.destination : false;
    const invalidDeparture = rotations.some(rotationFlight => flight.departuretime >= rotationFlight.departuretime && flight.departuretime <= rotationFlight.arrivaltime + TURNAROUND_TIME_IN_SECONDS);
    const invalidArrival = rotations.some(rotationFlight => flight.arrivaltime >= rotationFlight.departuretime && flight.arrivaltime <= rotationFlight.departuretime);

    if (invalidDeparture) return ERROR_MESSAGES.invalid_departure;
    if (invalidArrival) return ERROR_MESSAGES.invalid_arrival;
    if (invalidOrigin) return ERROR_MESSAGES.invalid_origin;

    return false;
  }

  const handleClick = data => {
    if (!data || !selectedAircraft) return;
    const payload = { ...data, aircraftIdent: selectedAircraft.ident };
    const errorMessage = validateFlight(payload);

    if (errorMessage) {
      onError(errorMessage);
      return;
    }

    dispatch(setRotationFlight(payload));
    dispatch(hideFlight(data.ident));
  }

  return (
    <li {...props}>
      <Card sx={{ width: '100%' }}>
        <CardContent>
          <FlightCardHeader>
            <span>Flight: {data.ident}</span>
            <IconButton onClick={() => handleClick(data)}>
              <PlusIcon />
            </IconButton>
          </FlightCardHeader>
          <FlightCardContent>
            <div>
              <Small>org</Small>
              <span>{data.origin}</span>
              <span>{data.readable_departure}</span>
            </div>
            <FlightIcon sx={{ transform: 'rotate(90deg)' }} />
            <div>
              <Small>dest</Small>
              <span>{data.destination}</span>
              <span>{data.readable_arrival}</span>
            </div>
          </FlightCardContent>
        </CardContent>
      </Card>
    </li>
  )
}

export default FlightCard;