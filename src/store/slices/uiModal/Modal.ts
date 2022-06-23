import { createSlice } from '@reduxjs/toolkit'
export interface uiMoidal {
    modalOpenMesa: boolean
    modalOpenCarrito: boolean
}

const initialState: uiMoidal = {
    modalOpenMesa: false,
    modalOpenCarrito: false
}

export const ModalSlice = createSlice({
    name: 'Modal',
    initialState,
    reducers: {
        uiopenModalMesa: (state) => {
            state.modalOpenMesa = true
        },
        uicloseModalMesa: (state) => {
            state.modalOpenMesa = false
        },
        uiopenModalCarrito: (state) => {
            state.modalOpenCarrito = true
        },
        uicloseModalCarrito: (state) => {
            state.modalOpenCarrito = false
        },
    },
})

// Action creators are generated for each case reducer function
export const { uiopenModalMesa, uicloseModalMesa, uicloseModalCarrito, uiopenModalCarrito } = ModalSlice.actions
export default ModalSlice.reducer