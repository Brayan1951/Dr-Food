import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import { routes } from './routes';
import { Navbar } from '../components/ui/navbar/Navbar';
import { CarritoScreen } from '../pages/Carrito/CarritoScreen';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <div className='screen'>
                <div className='menu-screen'>

                    {routes.map(({ name, to }) => (
                        <div key={to} className='menu'>

                            <NavLink to={to} className={({ isActive }) => (isActive ? 'link-active' : '')} >{name}</NavLink>
                        </div>

                    ))}
                </div>
                <Routes>
                    {
                        routes.map(({ path, Component }) => (
                            <Route key={path} path={path} element={<Component />} />

                        ))
                    }
                    <Route path={'/carrito'} element={<CarritoScreen />} />
                </Routes>


                <Navbar />
            </div>
        </BrowserRouter>

    )
}
