import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { CSVLink, CSVDownload } from "react-csv";


import { Excell } from '../../interfaces/interfaces';
import './pedidos.css'





export const PedidosScreen = () => {

    const { ventas } = useSelector((state: RootState) => state.ventas)

    let tempArray: Excell[] = []
    const headers = [
        { label: "hora", key: "hora" },
        { label: "id", key: "id" },
        { label: "producto", key: "producto" },
        { label: "precio", key: "precio" }
    ];


    const header = [
        "id",
        "hora",
        "producto",
        "precio"
    ]

    const imprimir = () => {
        ventas.forEach((val, id) => {
            const productos = val.products.map((prev) => ({ id, hora: val.fecha, producto: prev.nombre, precio: prev.precio }))

            productos.map(val => tempArray.push(val))

        })
        return tempArray

    }


    return (
        <div className='pedidos'>

            {
                ventas.length > 0
                    ?
                    <CSVLink filename={"Pedidos.csv"} className='btn btn_pedidos-print' data={imprimir()} headers={headers} separator=';'>Descargar Pedidos</CSVLink>

                    : <div className='btn_pedidos'>No hay pedidos</div>
            }
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
