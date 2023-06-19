import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  Typography,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";

import MinusIcon from '@mui/icons-material/RemoveCircleOutline';

import { removeRotationFlight } from "../../store/slices/rotations";
import { showFlight } from "../../store/slices/flights";

import { EmptyBox } from "./styles";

const RotationList = ({ selectedAircraft }) => {
  const dispatch = useDispatch();
  const rotationData = useSelector(state => state.rotations.data[selectedAircraft.ident]);

  const handleClick = data => {
    if (!data) return;

    dispatch(removeRotationFlight(data));
    dispatch(showFlight(data))
  }

  if (!rotationData || !rotationData.length) return (
    <EmptyBox>
      <Typography variant="h6">
        No rotations for this aircraft
      </Typography>
      <Typography variant="body1">
        Add a flight to this aircraft to create a rotation
      </Typography>
    </EmptyBox>
  );

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Action</TableCell>
            <TableCell>Flight</TableCell>
            <TableCell>Origin</TableCell>
            <TableCell>Departure Time</TableCell>
            <TableCell>Destination</TableCell>
            <TableCell>Arrival Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rotationData.map(flight => (
            <TableRow key={flight.ident}>
              <TableCell>
                <IconButton onClick={() => handleClick(flight.ident)}>
                  <MinusIcon />
                </IconButton>
              </TableCell>
              <TableCell>{flight.ident}</TableCell>
              <TableCell>{flight.origin}</TableCell>
              <TableCell>{flight.readable_departure}</TableCell>
              <TableCell>{flight.destination}</TableCell>
              <TableCell>{flight.readable_arrival}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RotationList;
