import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense, useCallback } from 'react'

const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const PrivateRoute = lazy(() => import('./PrivateRoute'))
const Product = lazy(() => import('./pages/Product/Product'))
const ProductDetail = lazy(() => import('./pages/Product/ProductDetail'))
const ErrorPage = lazy(() => import('./pages/ErrorPage'))

export const AppRoutes = () => {
  const addFavorite = useCallback(() => {
    console.log('Hello, rerender')
    return 123
  }, [])

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={
            <PrivateRoute>
                <Dashboard />
            </PrivateRoute>} />
        <Route path="products" element={<PrivateRoute><Product /></PrivateRoute>} />
        <Route path="products/:id" element={<ProductDetail func={addFavorite} />} />
        <Route path="*" element={<ErrorPage />} />
    </Routes>
    </Suspense>
  )
}
