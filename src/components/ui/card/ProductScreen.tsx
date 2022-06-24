import { useState } from 'react';
import { ProductList } from './ProductList';
import { tiposProduct } from '../../../store/data/producto';
import { ProductoModal } from './ProductoModal';
import { CarritoScreen } from '../carrito/CarritoScreen';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/store';
import { Link, Navigate } from 'react-router-dom';
import { addProductsMesa } from '../../../store/slices/mesas/MesasSlice';
import { cleanCarrito } from '../../../store/slices/carrtio/CarritoSlce';

export const ProductScreen = () => {
    const [tipo, settipo] = useState('Cheveres')
    const { activeMesa } = useSelector((state: RootState) => state.mesas)
    const { carrito, total } = useSelector((state: RootState) => state.carrito)
    const dispatch = useDispatch()
    if (activeMesa.id === 0) {
        return <Navigate to={'/'} />

    }

    const change = (value: any) => {



        // settipo(val => val = `${value.target.value}`)
        settipo(val => val = value.target.value)

    }

    const AddProductMesa = () => {
        dispatch(addProductsMesa({ carrito, id: activeMesa.id - 1, total }))
        dispatch(cleanCarrito())
        return <Navigate to={'/'} />
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
                <Link to="/">
                    {/* Finalizar productos */}
                    <button className='btn btn-cancel' onClick={() => dispatch(cleanCarrito())}>Cancelar</button>
                </Link>
                <Link to="/">
                    {/* Finalizar productos */}
                    <button disabled={carrito.length === 0 ? true : false} className='btn btn-add' onClick={AddProductMesa}>Finalizar</button>
                </Link>
            </div>

            <ProductList tipo={tipo} />
            <CarritoScreen />
            <ProductoModal />

        </div>
    )
}
