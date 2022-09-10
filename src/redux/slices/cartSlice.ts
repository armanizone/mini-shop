import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../types/Product.interfade';


interface CartState {
  cartItems: IProduct[]
  count: number
  cartTotalAmount: number
}

const initialState: CartState = {
  cartItems: [],
  count: 0,
  cartTotalAmount: 0
} 

const cartSlice = createSlice({
  name: 'cart', 
  initialState, 
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(item => 
        item?.id === action?.payload?.id
      )
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].count! += 1
      } else {
        const tempProduct = { ...action.payload, count: 1}
        state.cartItems = [...state.cartItems, tempProduct]
      }
    },
    removeFromCart(state, action) {
      if (action.payload.count > 1) {
        const itemIndex = state.cartItems.findIndex(item =>
          item?.id === action?.payload?.id
        )
        state.cartItems[itemIndex].count! -= 1
      } else {
        const newCartItems = state.cartItems.filter(item => 
          item.id !== action.payload.id
        )
        state.cartItems = newCartItems
      }
    }
  }
})

export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer