import React from 'react'

const CardPurcharse = ({purcharse}) => {
  return (
    <article>
        <header>
            <img src={purcharse.product.images[0].url} alt="" />
        </header>
        <h3>{purcharse.product.title}</h3>
        <div>{purcharse.cuantity}</div>
        <div>{purcharse.product.price}</div>
    </article>
  )
}

export default CardPurcharse