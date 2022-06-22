import { createSlice } from '@reduxjs/toolkit'
import { initialMesaState } from '../../data/mesasData';
import { MesaState } from '../../../interfaces/interfaces';
export interface MesasStore {
    mesas: MesaState[],
    activeMesa: MesaState | null
}

const initialState: MesasStore = {
    mesas: initialMesaState,
    activeMesa: null
}

export const MesasSlice = createSlice({
    name: 'productosMesas',
    initialState: initialState,
    reducers: {
        setActiveMesa: (state, payload) => {
            state.activeMesa = payload.payload

        },
    },
})

// Action creators are generated for each case reducer function
export const { setActiveMesa, } = MesasSlice.actions
export default MesasSlice.reducer