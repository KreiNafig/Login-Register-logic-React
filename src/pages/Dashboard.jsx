import React, { useContext, useState } from 'react'
import { ContextAuth } from '../App'
import { useAddPostMutation, useGetPostsQuery, useDeletePostMutation } from '../store/slices/apiSlice'

export const Dashboard = () => {
  const {data, isLoading, isError, error} = useGetPostsQuery()
  const [deletePost] = useDeletePostMutation()
  const [createPost] = useAddPostMutation()
  const {setAuth} = useContext(ContextAuth)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  
  function handleSubmit(e) {
    e.preventDefault()
    const obj = {
      userId: 1,
      title,
      body
    }
    createPost(obj)
  }
  
  function handleClick() {
    setAuth(false)
    localStorage.removeItem('token')
  }
  
  
  return (
    <>
    <div>ПОСТЫ: {data?.length}</div>
    <form onSubmit={handleSubmit}>
    <input name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Заголовок' />
    <input name="text" value={body} onChange={(e) => setBody(e.target.value)} placeholder='текст' />
    <button type="submit">Отправить</button>
    </form>
    <div>{isLoading ? <div>Загрузка постов...</div> : isError ? <div>Произошла ошибка type: {error.error}</div> : data?.map((e) => (
      <div key={e.id}>
      <h2>{e.title}</h2>
      <p>{e.body}</p>
      <button onClick={() => {deletePost(e.id)}}>Удалить пост из списка</button>
      </div>
    ))}</div>
    <button onClick={handleClick}>Logout</button>
    </>
  )
}


export default Dashboard
