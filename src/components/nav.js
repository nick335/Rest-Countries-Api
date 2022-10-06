import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useSelector, useDispatch } from "react-redux"
import { handleTheme } from "../store/features/country/countrySlice"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"


export default function Nav(){
  const { darkTheme } = useSelector( state => state.country)
  const dispatch = useDispatch()
  return(
    <nav className="flex justify-between items-center px-4 py-6 bg-neutralText shadow-md dark:bg-darkThemeHeader lg:px-14 xl:px-20 sm:px-10 trans">
      <div>
        <h2 className="text-lightThemeText font-extrabold dark:text-neutralText trans">Where in the world?</h2>
      </div>
      <div>
        <h3 className="text-lightThemeText font-semibold text-center cursor-pointer dark:text-neutralText trans" onClick={ () => dispatch(handleTheme()) }><span className="pr-2"><FontAwesomeIcon icon={
          darkTheme ? faSun : faMoon
        } /></span>{
          darkTheme ? 'Light Mode' : 'Dark Mode'
        }</h3>
      </div>
    </nav>
  )
}