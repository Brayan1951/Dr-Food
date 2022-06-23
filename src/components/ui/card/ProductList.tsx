import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/store';
import { ProductCard } from './ProductCard';

import './card.css'
import { useMemo } from 'react';
import { getProductByTipe } from '../../selectors/getProductoByTipe';
import { add } from '../../../store/slices/carrtio/CarritoSlce';

interface Props {
    tipo: string
}

export const ProductList = ({ tipo }: Props) => {

    const productos = useMemo(() =>
        getProductByTipe(tipo), [tipo])

    const handleSelect = () => {
    }

    return (
        <div className='card-list'>
            {
                productos.map((producto, i) => (
                    // <div onClick={}>

                    <ProductCard key={i} {...producto} />
                    // </div>
                ))
            }

        </div>
    )
}
