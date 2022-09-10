import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../redux/slices/cartSlice';
import { IProduct } from '../../types/Product.interfade';
import { ProductCardProps } from './ProductCard.props';

function ProductCard({ product}: ProductCardProps):JSX.Element {

  const dispatch = useDispatch()
  const handleAddtoCart = (product: IProduct) => {
    dispatch(addToCart(product))
  }

  return (
    <div className='shadow-md rounded-md overflow-hidden flex flex-col '>
      <Link to={`/product/${product.id}`}>
        <img 
          src={product.thumbnail} 
          alt={product.title}
          className='aspect-video object-contain' 
        />
      </Link>
      <div className='p-3 md:p-4 flex flex-col gap-2 flex-grow'>
        <p className='text-sm underline'>
          {product.brand} 
        </p>
        <h2 className='font-semibold text-base md:text-lg'>
          {product.title}
        </h2>
        <p className='text-sm md:text-[15px]'>
          {product.description}
        </p>
        <p className='font-semibold text-lg'>
          {product.price} $
        </p>
      </div>
      <div className='flex-shrink p-3 md:p-4'>
        <button onClick={() => handleAddtoCart(product)}>Добавить в корзину</button>
      </div>
    </div>
  )
}

export default ProductCard