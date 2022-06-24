import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { uicloseModalMesa } from '../../store/slices/uiModal/Modal';
import { NavLink } from 'react-router-dom';
import './mesas.css'
import '../../components/ui/card/card.css';
import { cleanMesa, deleteProductsMesa } from '../../store/slices/mesas/MesasSlice';
import { addVenta } from '../../store/slices/ventas/VentasSlice';



export const MesaModal = () => {

    const { modalOpenMesa } = useSelector((state: RootState) => state.uimodal)
    const { activeMesa } = useSelector((state: RootState) => state.mesas)
    const dispatch = useDispatch()
    const closeModal = () => {
        dispatch(uicloseModalMesa())
    }

    const deleteProduct = (id: number) => {
        dispatch(deleteProductsMesa({ idMesa: activeMesa.id - 1, idProduct: id }))
    }

    const imprimir = () => {
        dispatch(addVenta(activeMesa))
        dispatch(cleanMesa({ idMesa: activeMesa.id - 1 }))
        dispatch(uicloseModalMesa())


    }

    return (
        <Modal ariaHideApp={false} isOpen={modalOpenMesa} onRequestClose={closeModal}>
            <div className='nav_modal-header'>
                <button disabled={(activeMesa.products.length > 0) ? false : true} onClick={imprimir} className='btn btn-print'>

                    Imprimir Pedidos
                </button>

                <h1>Mesa #{activeMesa?.id}</h1>
                <button className='btn btn-close' onClick={closeModal}>X</button>
            </div>
            <hr />

            <NavLink to={'/carrito'} onClick={closeModal}>
                <button className='btn btn-add'>

                    Agregar Pedidos
                </button>
            </NavLink>
            <div className='product_mesa_carrito'>
                {
                    (activeMesa.products.length > 0) && activeMesa.products.map((product, id) => (
                        <div key={id} className='btn card_mesa'>
                            <div className='card_mesa_header'>

                                <div className='fab_mesa_modal' onClick={() => deleteProduct(id)}>x</div>
                                <div className='card-l'>
                                    {product.nombre}
                                </div>
                                <div className='card-m'>
                                    <div className="card-cremas">
                                        Cremas: {product.cremas?.length === 0 && 'no hay cremas'}
                                        {product.cremas?.map((crema, id) => (<span key={id}>| {crema} |</span>))}

                                    </div>
                                    <div className="card-agregados">
                                        Adicionales: {product.agregados?.length === 0 && 'no hay agregados'}
                                        {
                                            product.agregados?.map((agregado, id) => (<span key={id}>| {agregado.nombre} | </span>))
                                        }
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className='card-r'>
                                S./{product.precio}
                            </div>
                        </div>
                    ))

                }
            </div>
            <hr />
            {
                activeMesa.total > 0 ?
                    <div className='modal_footer'>
                        S./ {activeMesa.total}
                    </div>
                    : <div className='modal_footer'>
                        No hay productos
                    </div>
            }

        </Modal>
    )
}
