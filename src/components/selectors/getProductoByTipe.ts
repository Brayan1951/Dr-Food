import { productos } from "../../store/data/producto"

export const getProductByTipe = (tipo: string) => {
    const validProduct = ['Cheveres', 'Hamburguesa', 'Broaster', 'Salchipapa', 'Chaufa', 'Enchiladas', 'Alitas BBQ', 'Pepitos', 'Panini', 'Cachapas', 'Choripan']

    if (!validProduct.includes(tipo)) {
        throw new Error(`${tipo} no es valido`)
    }
    return productos.filter(producto => producto.tipo === tipo)

}