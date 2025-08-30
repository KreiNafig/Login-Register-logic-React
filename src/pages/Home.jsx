import React, { useContext, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { ContextAuth } from '../App'

export const Home = () => {
  const {auth, setAuth} = useContext(ContextAuth)
  const [visible, setVisible] = useState(true)
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
        <Link to="/clicker"><button>К кликеру</button></Link>
        <button name="visible" onClick={() => setVisible(!visible)}>Показать скрытый текст</button>
        <div style={visible ? {display: "none"} : {display: "block"}}>Hello world!</div>
    </div>
  )
}

export default Home