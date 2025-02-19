
import Usercard from "../../components/usercard/Usercard"
import { useFetchCountries } from "../../api/api"
const Allcountries = () => {

  const {countries} = useFetchCountries()

  

  return (
    <div>Allcountries
      <Usercard></Usercard>
    </div>
  )
}

export default Allcountries