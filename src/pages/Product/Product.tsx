import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetProductsQuery } from '../../redux/products/productsApi'

function Product() {

  const { id } = useParams()
  
  const { data = [] } = useGetProductsQuery(`products/${id}`) 

  return (
    <div className='w-full'>
      <div className="container">
        <div className='grid grid-cols-2 gap-4'>
          {data?.images?.map((image: any) => {
            return (
              <img key={image} src={image} alt="" />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Product