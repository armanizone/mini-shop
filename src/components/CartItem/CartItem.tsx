import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../../redux/slices/cartSlice'
import { CartItemProps } from './CartItem.props'

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

function CartItem({product}: CartItemProps): JSX.Element {

  const dispatch = useDispatch()

  const addMore = (product: any) => {
    dispatch(addToCart(product))
  }

  const remove = (product: any) => {
    dispatch(removeFromCart(product))
  }

  const total = product?.count! * product.price

  return (
    <div className='border p-4 flex justify-between items-center'>
      <div className='flex gap-4 max-w-md max-h-[120px] overflow-hidden flex-grow'>
        <img 
          src={product.thumbnail} 
          alt={product.title} 
          className='aspect-square max-w-[120px] object-contain' 
        />
        <div className='flex flex-col'>
          <h3 className='font-semibold text-xl'>
            {product.title}
          </h3>
          <p className='text-slate-500 text-sm mb-2 underline'>
            {product.brand}
          </p>
          <p className='leading-5'>
            {product.description}
          </p>
        </div>
      </div>
      <p className='font-semibold text-lg ' >
        {product.price}$
      </p>
      <div className='flex gap-4'>
        <button onClick={() => remove(product)} className='text-xl'>
          <AiOutlineMinus/>
        </button>
        <span>
          {product.count}
        </span>
        <button onClick={() => addMore(product)} className='text-xl'>
          <AiOutlinePlus/>
        </button>
      </div>
      <div className='font-semibold text-lg'>
        {total}$
      </div>
    </div>
  )
}

export default CartItem