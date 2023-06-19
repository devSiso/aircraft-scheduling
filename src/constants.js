export const DAY_IN_SECONDS = 86400;

export const TURNAROUND_TIME_IN_SECONDS = 1200; // 20 minutes

export const AIRCRAFT_STATUS = {
  ground: 'ground',
  scheduled: 'scheduled',
  turnaround: 'turnaround',
}

export const AIRCRAFT_STATUS_COLOR = {
  [AIRCRAFT_STATUS.ground]: '#eee',
  [AIRCRAFT_STATUS.scheduled]: '#009F71',
  [AIRCRAFT_STATUS.turnaround]: '#9C6FEB',
}