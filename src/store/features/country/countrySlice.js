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
  region: 'all',
  countryData: [],
  regionSelected: false,
  searching: false,
  searchInput: '',
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
      if(state.searching){
        state.searching = false
        state.searchInput = ''
      }
      const input = action.payload.target.value
      if( state.region !== input ){
        if(input === 'all'){
          state.regionSelected = false
          state.region = input
        }else{
          state.regionSelected= true
          state.region = input
        }
      }
    },
    handleSearch:(state, action) => {
      if(state.regionSelected){
        state.regionSelected = false
        state.region = 'all'
      }
      const input = action.payload.target.value
      state.searchInput = input

      if(state.searchInput){
        state.searching = true
      }else{
        state.searching = false
      }
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
export const { handleTheme, handleResize, selectRegion, handleSearch } = countrySlice.actions