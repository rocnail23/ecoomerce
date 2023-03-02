import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ShowItems from '../components/home/cart/ShowItems'
import { getCartThunk } from '../store/slices/cart.slice'
import config from '../utils/getConfig'
const Cart = () => {
  const {cart} =  useSelector(state => state)
  const [cartPrice, setCartPrice] = useState(0)
  const dispatch = useDispatch()
  useEffect(() => {
    setCartPrice(cart?.reduce((ccv, cv) => ccv + cv.quantity * Number(cv.product.price),0))
  },[cart])
  
  const handlePurcharse = () => {
    const url = "https://e-commerce-api-v2.academlo.tech/api/v1/purchases"
    axios.post(url,{}, config)
    .then(res => {console.log(res)
    dispatch(getCartThunk())})
    .catch(err => console.log(err))
  }
  return (
    <div>
        <div>
            {cart?.map(cartItem => (
                <ShowItems key={cartItem.id} cartItem={cartItem} />
            ))}
        </div>
        <footer>
          <h2><span>Total: </span><span>{cartPrice}</span></h2>
          <button onClick={handlePurcharse}>purcharse</button>
        </footer>
    </div>
  )
}

export default Cart