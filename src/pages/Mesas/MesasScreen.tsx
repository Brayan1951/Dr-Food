
import { useDispatch, useSelector } from 'react-redux'
import './mesas.css'
import { RootState } from '../../store/store';
import { MesaModal } from './MesaModal';
import { uiopenModalMesa } from '../../store/slices/uiModal/Modal';
import { setActiveMesa } from '../../store/slices/mesas/MesasSlice';
import { MesaState } from '../../interfaces/interfaces';


export const MesasScreen = () => {

    const { mesas } = useSelector((state: RootState) => state.mesas)
    const dispatch = useDispatch()

    const modalOpen = (mesa: MesaState) => {

        dispatch(setActiveMesa({ ...mesa }))
        dispatch(uiopenModalMesa())
    }

    return (
        <div className='mesas'>
            {
                mesas.map((mesa) =>
                (
                    <div onClick={() => modalOpen(mesa)} key={mesa.id} className={`mesa ${mesa.state === 'completo' && 'mesa-gente'}`}>
                        Mesa #{mesa.id}
                    </div>
                )


                )

            }



            <MesaModal />
        </div>
    )
}
