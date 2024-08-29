import React from 'react'
import { useSwiper } from 'swiper/react'

const NextAndPrevBtnEvents = () => {

    const swiper = useSwiper()

    return (
        <>
            <div className="w-fit flex items-center justify-center gap-3  mx-auto mt-5">
                <button onClick={() => swiper.slideNext()} className='border border-[#EBEBEB] w-9 h-9 flex items-center justify-center transition duration-300 rounded-full z-10 m-auto hover:border-redPrimaryColor group '>
                    <svg className='w-5 h-5 text-secondColor group-hover:text-redPrimaryColor dark:text-white transition duration-300'>
                        <use xlinkHref='#arrow-left'></use>
                    </svg>
                </button>
                <button onClick={() => swiper.slidePrev()} className='border border-[#EBEBEB] w-9 h-9 flex items-center justify-center transition duration-300 rounded-full z-10 m-auto hover:border-redPrimaryColor group '>
                    <svg className='w-5 h-5 text-secondColor group-hover:text-redPrimaryColor dark:text-white transition duration-300 rotate-180'>
                        <use xlinkHref='#arrow-left'></use>
                    </svg>
                </button>
            </div>
        </>
    )
}

export default NextAndPrevBtnEvents