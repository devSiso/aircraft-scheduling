import { createSlice } from '@reduxjs/toolkit';

const rotationsSlice = createSlice({
  name: 'rotations',
  initialState: {
    data: {},
  },
  reducers: {
    setRotationFlight(state, action) {
      const { aircraftIdent } = action.payload;
      state.data = {
        ...state.data,
        [aircraftIdent]: [
          ...(state.data[aircraftIdent] || []),
          action.payload
        ].sort((a, b) => a.departuretime - b.departuretime)
      };

    },
    removeRotationFlight(state, action) {
      state.data = Object.keys(state.data).reduce((acc, aircraftIdent) => {
        acc[aircraftIdent] = state.data[aircraftIdent].filter(flight => flight.ident !== action.payload)
        return acc;
      }, {});
    },
  }
});

export const {
  setRotationFlight,
  removeRotationFlight,
} = rotationsSlice.actions;

export default rotationsSlice.reducer;