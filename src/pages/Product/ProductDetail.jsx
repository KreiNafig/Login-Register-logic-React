import React, { memo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetProductQuery } from '../../store/slices/productSlice'

const ProductDetail = memo(({func}) => {
    const {id} = useParams()
    const {data} = useGetProductQuery(id)
    const navigate = useNavigate()

  return (
    <>
    <h1>Товар под номером: {id}</h1>
    <div>
      <h1>{data?.title}</h1>
      <h3>На складе: {data?.rating?.count} штук</h3>
      <img src={data?.image} alt={data?.category} />
      <h2>Цена: {data?.price} $</h2>
      <p>{data?.description}</p>
    </div>
    <button onClick={() => func()}>CLICKS</button>
    <button onClick={() => navigate(-1)}>Назад</button>
    </>
  )
})

export default ProductDetail