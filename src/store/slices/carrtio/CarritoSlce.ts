import { createSlice } from '@reduxjs/toolkit'
import { Producto, Agregados } from '../../../interfaces/interfaces';
export interface CarritoState {
    carrito: Producto[],
    productoActive: Producto,
    total: number
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
    }, total: 0
}

export const CarritoSlice = createSlice({
    name: 'Carrito',
    initialState,
    reducers: {
        add: (state, action) => {
            const agregados = <Agregados[]>action.payload.agregados

            const temp = agregados.map(prev => prev.precio).reduce((prev, curr) => prev + curr, 0)
            action.payload.precio += temp

            state.carrito = [...state.carrito, action.payload]

            const tempTotal = state.carrito.map(prev => prev.precio)
                .reduce((prev, curr) => prev + curr, 0)


            state.total = tempTotal

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