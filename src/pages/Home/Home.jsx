import React from 'react'
import ListBlog from './Components/ListBlog'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
    return (
        <>
            <div className="container">
                <ListBlog />
                <Footer />
            </div>
        </>
    )
}

export default Home