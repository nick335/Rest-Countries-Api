import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}

const initialState = {
  darkTheme: false,
  url: 'https://restcountries.com/v2/all',
  width: getWindowSize(),
  region: ''
}

export const fetchCountries = createAsyncThunk('countrySlice/fetchCountries', (url) => {
  return axios
  .get(url)
  .then((response) => console.log(response))
} )

export const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    handleTheme: (state) => {
      state.darkTheme = !state.darkTheme

      if(state.darkTheme === true){
        document.documentElement.classList.add('dark')
      }else {
        document.documentElement.classList.remove('dark')
      }
    },
    handleResize: (state) => {
      state.width = getWindowSize()
    },
    selectRegion: (state, action) => {
      const input = action.payload.target.value
      state.region = input
    }
  }
})

export default countrySlice.reducer
export const { handleTheme, handleResize, selectRegion } = countrySlice.actions