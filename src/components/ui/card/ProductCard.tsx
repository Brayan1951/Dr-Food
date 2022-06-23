import React from 'react'
import { Producto } from '../../../interfaces/interfaces';
import { useDispatch } from 'react-redux';
import { add } from '../../../store/slices/carrtio/CarritoSlce';

export const ProductCard = (product: Producto) => {
    const dispatch = useDispatch()

    return (
        <div onClick={() => dispatch(add(product))} className='btn card'>

            <div>{product.nombre}</div>
            <div>S./{product.precio}</div>
        </div>
    )
}
