import React from 'react';
import { useRoutes } from 'react-router-dom';
import routers from './router';
import Header from './Components/Header/Header'

const App = () => {
    const route = useRoutes(routers);

    return (
        <>
            <Header />
            {route}
        </>
    )
}

export default App