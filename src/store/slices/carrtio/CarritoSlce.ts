import { createSlice } from '@reduxjs/toolkit'
import { Producto } from '../../../interfaces/interfaces';
export interface CarritoState {
    carrito: Producto[],
    productoActive: Producto | null
}

const initialState: CarritoState = {
    carrito: [],
    productoActive: null
}

export const CarritoSlice = createSlice({
    name: 'Carrito',
    initialState,
    reducers: {
        increment: (state,/*action */) => {
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, } = CarritoSlice.actions
export default CarritoSlice.reducer