import React from 'react'
import Header from '../../Components/Header/Header'
import BoxBlog from '../../Components/BoxBlog/BoxBlog'
import ListBlog from './Components/ListBlog'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
    return (
        <>
            <div className="container">
                <Header />
                <ListBlog />
                <Footer />
            </div>
        </>
    )
}

export default Home