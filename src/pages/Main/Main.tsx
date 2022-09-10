import React from 'react'
import ProductCard from '../../components/ProductCard/ProductCard';
import { useGetProductsQuery } from '../../redux/products/productsApi'
import { MainProps } from './Main.props';

function Main () {

  const [category, setCategory] = React.useState('products')

  const products = useGetProductsQuery(`${category}`)
  const categories = useGetProductsQuery('products/categories')

  if (products.isLoading) return (
    <div>
      <p>Loading...</p>
    </div>
  )

  return (
    <div className='w-full mt-8'>
      <div className="container">
        <div className='grid grid-cols-1 lg:grid-cols-[15%_1fr]'>
          <div className='flex flex-row flex-wrap items-start gap-4 lg:flex-col'>
            <button onClick={() => setCategory('products')}>All</button>
            {categories.data?.map((cat: any) => {
              return (
                <button
                  className='text-lg capitalize' 
                  onClick={() => setCategory(`products/category/${cat}`)}
                  key={cat}
                >
                  {cat}
                </button>
              )
            })}
          </div>
          <div>
            <div className='mb-4'>
              sort
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products?.data?.products?.map((product: any) => {
                return (
                  <ProductCard 
                    key={product.id}
                    product={product}
                  />
                )
              })}
              {products?.isFetching && (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main