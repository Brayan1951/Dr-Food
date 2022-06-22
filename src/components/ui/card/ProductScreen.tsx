import React from 'react'
import { useState } from 'react';
import { useForm } from '../../../hooks/useForm';
import { ProductList } from './ProductList';
import { tiposProduct } from '../../../store/data/producto';
import { ProductoModal } from './ProductoModal';
import { CarritoScreen } from '../carrito/CarritoScreen';

export const ProductScreen = () => {

    // cosnt {}useForm({tipo})
    const [tipo, settipo] = useState('Cheveres')

    const change = (value: any) => {



        // settipo(val => val = `${value.target.value}`)
        settipo(val => val = value.target.value)

    }

    return (
        <div className='product_screen'>
            <div className='select_products'>

                <select onChange={change}>
                    {
                        tiposProduct.map(tipo => (
                            <option key={tipo} value={tipo} >{tipo}</option>

                        ))
                    }
                </select>
            </div>

            <ProductList tipo={tipo} />
            <CarritoScreen />
            <ProductoModal />

        </div>
    )
}
