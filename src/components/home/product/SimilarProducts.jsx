import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../CardProduct'

const SimilarProducts = ({category, productId}) => {
    const {products} = useSelector(state => state)
    const [filterProducts, setfilterProducts] = useState()
   
    useEffect(() => {
        setfilterProducts(products?.filter(product => product.category.id === category?.id))
    },[category])

    console.log(filterProducts)
   
   
  return (
    <div>
        <h2>Discover similar products</h2>
        <div>
            {
                filterProducts?.map(prod => {
                    if(productId !== prod.id){
                        return <CardProduct key={prod.id} product={prod} />
                    }
                }
                    
                )
            }
        </div>
    </div>
  )
}

export default SimilarProducts