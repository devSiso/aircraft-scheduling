import { createSlice } from '@reduxjs/toolkit';

const aircraftsSlice = createSlice({
  name: 'aircrafts',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    getAircraftsStart(state) {
      state.loading = true;
    },
    getAircraftsSuccess(state, action) {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    getAircraftsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    selectAircraft(state, action) {
      state.data = state.data.map(aircraft => {
        let newData = { ...aircraft };
        aircraft.ident === action.payload.ident ? newData.selected = true : newData.selected = false;
        return newData;
      });
    },
    setAircraftUsage(state, action) {
      state.data = state.data.map(aircraft => {
        let newData = { ...aircraft };

        if (aircraft.ident === action.payload.ident) {
          newData.usage = action.payload.usage;
        }
        return newData;
      });
    }
  },
});

export const {
  getAircraftsStart,
  getAircraftsSuccess,
  getAircraftsFailure,
  selectAircraft,
  setAircraftUsage
} = aircraftsSlice.actions;

export default aircraftsSlice.reducer;
export * from './action-types';	