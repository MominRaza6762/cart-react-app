import React from 'react'
import { Product } from './Product'

export const ProductList = ({products , incQua , decQua , remItem}) => {
  return (
    products.length > 0 ?
    
        products.map((e , i) =>
        {
            
            return <Product product ={e} key={i} inc = {incQua} dec ={decQua} index ={i} remove ={remItem}/>
        }) : <h1 className='container text-center'>
            No products Here
        </h1>

      )
}
