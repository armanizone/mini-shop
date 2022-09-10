import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../types/Product.interfade'

interface ProductSliceProps {
  items: IProduct[],
  status: string | null
}

const initialState: ProductSliceProps = {
  items: [],
  status: null
}

const productSlice = createSlice({
  name: 'products', 
  initialState, 
  reducers: {},
})