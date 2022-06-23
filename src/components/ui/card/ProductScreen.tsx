import { useState } from 'react';
import { ProductList } from './ProductList';
import { tiposProduct } from '../../../store/data/producto';
import { ProductoModal } from './ProductoModal';
import { CarritoScreen } from '../carrito/CarritoScreen';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { Navigate } from 'react-router-dom';

export const ProductScreen = () => {
    const [tipo, settipo] = useState('Cheveres')
    const { activeMesa } = useSelector((state: RootState) => state.mesas)

    if (!activeMesa) {
        return <Navigate to={'/'} />

    }

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
