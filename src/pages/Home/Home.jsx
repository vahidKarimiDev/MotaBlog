import React from 'react'
import Header from '../../Components/Header/Header'
import BoxBlog from '../../Components/BoxBlog/BoxBlog'
import ListBlog from './Components/ListBlog'
import Footer from '../../Components/Footer/Footer'
import BtnDarkMode from '../../Components/BtnDarkMode/BtnDarkMode'

const Home = () => {
    return (
        <>
            <div className="container">
                <Header />
                <ListBlog />
                <Footer />
                <BtnDarkMode />
            </div>
        </>
    )
}

export default Home