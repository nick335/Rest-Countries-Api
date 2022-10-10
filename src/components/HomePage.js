import Countries from "./countries"
import Search from "./Search"

export default function HomePage(){
  return(
    <main className="overflow-x-hidden">
      <Search />
      <Countries />
    </main>
  )
}