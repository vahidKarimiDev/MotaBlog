import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react"
import DOMPurify from 'dompurify';
import { Link } from 'react-router-dom';

const BoxBlog = ({ title, miniDesc, slug, photos, admin_userName, admin_profile, category }) => {
    const cleanDesc = DOMPurify.sanitize(miniDesc)

    return (
        <>
            <div className="rounded-xl overflow-hidden h-[560px] border border-[#EBEBEB] dark:border-gray-600">
                <div className="w-full relative">
                    <Link to={`/blog/${slug}`}>
                        <div className="h-[235px] overflow-hidden">
                            <img src={photos[0]} className='w-full h-[235px] overflow-hidden object-cover hover:scale-105 transition duration-300 cursor-pointer' alt="Photo Post ...." />
                        </div>
                    </Link>
                    <span className='backGround-primary rounded-full absolute top-4 right-4 text-sm py-1 px-2.5'>الهام بخش</span>
                    <div className="active flex items-center justify-center w-14 p-0 h-14 absolute left-4 -bottom-4 z-10">
                        <svg className='w-7 h-7 text-white'>
                            <use xlinkHref='#photo'></use>
                        </svg>
                    </div>
                </div>
                <div className="p-[30px]">
                    <div className="flex items-center justify-start gap-3">
                        <img src="/images/avatar.png" className='w-9 h-9 object-cover' alt="" />
                        <p className='text-secondTextColor text-xs tracking-tighter hover:text-redPrimaryColor transition'>{admin_userName}</p>
                        <span className='block w-[3px] h-[3px] bg-redPrimaryColor rounded-full'></span>
                        <p className='text-xs tracking-tighter text-secondTextColor'>01 آبان 1403</p>
                    </div>
                    <div className="mt-4">
                        <Link to={`/blog/${slug}`}>
                            <h2 className='font-DanaMedium hover:text-redPrimaryColor cursor-pointer transition text-xl line-clamp-2 tracking-tighter text-secondColor h-[56px] dark:text-white dark:hover:text-redPrimaryColor'>{title}</h2>
                        </Link>
                        <p className='tracking-tighter line-clamp-3 text-secondTextColor mt-4 h-[72px]' dangerouslySetInnerHTML={{ __html: cleanDesc }}></p>
                    </div>
                    <div className="mt-[30px] border-t border-[#EBEBEB] dark:border-gray-600 flex items-center justify-between">
                        <svg className='w-5 h-5 mt-5 text-secondTextColor cursor-pointer'>
                            <use xlinkHref='#share'></use>
                        </svg>
                        <svg className='w-6 h-6 text-secondTextColor hover:text-redPrimaryColor transition mt-5 cursor-pointer'>
                            <use xlinkHref='#list'></use>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BoxBlog