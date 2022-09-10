import { IProduct } from '../../types/Product.interfade';

export interface MainProps {
  limit: number, 
  products: IProduct[],
  skip: number,
  total: number
}