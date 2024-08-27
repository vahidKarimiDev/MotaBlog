import React, { useState } from 'react'
import Cover from '../Cover/Cover'

const Header = () => {
    const [isShowSidBar, setIsShowSideBar] = useState(false);

    const showSidBarHandler = () => setIsShowSideBar(true);

    const closeSidBarHandler = () => setIsShowSideBar(false);

    return (
        <header>
            <nav className='py-10'>
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-center gap-10">
                        <img src="/logo_mota.png" className='w-[110px] h-[38px]' alt="Logo Mota ..." />
                        <ul className='hidden md:flex items-center justify-start gap-10 transition text-secondTextColor child-hover:text-zinc-700 tracking-tighter dark:child:text-white'>
                            <li className='active'>
                                <a href="#">صفحه اصلی</a>
                            </li>
                            <li className=''>
                                <a href="#">لایف استایل</a>
                            </li>
                            <li>
                                <a href="#">فرهنگی</a>
                            </li>
                            <li>
                                <a href="#">ویژگی ها</a>
                            </li>
                            <li>
                                <a href="#">تماس با ما</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center gap-4 md:gap-10">
                        <div className="hidden lg:flex items-center gap-5">
                            <a href="#">
                                <svg className='w-4 h-4 '>
                                    <use xlinkHref='#face-book'></use>
                                </svg>
                            </a>
                            <a href="#">
                                <svg className='w-4 h-4 '>
                                    <use xlinkHref='#twitter'></use>
                                </svg>
                            </a>
                            <a href="#">
                                <svg className='w-4 h-4 '>
                                    <use xlinkHref='#instagram'></use>
                                </svg>
                            </a>
                            <a href="#">
                                <svg className='w-4 h-4 '>
                                    <use xlinkHref='#tiktok'></use>
                                </svg>
                            </a>
                            <a href="#">
                                <svg className='w-4 h-4 '>
                                    <use xlinkHref='#youtube'></use>
                                </svg>
                            </a>
                        </div>
                        <div className="backGround-primary rounded-full p-2.5">
                            <svg className='w-5 h-5'>
                                <use xlinkHref='#search'></use>
                            </svg>
                        </div>
                        <div className="backGround-primary rounded-full p-2.5 block md:hidden" onClick={showSidBarHandler}>
                            <svg className='w-5 h-5'>
                                <use xlinkHref='#bars-3'></use>
                            </svg>
                        </div>
                    </div>



                </div>
            </nav>
            {/* Side Bar Mobile */}
            {
                <div className={`fixed ${isShowSidBar ? 'left-0' : '-left-[300px]'} top-0 bottom-0 h-[100vh] p-10 w-[300px] bg-white z-10 transition`}>
                    <svg className='w-6 h-6 cursor-pointer text-zinc-700 mr-auto' onClick={closeSidBarHandler}>
                        <use xlinkHref='#xMark'></use>
                    </svg>
                    <div className="mt-10 mb-20">
                        <img src="/logo_mota.png" className='w-[110px] h-[38px]' alt="" />
                    </div>

                    <ul className='flex flex-col items-start gap-5 text-secondColor child-hover:text-redPrimaryColor transition tracking-tighter'>
                        <li className='text-redPrimaryColor border-b border-gray-200 w-full pb-2'>
                            <a href="#">صفحه اصلی</a>
                        </li>
                        <li className='border-b border-gray-200 w-full pb-2'>
                            <a href="#">لایف استایل</a>
                        </li>
                        <li className=' border-b border-gray-200 w-full pb-2'>
                            <a href="#">فرهنگی</a>
                        </li>
                        <li className=' border-b border-gray-200 w-full pb-2'>
                            <a href="#">ویژگی ها</a>
                        </li>
                        <li className=' border-b border-gray-200 w-full pb-2'>
                            <a href="#">تماس با ما</a>
                        </li>
                    </ul>

                    <div className="flex items-center justify-between gap-5 mt-20">
                        <a href="#">
                            <svg className='w-4 h-4 '>
                                <use xlinkHref='#face-book'></use>
                            </svg>
                        </a>
                        <a href="#">
                            <svg className='w-4 h-4 '>
                                <use xlinkHref='#twitter'></use>
                            </svg>
                        </a>
                        <a href="#">
                            <svg className='w-4 h-4 '>
                                <use xlinkHref='#instagram'></use>
                            </svg>
                        </a>
                        <a href="#">
                            <svg className='w-4 h-4 fill-red-50'>
                                <use xlinkHref='#tiktok'></use>
                            </svg>
                        </a>
                        <a href="#">
                            <svg className='w-4 h-4 fill-red-50'>
                                <use xlinkHref='#youtube'></use>
                            </svg>
                        </a>
                    </div>

                </div>
            }
            {
                isShowSidBar && <Cover close={setIsShowSideBar} />
            }

        </header>
    )
}

export default Header