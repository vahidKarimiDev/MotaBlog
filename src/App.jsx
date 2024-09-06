import React from 'react';
import { useLocation, useRoutes } from 'react-router-dom';
import routers from './router';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer';


const App = () => {
    const route = useRoutes(routers);
    const location = useLocation();

    const isAdminRoute = location.pathname.includes('/admin')

    return (
        <>
            {!isAdminRoute && <Header />}
            {route}
            {!isAdminRoute && <Footer />}
        </>
    )
}

export default App