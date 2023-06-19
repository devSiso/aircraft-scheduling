import React from 'react';
import { Times } from './styles'

const TimeRuler = () => {
  const times = [
    '00:00',
    '02:00',
    '04:00',
    '06:00',
    '08:00',
    '10:00',
    '12:00',
    '14:00',
    '16:00',
    '18:00',
    '20:00',
    '22:00',
    '24:00',
  ]

  return (
    <Times>
      {times.map(time => (
        <li key={time}>{time}</li>
      ))}
    </Times>
  )
}

export default TimeRuler;