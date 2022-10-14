import Countries from "./countries"
import Search from "./Search"
import { motion } from "framer-motion"

export default function HomePage(){
  return(
    <motion.div
        initial={{ opacity:0 }}
        animate ={{ opacity:1 }}
        exit = {{ opacity:0 }}
    >
      <main className="overflow-x-hidden">
        <Search />
        <Countries />
      </main>
    </motion.div>
    
  )
}