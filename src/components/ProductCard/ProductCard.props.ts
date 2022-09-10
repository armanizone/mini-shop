import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';
import { IProduct } from '../../types/Product.interfade';



export interface ProductCardProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement>  {
  product: IProduct
}