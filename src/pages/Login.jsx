import React, { useContext, useEffect, useState } from 'react'
import { useValidation } from '../hooks/useValidation'
import { Link, useNavigate } from 'react-router-dom'
import { ContextAuth } from '../App'

export const Login = () => {
  const {auth, setAuth} = useContext(ContextAuth)
  const [validation, setValidation] = useState(true)
  const navigate = useNavigate()
  const email = useValidation('')
  const password = useValidation('')

  
  useEffect(() => {
    if(!email.errorMessage && !password.errorMessage) {
      setValidation(false)
    } else {
      setValidation(true)
    }
  }, [password.errorMessage, email.errorMessage, auth, navigate])

  useEffect(() => {
    if (auth) {
      navigate('/')
    }
  }, [auth, navigate])
  
    function handleSubmit(e) {
      e.preventDefault()
      if(email.errorMessage || password.errorMessage) {
        alert('Ошибка в форме')
        return
      }

      setAuth(true)
      localStorage.setItem('token', true)
      alert('Вы успешно авторизовались')
      navigate('/')
    }

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate>
        <label>
          <p>email</p>
          <input name='email' type='email' value={email.value} onBlur={email.onBlur} onChange={email.onChange}/>
          {(email.dirty && email.error) && <div style={{color: 'red'}}>{email.errorMessage}</div>}
        </label>
        <label>
          <p>password</p>
          <input name='password' type='password' value={password.value} onBlur={password.onBlur} onChange={password.onChange} />
          {(password.dirty && password.error) && <div style={{color: 'red'}}>{password.errorMessage}</div>}
        </label>
        <div></div>
        <button type="submit" disabled={validation}>Авторизоваться</button>
      </form>
      <p>Если нет аккаунта <Link to="/register" style={{textDecoration: 'none', color: 'blue'}}>зарегистрируйтесь</Link></p>
    </div>
  )
}

export default Login