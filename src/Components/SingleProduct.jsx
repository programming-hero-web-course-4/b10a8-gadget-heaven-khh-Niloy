import React from 'react'
import { useParams } from 'react-router-dom'

export default function SingleProduct() {
    const {productId } = useParams()
    console.log(productId );
    
  return (
    <div className='w-full h-screen bg-red-500'>SingleProduct: {productId }</div>
  )
}
