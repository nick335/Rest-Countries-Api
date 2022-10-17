import { Link } from "react-router-dom"
import { motion } from "framer-motion"


export default function Country(props){
  const routeName = props.name.replace(/ /g,'')
  const population = props.population.toLocaleString()
  return(
    <motion.div whileHover={{ scale:1.1 }}  className="trans bg-neutralText w-3/4 mx-auto shadow-lg rounded-md mb-14 dark:bg-darkThemeHeader sm:w-64 sm:mx-0">
      <div className="w-full">
        <Link to={`/${routeName}`}>
          <img src={ props.flag } alt="country-img" className="rounded-t-md h-44 w-full object-cover cursor-pointer"/>
        </Link>
      </div>
      <div className="pt-7 pl-6 pb-10">
        <div className="pb-3">
          <Link to={`/${routeName}`}>
            <h3 className="font-extrabold text-lg text-lightThemeText dark:text-neutralText cursor-pointer trans">{props.name}</h3>
          </Link>
        </div>
        <div className="flex items-end pb-0.5">
          <h4 className="font-semibold text-base text-lightThemeText dark:text-neutralText trans ">Population:</h4>
          <p className="text-sm font-light pl-1 trans text-lightThemeText dark:text-neutralText">{ population }</p>
        </div>
        <div className=" flex items-end pb-0.5">
          <h4 className="font-semibold text-base text-lightThemeText dark:text-neutralText trans">Region:</h4>
          <p className="text-sm font-light pl-1 text-lightThemeText dark:text-neutralText trans">{ props.region }</p>
        </div>
        <div className="flex items-end pb-0.5">
          <h4 className="font-semibold text-base text-lightThemeText dark:text-neutralText trans ">Capital:</h4>
          <p className="text-sm font-light pl-1 text-lightThemeText dark:text-neutralText trans">{ props.capital }</p>
        </div>
      </div>
    </motion.div>
  )
}