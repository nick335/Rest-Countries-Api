import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons"
import { Link, useNavigate } from "react-router-dom"
import { nanoid } from "nanoid"
import { motion } from "framer-motion"


export default function CountryDetails(props){
  const navigate = useNavigate();
  const Languages = props.languages
  //gettting the languages from Languages object
  let renderLanguages = []
  for (let i = 0; i < Languages.length; i++) {
    renderLanguages.push(Languages[i].name)
    
  }
  if (renderLanguages.length === 0 ){
    return 
  }
  // giving the languages space and comma
  const langElement = renderLanguages.map(each => {
    const langlenth= renderLanguages.length
    const pos = renderLanguages.indexOf(each)
    if ( pos === langlenth - 1 ){
      return `${each}`
    }else{
      return `${each},  `
    }
  })
  //gettting curreinces name
  const currencies = props.currencies[0].name
  //getting borders alphacode 
  const countryData = props.countryData
  const borders = props.borders
// getting name of border using aplha3code in the countryData Api
  const borderelements = []
  if(borders){
   const borderelement = countryData.map(each => {
    const routeName = each.name.replace(/ /g,'')
    const potentialBorder = each.alpha3Code
    if( borders.includes(potentialBorder) ){
      return <Link to = {`/${routeName}`} key={ nanoid() } > <motion.h4 initial={{ y:30, opacity:0 }} whileInView ={{ y:0, opacity:1 }} transition={{ duration:0.4, delay:0.4 }} viewport = {{ once: true }} className="trans bg-neutralText text-lightThemeText dark:text-neutralText dark:bg-darkThemeHeader shadow-1g px-6 py-1.5  rounded-md text-sm font-light w-fit mr-1.5 mb-2 " >{ each.name }</motion.h4> </Link>
    }

    return null;
  }) 
  borderelements.push(borderelement)
  
  }
  
  //  adding commas to population number
  const population = props.population.toLocaleString()

  //navigating
  return (
    <motion.div
        initial={{ opacity:0 }}
        animate ={{ opacity:1}}
        exit = {{ opacity:0 }}
    >
        <section className="mx-auto w-5/6 mt-8 lg:w-full lg:mx-0 lg:px-14 xl:px-20">
          <div className="w-fit">
              <motion.h3 initial={{ y:50, opacity:0 }} whileInView ={{ y:0, opacity:1 }} transition = {{ duration: 0.5}} viewport = {{ once: true }} onClick = {() => navigate(-1)} className="trans bg-neutralText text-lightThemeText dark:text-neutralText dark:bg-darkThemeHeader shadow-md px-6 py-1 pt-1.5 rounded-md text-base font-semibold cursor-pointer"><FontAwesomeIcon icon={ faArrowLeftLong } className='mr-1.5' /> Back</motion.h3>
          </div>
          <div className="mt-12 lg:flex lg:items-center">
            <div className="lg:w-1/2">
              <motion.img initial = {{ scale:0, opacity:0 }} whileInView = {{ scale:1, opacity:1 }} transition={{ duration:0.5 }} alt="country-big-flag" src={props.flag} className='lg:h-[340px] lg:w-5/6 object-cover h-52'/>
            </div>
            <div className="mt-7 lg:w-1/2 lg:mt-0">
              <div className="lg:mb-3">
                <motion.h3 initial={{ y:-50, opacity:0 }} whileInView={{ y:0, opacity:1 }} transition = {{ duration: 0.5}} className="trans text-lg font-extrabold text-lightThemeText dark:text-neutralText  lg:text-xl">{props.name}</motion.h3>
              </div>
              <div className="lg:flex w-full lg:justify-between overflow-hidden "> 
                <motion.div initial= {{ x: -130, opacity:0 }} whileInView = {{ x:0, opacity:1 }} transition = {{ duration: 0.5, delay:0.6}} viewport = {{ once: true }}  className="mt-4">
                    <div className="flex mb-2.5 items-end">
                      <h3 className="trans mr-1.5 font-semibold text-base  text-lightThemeText dark:text-neutralText " >Native Name:</h3>
                      <h4 className='trans font-light text-base text-lightThemeText dark:text-neutralText '>{props.nativeName}</h4>
                    </div>
                    <div className="flex mb-2.5 items-end">
                      <h3 className="trans mr-1.5 font-semibold text-base  text-lightThemeText dark:text-neutralText " >Population:</h3>
                      <h4 className='trans font-light text-base text-lightThemeText dark:text-neutralText '>{ population }</h4>
                    </div>
                    <div className="flex mb-2.5 items-end">
                      <h3 className="trans mr-1.5 font-semibold text-base  text-lightThemeText dark:text-neutralText " >Region:</h3>
                      <h4 className='trans font-light text-base text-lightThemeText dark:text-neutralText '>{props.region}</h4>
                    </div>
                    <div className="flex mb-2.5 items-end">
                      <h3 className="trans mr-1.5 font-semibold text-base  text-lightThemeText dark:text-neutralText " >Sub Region:</h3>
                      <h4 className='trans font-light text-base text-lightThemeText dark:text-neutralText '>{props.subregion}</h4>
                    </div>
                    <div className="flex mb-2.5 items-end">
                      <h3 className="trans mr-1.5 font-semibold text-base  text-lightThemeText dark:text-neutralText " >Capital:</h3>
                      <h4 className='trans font-light text-base text-lightThemeText dark:text-neutralText '>{props.capital}</h4>
                    </div>
                </motion.div>
                <motion.div className="mt-11 lg:mt-2.5" initial = {{ x:130, opacity:0 }} whileInView = {{ x:0, opacity:1 }} transition = {{ duration: 0.5, delay:0.6}} viewport = {{ once: true }} >
                  <div className="flex mb-2.5 items-end">
                    <h3 className="trans mr-1.5 font-semibold text-base  text-lightThemeText dark:text-neutralText " >Top Level Domain:</h3>
                    <h4 className='trans font-light text-base text-lightThemeText dark:text-neutralText '>{props.topleveldomain}</h4>
                  </div>
                  <div className="flex mb-2.5 items-end">
                    <h3 className="trans mr-1.5 font-semibold text-base  text-lightThemeText dark:text-neutralText " >Currencies:</h3>
                    <h4 className='trans font-light text-base text-lightThemeText dark:text-neutralText '>{ currencies }</h4>
                  </div>
                  <div className="flex mb-2.5 items-end">
                    <h3 className="trans mr-1.5 font-semibold text-base  text-lightThemeText dark:text-neutralText " >Languages:</h3>
                    <h4 className='trans font-light text-base text-lightThemeText dark:text-neutralText '>{ langElement } </h4>
                  </div>
                </motion.div>
              </div>
              <div className="mt-6 lg:flex lg:flex-wrap lg:items-center overflow-hidden">
                <motion.h3 initial={{ y:-15, opacity:0 }} whileInView={{ y:0, opacity:1 }} transition={{ duration: 0.5 }} viewport = {{ once: true }} className="trans font-semibold text-lightThemeText dark:text-neutralText lg:mr-3"  >Border Countries:</motion.h3>
                <div className=" flex flex-wrap mt-2">
                  { borderelements }
                </div>
              <div>

                </div>
              </div>
            </div>
          </div>
      </section>
    </motion.div>
   
  )
}