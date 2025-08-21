import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { decrement, increment, reset } from '../store/slices/counterSlice'

export const Clicker = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()
    
  return (
    <>
        <h1>ЧИСЛО: {count}</h1>
        <button onClick={() => dispatch(increment())}>Добавить +1</button>
        <button onClick={() => dispatch(decrement())}>Убавить -1</button>
        <button onClick={() => dispatch(reset())}>Ресет</button>
        <Link to="/"><button>ДОМОЙ</button></Link>
    </>
  )
}
