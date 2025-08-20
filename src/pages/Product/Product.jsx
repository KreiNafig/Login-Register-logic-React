import React, { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'

export const Product = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    const q = searchParams.get('q') || ''
    
    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((data) => setProducts(data))
    }, [])

    function filterProduct(type = '') {
      // eslint-disable-next-line default-case
      switch(type) {
        case 'asd': {
          const filterProduct = [...products].sort((a, b) => a.price - b.price)
          setProducts(filterProduct)
          break;
          }          
        case 'dsa': {
          const filterProduct = [...products].sort((a, b) => b.price - a.price)
          setProducts(filterProduct)
          break
        }
      }
    }


  const items = useMemo(() => {
    if(products.length === 0) return []
    console.log('перефильтрация')
    return products?.filter((e) => e.title.toLowerCase().includes(q.toLowerCase()))
  }, [products, q])
  
  return (
    <div>
        <input value={q} onChange={(e) => setSearchParams({...searchParams, q: e.target.value})} placeholder='Введите название' />
        <button onClick={() => filterProduct('asd')}>Минимальная - Максимальная</button>
        <button onClick={() => filterProduct('dsa')}>Максимальная - Минимальная</button>
        <button onClick={() => navigate('/')}>Вернуться назад</button>
        {items?.map((e) => {
            return(
                <div key={e.id}>
                    <h1>{e.title}</h1>
                    <img src={e.image} alt={e.category}/>
                    <p>{e.description}</p>
                    <h3>{e.price} $</h3>
                    <Link to={`${e.id}`}><button>Узнать подробнее</button></Link>
                </div>
            )
        })}
    </div>
  )
}

export default Product
