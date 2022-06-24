import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import { add } from '../../../store/slices/carrtio/CarritoSlce';
import { uicloseModalCarrito } from '../../../store/slices/uiModal/Modal';
import { RootState } from '../../../store/store';
import { agregados, cremas } from '../../../store/data/producto';
import { useState } from 'react';
import { Producto, Agregados } from '../../../interfaces/interfaces';

export const ProductoModal = () => {
    const { productoActive } = useSelector((state: RootState) => state.carrito)
    const { modalOpenCarrito } = useSelector((state: RootState) => state.uimodal)
    const [cremasState, setCremasState] = useState<string[]>([])
    const [agregadosState, setAgregadosState] = useState<Agregados[]>([])

    const dispatch = useDispatch()
    const closeModal = () => {
        dispatch(uicloseModalCarrito())
    }

    const agregarCarrito = () => {
        const tempProduct: Producto = {
            ...productoActive,
            cremas: cremasState,
            agregados: agregadosState
        }

        dispatch(add(tempProduct))
        setAgregadosState([])
        closeModal()
    }
    const cremaSelect = (crema: string) => {
        if (cremasState.includes(crema)) {
            setCremasState(cremasState.filter(prev => prev !== crema))

        } else {

            setCremasState(prev => [...prev, crema])
        }

    }
    const adicionalSelect = (adicional: Agregados) => {
        if (agregadosState.includes(adicional)) {
            setAgregadosState(agregadosState.filter(prev => prev !== adicional))

        } else {

            setAgregadosState(prev => [...prev, adicional])
        }

    }


    return (
        <Modal ariaHideApp={false} onRequestClose={closeModal} isOpen={modalOpenCarrito}>
            <div className='nav_modal-header'>
                <h1>Mesa #{productoActive?.nombre}</h1>
                <button className='btn btn-close' onClick={closeModal}>X</button>
            </div>
            <div className='modal-cremas'>

                {cremas.map((crema, i) => (
                    <div key={i} className='modal-crema'>

                        <div className={`btn crema crema-${crema.nombre}`}>{crema.nombre}</div>
                        <input type={'checkbox'} onChange={() => cremaSelect(crema.nombre)} value={crema.nombre} />
                    </div>
                ))}
            </div>
            <div className='modal-adicionales'>

                {agregados.map((agregado, i) => (
                    <div key={i} className='btn modal-adicional'>

                        <div className={``}>{agregado.nombre}</div>
                        <input type={'checkbox'} onChange={() => adicionalSelect(agregado)} value={agregado.nombre} />
                    </div>
                ))}
            </div>
            <div className='btn btn-add' onClick={agregarCarrito}>
                Añadir
            </div>

        </Modal>
    )
}
