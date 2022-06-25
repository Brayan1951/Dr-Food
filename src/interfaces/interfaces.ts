export interface MesaState {
    id: number,
    products: Producto[],
    state: 'vacio' | 'completo'
    total: number
}

export interface Cremas {
    nombre: string;
    descripcion?: string
}

export interface Agregados {
    nombre: string;
    precio: number
}
export interface Producto {
    nombre: string;
    tipo: string;
    descripcion?: string;
    // cremas?: Cremas[];
    cremas?: string[];
    agregados?: Agregados[];
    // agregados?: string[];

    precio: number;
}

export interface Excell {
    id: number,
    hora: Date,
    producto: string,
    precio: number

}