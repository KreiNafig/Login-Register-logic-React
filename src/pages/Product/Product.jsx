import React from 'react'
import { Link, Outlet, useNavigate, useSearchParams } from 'react-router-dom'

export const Product = () => {
    const [seartchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()
    const q = seartchParams.get('q') || ''
      const products = [
    {
      id: 1,
      name: "Смартфон iPhone 15 Pro",
      price: 129990,
      description: "Новый iPhone 15 Pro с титановым корпусом, процессором A17 Pro и улучшенной камерой 48 МП.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgiHKSGqqCE_8bgMnlgNrBFJFSCHyrTkIwlA&s"
    },
    {
      id: 2,
      name: "Ноутбук MacBook Air M2",
      price: 99990,
      description: "Легкий и мощный ноутбук с чипом Apple M2, 13-дюймовым экраном Retina и долгим временем работы от батареи.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4_NJj3RP0y05B77dFesH58YJUTds1nec4xQ&s"
    },
    {
      id: 3,
      name: "Наушники Sony WH-1000XM5",
      price: 34990,
      description: "Беспроводные наушники с продвинутым шумоподавлением, отличным звуком и автономностью до 30 часов.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOux4xPx67B3OnDxjDlNlRkvE8msB70vjl7Q&s"
    },
    {
      id: 4,
      name: "Умная колонка Яндекс Станция 2",
      price: 19990,
      description: "Умная колонка с голосовым помощником Алисой, поддержкой стриминговых сервисов и качественным звуком.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxcGbzpD6QRiMcjI1KEtzVARtcgUndTdG-VQ&s"
    }
  ];

  const items = products.filter((e) => e.name.toLowerCase().includes(q.toLowerCase()))
  
  return (
    <div>
        <input value={q} onChange={(e) => setSearchParams({q: e.target.value})} placeholder='Введите фильтр' />
        <button onClick={() => navigate('/')}>Вернуться назад</button>
        {items.map((e) => {
            return(
                <div key={e.id}>
                    <h1>{e.name}</h1>
                    <p>{e.description}</p>
                    <h3>{e.price} рублей</h3>
                    <Link to={`${e.id}`}><button>Узнать подробнее</button></Link>
                </div>
            )
        })}
    <Outlet />
    </div>
  )
}

export default Product
