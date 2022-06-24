import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import './pedidos.css'
export const PedidosScreen = () => {

    const { ventas } = useSelector((state: RootState) => state.ventas)

    return (
        <div className='pedidos'>
            <div className='lista_pedidos'>


                {
                    ventas.map((venta, i) => (
                        <div key={i} className='btn pedido_card'>
                            {/* {venta.fecha.getDate()} / {venta.fecha.getMonth()} / {venta.fecha.getFullYear()} */}
                            <div className='pedido_card-header'>
                                <div>
                                    Pedido: #{i + 1}
                                </div>
                                <div>
                                    {venta.fecha.valueOf()}

                                </div>
                            </div>
                            <hr />
                            <div className='pedido_card_body'>
                                <div className='pedido_card_products'>
                                    {
                                        venta.products.map((producto, id) => (
                                            <div key={id} className='pedido_card_producto'>
                                                <div>
                                                    {producto.nombre}

                                                </div>
                                                <div>
                                                    s./ {producto.precio}

                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <hr />
                            <div className="pedido_card_footer">
                                <div>
                                    Total  S./{venta.total}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}
