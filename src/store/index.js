import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import flightsReducer from './slices/flights'
import aircraftsReducer from './slices/aircrafts'
import rotationsReducer from './slices/rotations'

const persistedRotations = persistReducer({
  key: '@alphaflights/rotations',
  storage,
}, rotationsReducer)

const persistedFlights = persistReducer({ key: '@alphaflights/flights', storage }, flightsReducer)

export const store = configureStore({
  reducer: {
    flights: persistedFlights,
    aircrafts: aircraftsReducer,
    rotations: persistedRotations,
  },
  devTools: true,
  middleware: [thunk]
})

export const persistor = persistStore(store);