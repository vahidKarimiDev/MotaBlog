import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className='mt-[50px]'>
                <div className="container">
                    <div className="border-t border-[#EBEBEB] dark:border-gray-600 flex flex-col md:flex-row gap-8 items-center justify-between py-10">
                        <h4 className='tracking-tighter text-secondTextColor '>© 1403 مــوتــا. طراحی توسط وحید کریمی.</h4>
                        <div className="flex items-center justify-between gap-5">
                            <a href="#">
                                <svg className='w-4 h-4 fill-red-50'>
                                    <use xlinkHref='#face-book'></use>
                                </svg>
                            </a>
                            <a href="#">
                                <svg className='w-4 h-4 fill-red-50'>
                                    <use xlinkHref='#twitter'></use>
                                </svg>
                            </a>
                            <a href="#">
                                <svg className='w-4 h-4 fill-red-50'>
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
                        <button className='flex items-center gap-2 px-6 py-1.5 tracking-tighter border border-[#EBEBEB] dark:border-gray-600 rounded-full text-secondTextColor hover:text-redPrimaryColor dark:hover:border-redPrimaryColor hover:border-redPrimaryColor transition'>
                            <svg className='w-5 h-5 '>
                                <use xlinkHref='#arrow-up'></use>
                            </svg>
                            بازگشت به بالا

                        </button>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer