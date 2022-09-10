import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { BsFillCartFill } from 'react-icons/bs'

function Header({}): JSX.Element {

  const cart = useSelector((state: any) => state.cart)

  return (
    <div className='w-full shadow-md mb-4'>
      <div className="container">
        <div className='flex justify-between items-center py-4'>
          <div>
            <Link to={'/'}>
              LOGO
            </Link>
          </div>
          <Link to={'/cart'}>
            <div className='flex items-center text-lg'>
              <p className='border-r pr-4 mr-4 flex items-center gap-2'>
                Cart
                <BsFillCartFill/>
              </p>
              <p>
                {cart.cartItems?.length}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header