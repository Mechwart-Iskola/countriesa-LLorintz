import { useEffect, useState } from "react"
import { countryType } from "../types/type"

export const fetchCountries = async()=>{
    try {
      const response = await fetch('https://restcountries.com/v3.1/all')
      if (!response.ok) {
       throw new Error
      }
      const data = await response.json()
      console.log(data)
      return data
    } catch (error) {
       console.log(error)
       return null
    }
   }

export const useFetchCountries = async ()=>{

    const [countries, setCountries] = useState<countryType[]>([])
    const [error, setError] = useState<string|null>('')
    const [loading, setLodaing] = useState(true)

    useEffect( ()=>{
        const Getcountries = async()=>{
            try {
                const data = await fetchCountries()
                if (data) {
                    setCountries(data)
                }else{
                    setError('Failed to load the data')
                }
            } catch (error) {
                setError('network error')
            }finally{
                setLodaing(false)
            }
            
        }
        Getcountries()
    },[])

    return {countries, error, loading};
}