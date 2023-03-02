import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCartThunk } from '../../../store/slices/cart.slice'
import config from '../../../utils/getConfig'

const ShowItems = ({cartItem}) => {
    const dispatch =  useDispatch()
    const handleDelete = () => {
          
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart/${cartItem.id}`
    axios.delete(url, config)
    .then(res => {console.log(res.data)
    dispatch(getCartThunk())})
    .catch(err => console.log(err))
       
    
    }
    console.log(cartItem, config)
  return (
    <article>
        <header>
        <img src={cartItem.product.images[0].url} alt="" />
        </header>
        
            <h4>{cartItem.product.brand}</h4>
            <h3>{cartItem.product.title}</h3>
            <ul>
                <li>
                    <span>unit price</span>
                    <span>{cartItem.product.price}</span>
                </li>
                <li>
                    <span>Quantity</span>
                    <span>{cartItem.quantity}</span>
                </li>
            </ul>
        
<button onClick={handleDelete} className='bx bx-trash'></button>
    </article>
  )
}

export default ShowItems