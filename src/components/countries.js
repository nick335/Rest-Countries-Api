import Country from "./country"
import { useSelector } from "react-redux"
import { nanoid } from "nanoid"
import CountrySkeleton from "./countrySkeleton"



export default function Countries(){
  const { countryData, loading  } = useSelector(state => state.country)

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
    countryskeleton.push( <CountrySkeleton /> )
    
  }
  return(
    <section className="mt-12 pb-5 sm:w-11/12  sm:mx-auto lg:w-fit lg:mx-14 xl:mx-20">
      <div className="sm:flex flex-wrap sm:justify-around lg:justify-between ">
        { loading ? countryskeleton : countries }
      </div>
    </section>
  )
}