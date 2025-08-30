import React, { useMemo } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useGetProductsQuery } from '../../store/slices/productSlice'

export const Product = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const { data, isLoading, isError, error } = useGetProductsQuery()
    const navigate = useNavigate()
    const q = searchParams.get('q') || ''
    

    function filterProduct(type = '') {
      // eslint-disable-next-line default-case
      switch(type) {
        case 'asd': {
          items = [...data]?.sort((a, b) => a.price - b.price)
          break;
          }          
        case 'dsa': {
          items = [...data]?.sort((a, b) => b.price - a.price)
          break
        }
      }
    }


  let items = useMemo(() => {
    if(data?.length === 0) return []
    console.log('перефильтрация')
    return data?.filter((e) => e.title.toLowerCase().includes(q.toLowerCase()))
  }, [data, q])
  
  return (
    <div>
        <input value={q} onChange={(e) => setSearchParams({...searchParams, q: e.target.value})} placeholder='Введите название' />
        <button disabled={(isError || isLoading)} onClick={() => filterProduct('asd')}>Минимальная - Максимальная</button>
        <button disabled={(isError || isLoading)} onClick={() => filterProduct('dsa')}>Максимальная - Минимальная</button>
        <button onClick={() => navigate('/')}>Вернуться назад</button>
        <div>{isLoading ? <div>Загрузка товаров...</div> : isError ? <div>Произошла ошибка: {error.error}</div> : items?.map((e) => {
            return(
                <div key={e.id}>
                    <h1>{e.title}</h1>
                    <img src={e.image} alt={e.category}/>
                    <p>{e.description}</p>
                    <h3>{e.price} $</h3>
                    <Link to={`${e.id}`}><button>Узнать подробнее</button></Link>
                </div>
            )
        })}</div>
    </div>
  )
}

export default Product
