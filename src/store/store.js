import { configureStore } from '@reduxjs/toolkit'
import countrySlice from './features/country/countrySlice'
import logger from "redux-logger";
const middleWares = [logger];

export  const store = configureStore({
  reducer: {
    country: countrySlice,
    middleware: middleWares,
  },
})