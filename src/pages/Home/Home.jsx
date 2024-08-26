import React from 'react'
import Header from '../../Components/Header/Header'
import BoxBlog from '../../Components/BoxBlog/BoxBlog'
import ListBlog from './Components/ListBlog'

const Home = () => {
    return (
        <>
            <div className="container">
                <Header />
                <ListBlog />
            </div>
        </>
    )
}

export default Home