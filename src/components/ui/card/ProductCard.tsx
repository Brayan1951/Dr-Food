import React from 'react'
import { Producto } from '../../../interfaces/interfaces';
import { useDispatch } from 'react-redux';
import { add, setActiveProduct } from '../../../store/slices/carrtio/CarritoSlce';
import { uiopenModalCarrito } from '../../../store/slices/uiModal/Modal';

export const ProductCard = (product: Producto) => {
    const dispatch = useDispatch()

    const openModal = () => {
        dispatch(setActiveProduct(product))
        dispatch(uiopenModalCarrito())
    }


    return (
        <div onClick={openModal} className='btn card'>

            <div>{product.nombre}</div>
            <div>S./{product.precio}</div>
        </div>
    )
}
