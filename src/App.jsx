import React from 'react';
import { useRoutes } from 'react-router-dom';
import routers from './router';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer';

const App = () => {
    const route = useRoutes(routers);

    return (
        <>
            <Header />
            {route}
            <Footer />
        </>
    )
}

export default App