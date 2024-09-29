import React, { useEffect } from 'react'
import ListBlog from './Components/ListBlog';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogFromServer } from '../../Redux/Store/Blogs';

const Home = () => {
    const allBlog = useSelector(state => state.blog.blogs)
    const offset = useSelector(state => state.blog.offset)

    const dispatch = useDispatch();

    useEffect(() => {
        if (allBlog.length === 0) {
            dispatch(getBlogFromServer(offset))
        }
    }, [dispatch])

    return (
        <>
            <div className="container">
                <ListBlog data={allBlog} />
            </div>
        </>
    )
}

export default Home
