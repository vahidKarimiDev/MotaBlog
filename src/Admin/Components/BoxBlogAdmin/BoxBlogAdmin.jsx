import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBlogFromServer } from '../../../Redux/Store/Blogs';

const BoxBlogAdmin = ({ id, title, miniDesc, slug, photos, admin_userName, admin_profile, category }) => {
    const dispatch = useDispatch()

    const [isShowModal, setIsShowModal] = useState(false);
    const [clickId, setClickId] = useState(false)

    const removeBlogHandler = (id) => {
        dispatch(deleteBlogFromServer(id))
    }

    return (
        <>
            <div className="rounded-xl overflow-hidden h-[560px] border border-[#EBEBEB] dark:border-gray-600">
                <div className="w-full relative">
                    <Link to={`/blog/${slug.split(' ').join('-')}`}>
                        <div className="h-[235px] overflow-hidden">
                            <img src={photos[0]} className='w-full h-[235px] overflow-hidden object-cover hover:scale-105 transition duration-300 cursor-pointer' alt="Photo Post ...." />
                        </div>
                    </Link>
                    <span className='backGround-primary rounded-full absolute top-4 right-4 text-sm py-1 px-2.5'>{category}</span>
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
                        <Link to={`/blog/${slug.split(' ').join('-')}`}>
                            <h2 className='font-DanaMedium hover:text-redPrimaryColor cursor-pointer transition text-xl line-clamp-2 tracking-tighter text-secondColor h-[56px] dark:text-white dark:hover:text-redPrimaryColor'>{title}</h2>
                        </Link>
                        <p className='tracking-tighter line-clamp-3 text-secondTextColor mt-4 h-[72px]'>{miniDesc}</p>
                    </div>
                    <div className="mt-[30px] border-t border-[#EBEBEB] dark:border-gray-600 flex items-center justify-between">
                        <svg className='w-5 h-5 mt-5 text-secondTextColor cursor-pointer'>
                            <use xlinkHref='#share'></use>
                        </svg>
                        <div className="relative">
                            <svg onClick={() => {
                                setIsShowModal(preve => !preve)
                                setClickId(id)
                            }} className='w-6 h-6 text-secondTextColor hover:text-redPrimaryColor transition mt-5 cursor-pointer'>
                                <use xlinkHref='#list'></use>
                            </svg>
                            {
                                isShowModal && clickId === id && <div className="bg-white absolute -top-[110%] left-0 border border-red-50 rounded-md">
                                    <ul className='child:m-1 child:cursor-pointer'>
                                        <li onClick={() => removeBlogHandler(id)}>حذف</li>
                                        <li>ویرایش</li>
                                    </ul>
                                </div>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BoxBlogAdmin