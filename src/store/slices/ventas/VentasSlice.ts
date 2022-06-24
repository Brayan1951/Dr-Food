import { createSlice } from '@reduxjs/toolkit'
import { Producto } from '../../../interfaces/interfaces';
export interface VentaState {
    productos: Producto[],
    fecha: Date
}
interface VentasState {
    ventas: VentaState[]
}
const initialState: VentasState = {
    ventas: []
}

export const VentasSlice = createSlice({
    name: 'Ventas',
    initialState,
    reducers: {
        addVenta: (state, action) => {

            const temp = { fecha: new Date(), ...action.payload.products }
            state.ventas = [...state.ventas, temp]


        },
    },
})

// Action creators are generated for each case reducer function
export const { addVenta, } = VentasSlice.actions
export default VentasSlice.reducer