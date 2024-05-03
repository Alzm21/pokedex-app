import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import useFetch from '../hooks/useFetch'
import PokeCard from '../components/pokedex/PokeCard'
import PokeSelect from './PokeSelect'
import './styles/pokedex.css'
import Pagination from '../components/Pagination'

const Pokedex = () => {

  const [pokemons, getPokemons, getType] = useFetch()
  const [selectValue, setSelectValue] = useState('')
  const [inputValue, setInputValue] = useState('')

  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 10
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = pokemons?.results.slice(indexOfFirstPost, indexOfLastPost);


  const trainer = useSelector((store) => store.trainer)

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  useEffect(() => {
    if (selectValue) {
      getType(selectValue)
    } else {
      const url = 'https://pokeapi.co/api/v2/pokemon?limit=100'
      getPokemons(url)
    }
  }, [selectValue])
  
  const textInput = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    setInputValue(textInput.current.value.toLowerCase().trim())
    textInput.current.value = ''

  }

  const pokeFilter = (poke) => {
    const perName = poke.name.includes(inputValue)
    return perName
  }
  
  return (
    <section className='pokedex_container'>
      <div className='header_container'>
        <figure className='header_img'>
          <img src="src\images\pokedex.png" alt="" />
        </figure>
        <div className='red_line'></div>
        <div className='black_line'></div>
        <div className='black_dot'><div className='white_dot'><div className='last_dot'></div></div></div>
        <h2 className='welcome_msg'> <span>Welcome {trainer}</span>, here you can find your favorite Pokemon!</h2>
      </div>

        <div className='head_container'>
          <form className='pokedex_form' onSubmit={handleSubmit}>
            <input ref={textInput} type="text" placeholder='Search a pokemon'/>
            <button>Search</button>
          </form>
        <PokeSelect
          setSelectValue={setSelectValue}
          />
        </div>


      <div className='pokecards__container'>
        {
          currentPosts?.map((poke) => (
            <PokeCard
              key={poke.url}
              url={poke.url}
            />
          )) //El encadenamiento opcional, debido a que el primer valor de pokemons es undefined
        }
      </div>
        {
          <Pagination 
            totalPosts={pokemons?.results.length}
            postsPerPage={postsPerPage}
            paginate={paginate}
          /> 
        } 
    </section>
  )
}

export default Pokedex