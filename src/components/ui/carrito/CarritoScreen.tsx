import { RootState } from '../../../store/store';
import { useSelector } from 'react-redux';
import './carrito.css'

export const CarritoScreen = () => {
    const { carrito } = useSelector((state: RootState) => state.carrito)
    return (
        <div className='carrito_products_screen'>

            {
                carrito.map((product, i) => (
                    <div key={i} className='btn carrito_productos'>
                        <div className='fab'>x</div>
                        <div className='carrito_products-header'>
                            <div>

                                {product.nombre}
                            </div>

                        </div>
                        <div className='carrito_products-body'>
                            <h4>

                                Cremas: no hay cremas
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
