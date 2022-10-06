import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import * as React from 'react';

import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useDispatch, useSelector } from "react-redux";
import Select from '@mui/material/Select';
import { handleResize, selectRegion } from "../store/features/country/countrySlice";


const ITEM_HEIGHT = 59;
const ITEM_PADDING_TOP = 8;

const names = [
  'Africa',
  'America',
  'Asia',
  'Europe',
  'Ocenia',
];


export default function Search(){
  const dispatch = useDispatch()
  const {width, region, darkTheme } = useSelector(state => state.country)

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 150,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: darkTheme ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)',
        color: darkTheme ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)',
      },
    },
  };

  React.useEffect(() => {
     window.addEventListener('resize', dispatch(handleResize()));
    return () => {
      window.removeEventListener('resize', dispatch(handleResize()));
    };
  }, [dispatch]);

  return(
    <section className="flex flex-col w-11/12 mx-auto lg:w-full lg:px-14 xl:px-20 lg:flex-row lg:mx-0 lg:justify-between lg:items-center lg:mt-12">
      <div className="flex bg-neutralText dark:bg-darkThemeHeader w-full mx-auto mt-6 mb-7 px-6 py-3 shadow rounded-md lg:mt-0 lg:mb-0 lg:w-2/6 lg:mx-0 lg:py-3.5 trans">
        <div><FontAwesomeIcon  icon={ faMagnifyingGlass } className='mr-5 text-lightInput dark:text-neutralText cursor-pointer trans'/></div>
        <input placeholder="search for country" className="border-none outline-none w-full dark:bg-darkThemeHeader dark:text-neutralText dark:placeholder-neutralText trans"/>
      </div>
      <div className="bg-neutralText dark:bg-darkThemeHeader w-3/5 lg:w-1/5 trans">
        <FormControl fullWidth  size={`${width.innerWidth > 1024 ? '' : 'small'}`}>
          <Select
            displayEmpty
            value={region}
            onChange={(event) => dispatch(selectRegion(event)) }
            input={<OutlinedInput />}
            MenuProps={MenuProps}
            inputProps={{ 'aria-label': 'Without label',
                            backgroundColor: 'red',
                            border: 'none',
          }}
          >
            <MenuItem disabled value="">
              <em>Filter by Region</em>
            </MenuItem>
            {names.map((name) => (
              <MenuItem
                key={name}
                value={name}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </section>
  )
}