import { createSlice } from '@reduxjs/toolkit';

const flightsSlice = createSlice({
  name: 'flights',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    getFlightsStart(state) {
      state.loading = true;
    },
    getFlightsSuccess(state, action) {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    getFlightsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    hideFlight(state, action) {
      state.data = state.data.map(flight => flight.ident === action.payload ? { ...flight, hidden: true } : flight);
    },
    showFlight(state, action) {
      state.data = state.data.map(flight => flight.ident === action.payload ? { ...flight, hidden: false } : flight);
    },
  },
});

export const {
  getFlightsStart,
  getFlightsSuccess,
  getFlightsFailure,
  hideFlight,
  showFlight
} = flightsSlice.actions;

export default flightsSlice.reducer;