import React from 'react'
import { useSwiper } from 'swiper/react'

const NextAndPreveBtn = () => {

    const swiper = useSwiper();

    return (
        <>
            <button onClick={() => swiper.slideNext()} className='absolute bg-white/30 right-4 w-12 h-12 flex items-center justify-center transition duration-300 rounded-full z-10 top-0 bottom-0 m-auto bg-red-500 group hover:bg-white'>
                <svg className='w-6 h-6 text-white group-hover:text-redPrimaryColor transition duration-300'>
                    <use xlinkHref='#arrow-left'></use>
                </svg>
            </button>
            <button onClick={() => swiper.slidePrev()} className='absolute bg-white/30 left-4 w-12 h-12 flex items-center justify-center transition duration-300 rounded-full z-10 top-0 bottom-0 m-auto bg-red-500 group hover:bg-white'>
                <svg className='w-6 h-6 text-white group-hover:text-redPrimaryColor transition duration-300 rotate-180'>
                    <use xlinkHref='#arrow-left'></use>
                </svg>
            </button>
        </>
    )
}

export default NextAndPreveBtn