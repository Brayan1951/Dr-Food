
import { useDispatch, useSelector } from 'react-redux'
import './mesas.css'
import { RootState } from '../../store/store';
import { MesaModal } from './MesaModal';
import { uiopenModal } from '../../store/slices/uiModal/Modal';
import { setActiveMesa } from '../../store/slices/mesas/MesasSlice';
import { MesaState } from '../../interfaces/interfaces';


export const MesasScreen = () => {

    const { mesas } = useSelector((state: RootState) => state.mesas)
    const dispatch = useDispatch()
    // const mesas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    const modalOpen = (mesa: MesaState) => {

        dispatch(setActiveMesa({ ...mesa }))
        dispatch(uiopenModal())
    }

    return (
        <div className='mesas'>
            {
                mesas.map((mesa) =>
                (
                    <div onClick={() => modalOpen(mesa)} key={mesa.id} className="mesa">
                        Mesa #{mesa.id}
                    </div>
                )


                )

            }



            <MesaModal />
        </div>
    )
}
