import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductInfo from '../components/home/product/ProductInfo'
import SimilarProducts from '../components/home/product/SimilarProducts'

const Product = () => {
    const [product, setproduct] = useState()
    const {id} = useParams()
    useEffect(() => {
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`
        axios.get(url)
        .then(res => setproduct(res.data))
        .catch(err => console.log(err))
    },[id])
    
  return (
    <div>
        <ProductInfo product={product} />
        <SimilarProducts category={product?.category} 
        productId={product?.id}/>
    </div>
  )
}

export default Product