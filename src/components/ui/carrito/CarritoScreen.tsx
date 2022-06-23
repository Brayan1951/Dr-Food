import { RootState } from '../../../store/store';
import { useSelector, useDispatch } from 'react-redux';
import { deleted } from '../../../store/slices/carrtio/CarritoSlce';
import { Producto } from '../../../interfaces/interfaces';
import './carrito.css'


export const CarritoScreen = () => {
    const { carrito } = useSelector((state: RootState) => state.carrito)

    const dispatch = useDispatch()

    const deleteProduct = (product: number) => {
        dispatch(deleted(product))
    }


    return (
        <div className='carrito_products_screen'>

            {
                carrito.map((product, i) => (
                    <div key={i} className='btn carrito_productos'>
                        <div className='fab' onClick={() => deleteProduct(i)}>x</div>
                        <div className='carrito_products-header'>
                            <div>

                                {product.nombre}
                            </div>

                        </div>
                        <div className='carrito_products-body'>
                            <h4>

                                Cremas:
                                {product.cremas?.map((crema, id) => (<span key={id}>| {crema} | </span>))}

                            </h4>

                            <h4>

                                Adicionales: no hay cremas
                            </h4>
                        </div>
                        <hr />
                        <div className='carrito_products-footer'>
                            <h3>

                                S./ {product.precio}
                            </h3>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}
