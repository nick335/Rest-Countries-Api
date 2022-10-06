import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchCountries } from "../store/features/country/countrySlice"
import Nav from "./nav"
import HomePage from "./HomePage"

export default function PageTemplate(){ 

  const { darkTheme, url } = useSelector( state => state.country)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchCountries(url))
  }, [dispatch, url])
  return(
    <div className={`${darkTheme && 'dark' } bg-lightThemeBg dark:bg-darkThemeBg  h-screen w-screen trans`}>
      <Nav />
      <HomePage />
    </div>
  )
}