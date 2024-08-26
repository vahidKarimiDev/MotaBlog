import React from 'react';
import { useRoutes } from 'react-router-dom';
import routers from './router';

const App = () => {
    const route = useRoutes(routers);

    return (
        <>
            {route}
        </>
    )
}

export default App