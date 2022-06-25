import { createSlice } from '@reduxjs/toolkit'
import { initialMesaState } from '../../data/mesasData';
import { MesaState, Producto } from '../../../interfaces/interfaces';
export interface MesasStore {
    mesas: MesaState[],
    activeMesa: MesaState,

}

const initialState: MesasStore = {
    mesas: initialMesaState,
    activeMesa: {
        id: 0,
        products: [],
        state: 'vacio',
        total: 0
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
            const { id, carrito, total } = action.payload

            state.mesas[id].products = [...state.mesas[id].products, ...carrito]
            state.mesas[id].state = 'completo'
            state.mesas[id].total += total

        },
        deleteProductsMesa: (state, action) => {
            const { idMesa, idProduct } = action.payload
            const producttemp = state.activeMesa.products[idProduct]
            const temp = state.activeMesa.products.filter(producto => producto !== producttemp)
            state.activeMesa.products = [...temp]
            state.mesas[idMesa] = state.activeMesa
            state.mesas[idMesa].state = 'vacio'
            state.mesas[idMesa].total -= producttemp.precio

        },
        cleanMesa: (state, action) => {
            state.mesas[action.payload.idMesa] = {
                id: action.payload.idMesa + 1,
                products: [],
                state: 'vacio',
                total: 0
            }
        },



    },
})

// Action creators are generated for each case reducer function
export const { setActiveMesa, addProductsMesa, deleteProductsMesa, cleanMesa } = MesasSlice.actions
export default MesasSlice.reducer