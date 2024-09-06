import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './Components/SideBar/SideBar'

const App = () => {
    return (
        <>
            <SideBar />
            <Outlet />
        </>
    )
}

export default App