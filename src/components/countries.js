import Country from "./country"
import { useSelector } from "react-redux"
import { nanoid } from "nanoid"
import CountrySkeleton from "./countrySkeleton"



export default function Countries(){
  const { countryData, loading, region, regionSelected, searchInput, searching  } = useSelector(state => state.country)

  const searchedCountries = countryData.map(each => {
    const name = each.name.toLowerCase()
    const input = searchInput.toLowerCase()

    if( name.includes(input) ){
      return <Country 
                flag = {each.flag}
                name = {each.name}
                population = {each.population}
                region = {each.region}
                capital = {each.capital}
                key = { nanoid() }
              />
    }

    return null;
  })

  const selectedRegionCountries = countryData.map(each => {
    if(each.region === region){
      return <Country 
                flag = {each.flag}
                name = {each.name}
                population = {each.population}
                region = {each.region}
                capital = {each.capital}
                key = { nanoid() }
              />
    }

    return null;
  })

  const countries = countryData.map(each => {
    return <Country 
              flag = {each.flag}
              name = {each.name}
              population = {each.population}
              region = {each.region}
              capital = {each.capital}
              key = { nanoid() }
            />
  })
  let countryskeleton = []
  for (let i = 0; i < 250; i++) {
    countryskeleton.push( <CountrySkeleton key={ nanoid() } /> )
    
  }
  return(
    <section className="mt-12 pb-5 sm:w-11/12  sm:mx-auto lg:w-auto lg:mx-14 xl:mx-20">
      <div className="sm:flex flex-wrap sm:justify-around  lg:justify-between ">
        { loading ? countryskeleton : 
          regionSelected ? selectedRegionCountries :
          searching ? searchedCountries :
        countries }
      </div>
    </section>
  )
}