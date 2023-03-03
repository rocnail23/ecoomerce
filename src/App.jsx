import { Route, Routes } from 'react-router-dom'
import './App.css'
import Headers from './components/home/shared/Header'
import Product from './pages/Product'
import Home from './pages/Home'
import { useDispatch, useSelector } from 'react-redux'
import { getProductThunk } from './store/slices/products.slice'
import { useEffect } from 'react'
import { Login } from './pages/Login'
import { getCartThunk } from './store/slices/cart.slice'
import ProtectedRoutes from './pages/ProtectedRoutes'
import Cart from './pages/Cart'
import Purcharse from './pages/Purcharse'
import RegistePage from './pages/RegistePage'


function App() {
 const {cart} = useSelector(state => state)
  const dispatch = useDispatch()
  
    useEffect(() => {
        dispatch(getProductThunk())
        dispatch(getCartThunk())
    },[])
    
    
  return (
    <div className="App">
      <Headers/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product/:id' element={<Product></Product>}/>
        <Route path='/user'> 
        <Route path='/register' element={<RegistePage/>}/>
        <Route path='/login' element={<Login />} />
        </Route>
        <Route element={<ProtectedRoutes/>} >
          <Route path='/cart' element={<Cart/>} />
          <Route path='/purcharse' element={<Purcharse/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
