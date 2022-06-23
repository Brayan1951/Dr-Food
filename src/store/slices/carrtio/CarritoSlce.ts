import { createSlice } from '@reduxjs/toolkit'
import { Producto } from '../../../interfaces/interfaces';
export interface CarritoState {
    carrito: Producto[],
    productoActive: Producto
}

const initialState: CarritoState = {
    carrito: [],
    productoActive: {
        nombre: '',
        precio: 0,
        tipo: '',
        agregados: [],
        cremas: [],
        descripcion: ''
    }
}

export const CarritoSlice = createSlice({
    name: 'Carrito',
    initialState,
    reducers: {
        add: (state, action) => {
            state.carrito = [...state.carrito, action.payload]

        },
        deleted: (state, action) => {

            state.carrito = state.carrito.filter(producto => producto !== state.carrito[action.payload])


        },

        setActiveProduct: (state, action) => {

            state.productoActive = action.payload
        },
        cleanCarrito: (state) => {
            // console.log(initialState);

            state.carrito = []
            state.productoActive = {
                nombre: '',
                precio: 0,
                tipo: '',
                agregados: [],
                cremas: [],
                descripcion: ''
            }
        },

    },
})

// Action creators are generated for each case reducer function
export const { add, deleted, setActiveProduct, cleanCarrito } = CarritoSlice.actions
export default CarritoSlice.reducer