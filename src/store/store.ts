import { configureStore } from '@reduxjs/toolkit'
import MesasSlice from './slices/mesas/MesasSlice';
import ModalSlice from './slices/uiModal/Modal';
import CarritoSlice from './slices/carrtio/CarritoSlce';
import VentasSlice from './slices/ventas/VentasSlice';

export const store = configureStore({
    reducer: {
        mesas: MesasSlice,
        uimodal: ModalSlice,
        // data
        // data: ProductosSlice,
        // carrtio
        carrito: CarritoSlice,
        ventas: VentasSlice

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch