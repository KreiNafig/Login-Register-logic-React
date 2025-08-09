import React, { useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
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
        <Link to="/dashboard">
            <button>К постам</button>
        </Link>
        <Link to="/products"><button>К продуктам</button></Link>
    </div>
  )
}

export default Home