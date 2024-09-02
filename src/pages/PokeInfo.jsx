import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import './styles/pokeInfo.css'

const PokeInfo = () => {

  const params = useParams()
  const [pokemon, getPokemon] = useFetch()

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${params.id}`
    getPokemon(url)
  }, [])

  function capFirstLetter(str) {
    if (typeof str === 'string' && str.length > 0) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return str;
  }

  return (
    <section className='pokeinfo_container'>
        <div className='header_container'>
          <figure className='header_img'>
            <img src="src\pages\images\pokedex.png" alt="" />
          </figure>
          <div className='red_line'></div>
          <div className='black_line'></div>
          <div className='black_dot'><div className='white_dot'><div className='last_dot'></div></div></div>
        </div>
      <section className='first_section'>

        <div className='pokeinfnam_container'>
          <figure className='pokeinfo_img'>
            <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
          </figure>

            <h2 className='pokeinfo_id'>#{pokemon?.id}</h2>
          <span className='pokeinfo_name'>
            <hr className='pokehr'/>
            <h2>{capFirstLetter(pokemon?.name)}</h2>
            <hr className='pokehr'/>
          </span>
          <ul className='wehe_stats'>
            <span>Weight </span><span>Height </span>
            <span>{pokemon?.weight}</span><span>{pokemon?.height}</span>
          </ul>
        </div>

        <div className='skilltype_container'>
          <div className='types_container'>
            <h3>Types</h3>
            <div className='types'>
              {
                pokemon?.types.map(type => (
                  <li key={type.type.url}> {type.type.name}</li>
                ))
              }
            </div>
            </div>
          <div className='skills_container'>
            <h3>Skills</h3>
            <div className='skills'>
              {
                pokemon?.abilities.map(skill=> (
                  <li key={skill.ability.url}>{skill.ability.name}</li>
                ))
              }
            </div>
          </div>
        </div>

        <div className='stats_container'>
          <div className='stats_title'>
            <h2>Stats</h2>
            <hr />
          </div>
          <ul className='pokeinfo_stats'>
            {
              pokemon?.stats.map(stat => (
                <li key={stat.stat.url}>
                  <div className='stat_name'>
                    <span>{stat.stat.name}</span>
                    <span>{stat.base_stat}/150</span>
                  </div>
                  <div className='stats_bar'><div style={{width:`${stat.base_stat/1.5}%`}} className='stats_prog'></div></div>
                </li>
              ))
            }
          </ul>
        </div>
      </section>
      <section className='second_section'>
          <h2 className='movement_title'>Movements</h2>
          <ul className='movements'>
            {
              pokemon?.moves.map(move => (
                <li key={move.move.url}>{move.move.name}</li>
              ))
            }
          </ul>
      </section>
    </section>
  )
}

export default PokeInfo