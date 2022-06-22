import React from 'react'
import { Producto } from '../../../interfaces/interfaces';

export const ProductCard = ({ nombre, precio, agregados }: Producto) => {

    return (
        <div className='card'>

            <div>{nombre}</div>
            <div>S./{precio}</div>
        </div>
    )
}
