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
  region: '',
  countryData: [],
  error: false,
  loading: false,
}

export const fetchCountries = createAsyncThunk('countrySlice/fetchCountries', (url) => {
  return axios
  .get(url)
  .then((response) => response.data)
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
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.pending, (state) => {
      state.error = false
      state.loading =  true 
    })
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      console.log(action.payload)
      state.loading = false
      state.countryData = action.payload
      state.error = ''
    })
    builder.addCase(fetchCountries.rejected, (state, action) => {
      state.loading = false
      state.error = true
    })
  }
})

export default countrySlice.reducer
export const { handleTheme, handleResize, selectRegion } = countrySlice.actions