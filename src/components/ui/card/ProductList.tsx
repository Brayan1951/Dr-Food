import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { ProductCard } from './ProductCard';

import './card.css'
import { useMemo } from 'react';
import { getProductByTipe } from '../../selectors/getProductoByTipe';

interface Props {
    tipo: string
}

export const ProductList = ({ tipo }: Props) => {


    const productos = useMemo(() =>
        getProductByTipe(tipo), [tipo])

    return (
        <div className='card-list'>
            {
                productos.map((producto, i) => (
                    <ProductCard key={i} {...producto} />
                ))
            }

        </div>
    )
}
