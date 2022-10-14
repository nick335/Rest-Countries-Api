import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchCountries } from "../store/features/country/countrySlice"
import Nav from "./nav"
import { Routes, Route, useLocation } from "react-router-dom"
import HomePage from "./HomePage"
import CountryDetails from "./countryDetails"
import { nanoid } from "nanoid"
import { AnimatePresence } from "framer-motion"

export default function PageTemplate(){ 

  const { darkTheme, url, countryData } = useSelector( state => state.country)
  const dispatch = useDispatch()
  const location = useLocation()

  const routeElements = countryData.map(each => {
    return <Route path={`/${each.name }`} key= {nanoid()}
    element = { <CountryDetails 
                flag = {each.flag}
                name = {each.name}
                population = {each.population}
                region = {each.region}
                capital = {each.capital}
                subregion = {each.subregion}
                nativeName = {each.nativeName}
                topleveldomain = {each.topLevelDomain}
                currencies = {each.currencies}
                languages = {each.languages}
                borders = { each.borders }
                key = { nanoid() }
                countryData = { countryData }
              />} />
  })

  React.useEffect(() => {
    dispatch(fetchCountries(url))
  }, [dispatch, url])
  return(
    <div className={`${darkTheme && 'dark' } bg-lightThemeBg dark:bg-darkThemeBg min-h-screen h-full w-full trans`}>
      <Nav />
      <AnimatePresence>
        <Routes location={ location } key={ location.pathname } >
          <Route path="/" element={ <HomePage /> } />
          {routeElements}
        </Routes>
      </AnimatePresence>
      
    </div>
  )
}