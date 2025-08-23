import React, { useContext, useEffect, useState } from 'react'
import { ContextAuth } from '../App'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, deletePost, fetchPosts } from '../store/slices/postSlice'

export const Dashboard = () => {
  const {posts, status} = useSelector((state) => state.post)
  const dispatch = useDispatch()
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
    dispatch(createPost(obj))
  }

    function handleClick() {
      setAuth(false)
      localStorage.removeItem('token')
    }
    useEffect(() => {
  if (status === 'idle' && posts.length === 0) {
    dispatch(fetchPosts())
  }
}, [dispatch, status, posts.length])
    console.log(posts)
  return (
    <>
    <div>ПОСТЫ: {posts.length}</div>
    <form onSubmit={handleSubmit}>
    <input name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Заголовок' />
    <input name="text" value={body} onChange={(e) => setBody(e.target.value)} placeholder='текст' />
    <button type="submit">Отправить</button>
    </form>
    <div>{posts.map((e) => (
      <div key={e.id}>
      <h2>{e.title}</h2>
      <p>{e.body}</p>
      <button onClick={() => dispatch(deletePost(e.id))}>Удалить пост из списка</button>
      </div>
    ))}</div>
    <button onClick={handleClick}>Logout</button>
    </>
  )
}


export default Dashboard