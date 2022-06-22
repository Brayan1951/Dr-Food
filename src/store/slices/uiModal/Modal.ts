import { createSlice } from '@reduxjs/toolkit'
export interface uiMoidal {
    modalOpen: boolean
}

const initialState: uiMoidal = {
    modalOpen: false
}

export const ModalSlice = createSlice({
    name: 'Modal',
    initialState,
    reducers: {
        uiopenModal: (state) => {
            state.modalOpen = true
        },
        uicloseModal: (state) => {
            state.modalOpen = false
        },
    },
})

// Action creators are generated for each case reducer function
export const { uiopenModal, uicloseModal } = ModalSlice.actions
export default ModalSlice.reducer