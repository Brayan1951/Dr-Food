import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { uicloseModal } from '../../store/slices/uiModal/Modal';
import './mesas.css'
import { NavLink } from 'react-router-dom';
// const customStyles = {
//     content: {
//         top: '50%',
//         left: '50%',
//         right: 'auto',
//         bottom: 'auto',
//         marginRight: '-50%',
//         transform: 'translate(-50%, -50%)',
//     },
// };



export const MesaModal = () => {

    const { modalOpen } = useSelector((state: RootState) => state.uimodal)
    const { activeMesa } = useSelector((state: RootState) => state.mesas)
    const dispatch = useDispatch()
    const closeModal = () => {
        dispatch(uicloseModal())
    }

    return (
        <Modal ariaHideApp={false} isOpen={modalOpen} onRequestClose={closeModal}>
            <div className='nav_modal_mesa'>
                <h1>Mesa #{activeMesa?.id}</h1>
                <button className='btn btn-close' onClick={closeModal}>X</button>
            </div>
            <hr />

            <button className='btn btn-add_Pedidos'>
                <NavLink to={'/carrito'}>

                    Agregar Pedidos
                </NavLink>
            </button>


        </Modal>
    )
}
