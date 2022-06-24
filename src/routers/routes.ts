import { lazy, LazyExoticComponent } from "react"
import { MesasScreen } from '../pages/Mesas/MesasScreen';
import { PedidosScreen } from '../pages/Pedidos/PedidosScreen';
type JSXComponent = () => JSX.Element
interface Route {
    name: string,
    to: string,
    path: string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent
}

// const CarritoScreen=lazy(()=>import(/*webpackChunkName:"CarritoScreen"*/'../pages/Carrito/CarritoScreen'))

export const routes: Route[] = [
    { name: 'Mesas', to: './', path: './', Component: MesasScreen },
    { name: 'Pedidos', to: './pedidos', path: './pedidos', Component: PedidosScreen },
]