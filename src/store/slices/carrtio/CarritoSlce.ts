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
        add: (state, action) => {
            // console.log(action);
            state.carrito = [...state.carrito, action.payload]

        },
    },
})

// Action creators are generated for each case reducer function
export const { add, } = CarritoSlice.actions
export default CarritoSlice.reducer