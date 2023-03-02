import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardPurcharse from '../components/home/purcharse/CardPurcharse'
import config from '../utils/getConfig'

const Purcharse = () => {
    const [purcharses, setpurcharses] = useState()
    useEffect(() => {
        const url = "https://e-commerce-api-v2.academlo.tech/api/v1/purchases"
        axios.get(url, config)
        .then(res => setpurcharses(res.data))
        .catch(err => console.log(err))
    },[])
    
  return (
    <div>
        {
            purcharses?.map(purcharse => (
                <CardPurcharse key={purcharse.id} purcharse={purcharse} />
            ))
        }
    </div>
  )
}

export default Purcharse