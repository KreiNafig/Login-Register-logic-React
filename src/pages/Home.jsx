import React from 'react'
import { NavLink } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
        <NavLink to="/login">
            <button>Авторизация</button>
        </NavLink>
        <NavLink to="/dashboard">
            <button>К постам</button>
        </NavLink>
    </div>
  )
}
