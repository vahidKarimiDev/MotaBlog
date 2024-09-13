import React, { useEffect } from 'react'
import ListBlog from './Components/ListBlog';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogFromServer } from '../../Redux/Store/Blogs';

const Home = () => {
    const allBlog = useSelector(state => state.blog)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBlogFromServer())
    }, [])

    console.log(allBlog);

    return (
        <>
            <div className="container">
                <ListBlog data={allBlog} />
            </div>
        </>
    )
}

export default Home
