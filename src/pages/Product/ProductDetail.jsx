import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const ProductDetail = () => {
    const {id} = useParams()
    const navigate = useNavigate()
  return (
    <>
    <h1>Товар под номером: {id}</h1>
    <button onClick={() => navigate(-1)}>Назад</button>
    </>
  )
}


export default ProductDetail