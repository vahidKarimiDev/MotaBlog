import React from 'react'
import BoxBlog from '../../../Components/BoxBlog/BoxBlog'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogFromServer, incrementOffset } from '../../../Redux/Store/Blogs'

const ListBlog = ({ data }) => {
    const dispathc = useDispatch();
    const offset = useSelector(state => state.blog.offset);
    const noData = useSelector(state => state.blog.noData);

    const seeMore = () => {
        dispathc(incrementOffset())
        dispathc(getBlogFromServer(offset + 6))
    }

    return (
        <>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    data?.map(blog => (
                        <BoxBlog {...blog} />
                    ))
                }
            </div>
            <div className="w-full  flex items-center justify-center my-12">
                {
                    noData ? <><p className='tracking-tighter text-sm text-secondTextColor '>تمام پست ها نمایش داده شدن</p></> : <><button onClick={seeMore} className='px-9 py-2 tracking-tighter border border-[#EBEBEB] dark:border-gray-600 dark:hover:border-redPrimaryColor rounded-full text-secondTextColor hover:text-redPrimaryColor hover:border-redPrimaryColor transition'>مشاهده بیشتر</button></>
                }
            </div>
        </>
    )

}

export default ListBlog