import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ContextAuth } from '../App'

export const Home = () => {
  const {auth, setAuth} = useContext(ContextAuth)
  function handleClick() {
    setAuth(false)
    localStorage.removeItem('token')
  }
  return (
    <div>
        {auth ? <button onClick={handleClick}>Logout</button> : <NavLink to="/login"><button>Login</button></NavLink>}
        <NavLink to="/dashboard">
            <button>К постам</button>
        </NavLink>
    </div>
  )
}
