import './pedidos.css'
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
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
                                    {venta.fecha.toLocaleString()}

                                </div>
                            </div>
                            <hr />
                        </div>
                    ))
                }
            </div>

        </div>
    )
}
