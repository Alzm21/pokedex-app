import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { setTrainer } from '../store/slices/trainer.slice'
import { useNavigate } from 'react-router-dom'
import './styles/homepage.css'

const HomePage = () => {

    const textInput = useRef()

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(setTrainer(textInput.current.value.trim()))
        textInput.current.value = ''
        navigate('/pokedex')
    }


  return (
    <div className='homepage_container'>
      <figure>
        <img src="src\images\pokedex.png" alt="pokedex.png" />
      </figure>
        <h1 className='homepage_title'>Hello trainer!</h1>
        <h3 className='homepage_subtitle'>If you want to start, give me your name:</h3>
        <form className='homepage_form' onSubmit={handleSubmit}>
            <input ref={textInput} type="text" placeholder='Your name...'/>
            <button>Start</button>
        </form>
        <div className='color_container'>
          <div className='dotblack'></div>
          <div className='circlewhite'></div>
          <div className='lowred'></div>
          <div className='circleblack'></div>
          <div className='lowblack'></div>
        </div>
    </div>
  )
}

export default HomePage