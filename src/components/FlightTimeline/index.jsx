import React from "react";
import { useSelector } from "react-redux";
import TimeRuler from './TimeRuler'
import LegendItem from './LegendItem'

import { ChartBar, ChartValue, Legend } from './styles'
import { Tooltip, Typography } from "@mui/material";

import { DAY_IN_SECONDS, TURNAROUND_TIME_IN_SECONDS, AIRCRAFT_STATUS, AIRCRAFT_STATUS_COLOR as colors } from "../../constants";

const toPercent = time => (time * 100 / DAY_IN_SECONDS).toFixed(2)

const FlightTimeline = ({ aircraft }) => {
  const rotationList = useSelector(state => state.rotations.data[aircraft.ident]);

  if (!rotationList) return null;

  const timelineData = rotationList.reduce((acc, rotation, rotationIndex, rotations) => {
    const { departuretime, arrivaltime } = rotation;

    const isLastRotationStatus = rotationIndex === rotations.length - 1

    const scheduledValue = [AIRCRAFT_STATUS.scheduled, toPercent(arrivaltime - departuretime)]

    const groundLeft = rotationIndex === 0 && toPercent(departuretime)

    const groundRight = (isLastRotationStatus
      ? toPercent(DAY_IN_SECONDS - arrivaltime)
      : toPercent(rotations[rotationIndex + 1].departuretime - arrivaltime - TURNAROUND_TIME_IN_SECONDS)
    )

    return [...acc,
    ...(groundLeft ? [[AIRCRAFT_STATUS.ground, groundLeft]] : []),
      scheduledValue,
    ...(isLastRotationStatus ? [] : [[AIRCRAFT_STATUS.turnaround, toPercent(TURNAROUND_TIME_IN_SECONDS)]]),
    ...(groundRight ? [[AIRCRAFT_STATUS.ground, groundRight]] : [])]
  }, [])

  if (!timelineData.length) return null;

  return (
    <>
      <Typography variant="h6" sx={{ mb: 1 }}>
        {aircraft.ident}'s Rotation
      </Typography>
      <TimeRuler />
      <ChartBar>
        {timelineData.map((item, i) => {
          const [status, value] = item;

          return (
            <Tooltip key={i} title={`${value}%`}>
              <ChartValue style={{ width: `${value}%`, backgroundColor: colors[status] }} />
            </Tooltip>
          )
        })}
      </ChartBar>
      <Legend style={{ justifyContent: 'flex-end' }}>
        <LegendItem color={colors[AIRCRAFT_STATUS.ground]}>Ground</LegendItem>
        <LegendItem color={colors[AIRCRAFT_STATUS.scheduled]}>Scheduled</LegendItem>
        <LegendItem color={colors[AIRCRAFT_STATUS.turnaround]}>Turnaround</LegendItem>
      </Legend>
    </>
  )
}

export default FlightTimeline;
