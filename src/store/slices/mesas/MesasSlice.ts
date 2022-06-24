import { createSlice } from '@reduxjs/toolkit'
import { initialMesaState } from '../../data/mesasData';
import { MesaState } from '../../../interfaces/interfaces';
export interface MesasStore {
    mesas: MesaState[],
    activeMesa: MesaState
}

const initialState: MesasStore = {
    mesas: initialMesaState,
    activeMesa: {
        id: 0,
        products: [],
        state: 'vacio',
    }
}

export const MesasSlice = createSlice({
    name: 'productosMesas',
    initialState: initialState,
    reducers: {
        setActiveMesa: (state, payload) => {
            state.activeMesa = payload.payload

        },
        addProductsMesa: (state, action) => {
            const { id, carrito } = action.payload
            state.mesas[id].products = [...state.mesas[id].products, ...carrito]
            state.mesas[id].state = 'completo'



        },
        deleteProductsMesa: (state, action) => {
            // const { idMesa, idProduct } = action.payload
            const temp = state.activeMesa.products.filter(producto => producto !== state.activeMesa.products[action.payload.idProduct])
            state.activeMesa.products = [...temp]
            state.mesas[action.payload.idMesa] = state.activeMesa
            state.mesas[action.payload.idMesa].state = 'vacio'
        },
        cleanMesa: (state, action) => {
            state.mesas[action.payload.idMesa] = {
                id: action.payload.idMesa + 1,
                products: [],
                state: 'vacio',
            }
        },



    },
})

// Action creators are generated for each case reducer function
export const { setActiveMesa, addProductsMesa, deleteProductsMesa, cleanMesa } = MesasSlice.actions
export default MesasSlice.reducer