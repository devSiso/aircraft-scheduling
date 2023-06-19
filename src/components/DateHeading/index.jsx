import React, { useEffect, useState } from "react";
import { format } from "date-fns";

import { IconButton, Typography } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import { DateHeadingWrapper } from "./styles";

const DateHeading = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleDateChange = (direction) => {
    const newDate = new Date(currentDate);
    
    if (direction === 'left') {
      newDate.setDate(newDate.getDate() - 1);
    } else {
      newDate.setDate(newDate.getDate() + 1);
    }

    setCurrentDate(newDate);
  }

  useEffect(() => {
    handleDateChange();
  }, [])

  return (
    <DateHeadingWrapper>
      <li>
        <IconButton onClick={() => handleDateChange('left')}>
          <ChevronLeftIcon />
        </IconButton>
      </li>
      <li>
        <Typography variant="h6" component="span">
          {format(currentDate, 'do MMM yyyy')}
        </Typography>
      </li>
      <li>
        <IconButton onClick={handleDateChange}>
          <ChevronRightIcon />
        </IconButton>
      </li>
    </DateHeadingWrapper>
  )
}

export default DateHeading;