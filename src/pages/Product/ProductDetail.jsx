import React, { useEffect, useState, memo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ProductDetail = memo(({func}) => {
  const [data, setData] = useState({})
  const [error, setError] = useState('')
    const {id} = useParams()
    const navigate = useNavigate()
    useEffect(() => {
      let isMount = true
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((result) => {
          if(isMount) {
            setData(result)
          }  
        })
        .catch((error) => {
          setError('Нет данного товара')
        })

      return () => {
        isMount = false
      }
    }, [id])

    if(error !== '') {
      return (
        <div>{error}</div>
      )
    }

  return (
    <>
    <h1>Товар под номером: {id}</h1>
    <div>
      <h1>{data.title}</h1>
      <h3>На складе: {data.rating?.count} штук</h3>
      <img src={data.image} alt={data.category} />
      <h2>Цена: {data.price} $</h2>
      <p>{data.description}</p>
    </div>
    <button onClick={() => func()}>CLICKS</button>
    <button onClick={() => navigate(-1)}>Назад</button>
    </>
  )
})

export default ProductDetail