import { createSlice } from '@reduxjs/toolkit'
import { Producto } from '../../../interfaces/interfaces';
export interface VentaState {
    products: Producto[],
    fecha: Date
    total: number
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

            const temp = { fecha: new Date().toLocaleString('es-US'), ...action.payload }
            state.ventas = [...state.ventas, temp]



        },
    },
})

// Action creators are generated for each case reducer function
export const { addVenta, } = VentasSlice.actions
export default VentasSlice.reducer