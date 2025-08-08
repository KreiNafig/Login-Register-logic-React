import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useValidation } from '../hooks/useValidation'
import { ContextAuth } from '../App'

export const Register = () => {
    const {auth, setAuth} = useContext(ContextAuth)
    const navigate = useNavigate()
    const [validation, setValidation] = useState(true)
    const name = useValidation('')
    const email = useValidation('')
    const password = useValidation('')
    const checked = useValidation(false)

    useEffect(() => {
        if(!name.errorMessage 
            && !email.errorMessage 
            && !password.errorMessage 
            && !checked.errorMessage) {
            setValidation(false)
        } else {
            setValidation(true)
        }
    }, [checked.errorMessage, email.errorMessage, name.errorMessage, password.errorMessage])

      useEffect(() => {
        if (auth) {
            navigate('/')
        }
      }, [auth, navigate])

    function handleSubmit(e) {
        e.preventDefault()
        if(!name.errorMessage 
            && !email.errorMessage 
            && !password.errorMessage 
            && !checked.errorMessage) {
                setAuth(() => true)
                localStorage.setItem('token', 'true')
                alert('Вы успешно зарегистрировались!')
                navigate('/')
            }
    }

    return (
    <div>
        <form onSubmit={handleSubmit} noValidate>
        <label>
          <p>Имя</p>
          <input name='name' type='text' value={name.value} onBlur={name.onBlur} onChange={name.onChange}/>
          {(name.dirty && name.error) && <div style={{color: 'red'}}>{name.errorMessage}</div>}
        </label>
        <label>
          <p>Почта</p>
          <input name='email' type='email' value={email.value} onBlur={email.onBlur} onChange={email.onChange} />
          {(email.dirty && email.error) && <div style={{color: 'red'}}>{email.errorMessage}</div>}
        </label>
        <label>
          <p>password</p>
          <input name='password' type='password' value={password.value} onBlur={password.onBlur} onChange={password.onChange} />
          {(password.dirty && password.error) && <div style={{color: 'red'}}>{password.errorMessage}</div>}
        </label>
        <label>
            Согласен с условиями
            <input name="checking" type="checkbox" value={checked.value} onBlur={checked.onBlur} onChange={checked.onChange}/>
            {(checked.dirty && checked.error) && <div style={{color: 'red'}}>{checked.errorMessage}</div>}
        </label>
        <button type="submit" disabled={validation}>Авторизоваться</button>
        </form>
    </div>
  )
}
