import axios from "axios"
import { useState } from "react"

const useFetch = () => {
    const [apiData, setApiData] = useState()
    const getApi = (url) => {
        axios.get(url)
            .then(res => {
                if (res.data && res.data) {
                    setApiData(res.data)
                } else {
                    console.log('Unexpected response format:', res.data)
                    
                }
            })
            .catch(err => {
                console.error('Error fetching data:', err)
               
            })
    }
    const getType= (url) => {
        axios.get(url)
            .then(res => setApiData({
                results: res.data.pokemon.map(poke => poke.pokemon)
            }))
            .catch(err => {
                console.error('Error fetching data:', err)

            })
            
    }
    return [apiData, getApi, getType]
}

export default useFetch