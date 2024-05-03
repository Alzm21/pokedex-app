import React from 'react'
import { useSelector } from 'react-redux'
import Pokedex from './Pokedex'
import { Navigate, Outlet } from 'react-router-dom'


const ProtectedRoutes = ({}) => {

  const trainer = useSelector((store) => store.trainer)

  console.log(trainer)

  if (trainer.length > 2 ) {
    return (
      <div>
        <Outlet/>
      </div>
    )
  } else {
    return <Navigate to={'/'}/>
  }
}

export default ProtectedRoutes