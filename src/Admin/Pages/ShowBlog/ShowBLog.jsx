import React, { useEffect } from 'react'
import BoxContent from '../../Components/BoxContent/BoxContent'
import { useDispatch, useSelector } from 'react-redux'
import BoxBlogAdmin from '../../Components/BoxBlogAdmin/BoxBlogAdmin'
import { getBlogFromServer } from '../../../Redux/Store/Blogs'

const ShowBLog = () => {
    const blogs = useSelector((state) => state.blog.blogs);
    const dispatch = useDispatch()

    useEffect(() => {
        if (blogs.length === 0) {
            dispatch(getBlogFromServer(0))
        }
    }, [])

    return (
        <>
            <BoxContent>
                <h2 className='font-MorabbaBold text-2xl text-zinc-700 border-b-2 border-gray-300 pb-2'>مشاهد تمامی بلاگ ها</h2>
                <div className="grid grid-cols-3 gap-5 mt-10 bg-white p-5 rounded-md">
                    {
                        blogs?.map(blog => (
                            <BoxBlogAdmin {...blog} />
                        ))
                    }
                </div>
            </BoxContent>
        </>
    )
}

export default ShowBLog