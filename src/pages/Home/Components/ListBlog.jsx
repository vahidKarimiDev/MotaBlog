import React from 'react'
import BoxBlog from '../../../Components/BoxBlog/BoxBlog'

const ListBlog = () => {
    return (
        <>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <BoxBlog />
                <BoxBlog />
                <BoxBlog />
                <BoxBlog />
            </div>
            <div className="w-full  flex items-center justify-center my-12">
                <button className='px-9 py-2 tracking-tighter border border-[#EBEBEB] dark:border-gray-600 dark:hover:border-redPrimaryColor rounded-full text-secondTextColor hover:text-redPrimaryColor hover:border-redPrimaryColor transition'>مشاهده بیشتر</button>
            </div>
        </>
    )

}

export default ListBlog