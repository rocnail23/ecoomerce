import React, { useEffect, useState } from 'react'
import CardProduct from '../components/home/CardProduct'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getProductByName } from '../store/slices/products.slice'
import axios from 'axios'


const Home = () => {
    const [inputsearch, setinputsearch] = useState()
    const [categories, setcategories] = useState()
    const {products} = useSelector(state => state)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const submit = (e) => {
        e.preventDefault()
       
      dispatch(getProductByName( e.target.findProduct.value.trim().toLowerCase()))  
    }
   
    useEffect(() => {
        const url = "https://e-commerce-api-v2.academlo.tech/api/v1/categories"
        axios.get(url)
        .then(res => setcategories(res.data))
        .catch(err => console.log(err))
    },[])
   
    const handleCategory = (id) => {
        dispatch(getProductByName(id, true))
    }

 return (


    <div>
        <form onSubmit={submit}>
            <input type="text" id='findProduct' />
            <button>find</button>
        </form>
        <article>
            <header>
                <h3>Products</h3>
                <button><i className='bx bx-chevron-down'></i></button>
            </header>
            <ul>
                {
                    categories?.map((category) => {
                      return  <li onClick={() => handleCategory(category.id)} key={category.id}>{category.name}</li>
                    })
                }
            </ul>
        </article>
        <div>
            {
            products?.length == 0 || products == null ?
                <div>this products dont exist</div>
                :
            products?.map(product => (
                <CardProduct  key={product.id} product={product} />
            ))}
        </div>
    </div>
  )
}

export default Home