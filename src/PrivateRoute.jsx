import { useContext } from 'react'
import { ContextAuth } from './App'
import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({children}) => {
    const {auth} = useContext(ContextAuth)
  return auth ? children : <Navigate to="/login" replace={true} />
}


export default PrivateRoute