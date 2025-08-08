import React, { useContext } from 'react'
import { ContextAuth } from '../App'
import { useNavigate } from 'react-router-dom'

export const Dashboard = () => {
  const {setAuth} = useContext(ContextAuth)
    function handleClick() {
      setAuth(false)
      localStorage.removeItem('token')
    }
  return (
    <>
    <div>ПОСТЫ: 0</div>
    <button onClick={handleClick}>Logout</button>
    </>
  )
}
