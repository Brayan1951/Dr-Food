import { createSlice } from '@reduxjs/toolkit'
import { Producto, Agregados, Cremas } from '../../../interfaces/interfaces';
import { productos, cremas, agregados } from '../../data/producto';

export interface DataStore {
    productos: Producto[],
    agregados: Agregados[],
    cremas: Cremas[]

}

const initialState: DataStore = {
    productos: productos,
    agregados: agregados,
    cremas: cremas
}
export const ProductosSlice = createSlice({
    name: 'productos',
    initialState,
    reducers: {
    },
})




// Action creators are generated for each case reducer function
export const { } = ProductosSlice.actions

export default ProductosSlice.reducer