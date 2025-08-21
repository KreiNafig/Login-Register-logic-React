import React, { useContext } from 'react'
import { ContextAuth } from '../App'
import { useSelector } from 'react-redux'

export const Dashboard = () => {
  const count = useSelector((state) => state.counter.count)
  const {setAuth} = useContext(ContextAuth)
    function handleClick() {
      setAuth(false)
      localStorage.removeItem('token')
    }
  return (
    <>
    <div>ПОСТЫ: {count}</div>
    <button onClick={handleClick}>Logout</button>
    </>
  )
}


export default Dashboard