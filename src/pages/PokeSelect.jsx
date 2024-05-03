import React, { useEffect, useRef } from 'react'
import useFetch from '../hooks/useFetch'
import './styles/pokeSelect.css'

const PokeSelect = ({setSelectValue}) => {

    const [types, getTypes] = useFetch()

    useEffect(() => {
        const url = 'https://pokeapi.co/api/v2/type/'
        getTypes(url)
    }, [])

    const selectOption = useRef()

    const handleChange = () => {
        setSelectValue(selectOption.current.value)
    }
    

  return (
    <div className='select_container'>
        <select className='select_box' onChange={handleChange} ref={selectOption}>
            <option value="">All pokemons</option>

            {
                types?.results.map(type => (
                    <option key={type.url} value={type.url}>{type.name}</option>
                ))
            }
        </select>
    </div>
  )
}

export default PokeSelect