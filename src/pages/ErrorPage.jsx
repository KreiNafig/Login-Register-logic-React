import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ErrorPage = () => {
    const navigate = useNavigate()
  return (
    <>
    <h1>Данной странице не существует: 404</h1>
    <button onClick={() => navigate(-1)}>Вернуться назад</button>
    </>
  )
}


export default ErrorPage