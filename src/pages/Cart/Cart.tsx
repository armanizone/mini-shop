import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../../components/CartItem/CartItem';

function Cart() {

  const cart = useSelector((state: any) => state.cart)

  console.log(cart.cartItems);

  return (
    <div className='w-full'>
      <div className="container">
        <div className='flex flex-col gap-4'>
          {cart.cartItems.map((item: any) => {
            return (
              <CartItem 
                key={item.id}
                product={item}
              />
            )
          })}
          {cart.cartItems.length === 0 && (
            <p>Cart is empty</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cart