import React from 'react'

const BoxInfo = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20">
                <div className="flex items-center justify-start gap-6 border border-[#EBEBEB] dark:border-gray-600 rounded-xl p-6">
                    <div className="active rounded-xl p-0 w-12 h-12 flex items-center justify-center ">
                        <svg className='w-7 h-7'>
                            <use xlinkHref='#phone'></use>
                        </svg>
                    </div>
                    <div className="">
                        <p className='font-DanaBold text-lg text-secondColor dark:text-white'>تلفن</p>
                        <span className='text-secondTextColor font-DanaMedium text-sm'>021-33226199</span>
                    </div>

                </div>
                <div className="flex items-center justify-start gap-6 border border-[#EBEBEB] dark:border-gray-600 rounded-xl p-6">
                    <div className="active rounded-xl p-0 w-12 h-12 flex items-center justify-center ">
                        <svg className='w-7 h-7'>
                            <use xlinkHref='#at-symbol'></use>
                        </svg>
                    </div>
                    <div className="">
                        <p className='font-DanaBold text-lg text-secondColor dark:text-white'>ایمیل</p>
                        <span className='text-secondTextColor font-DanaMedium text-sm'>amirlink416@gmail.com</span>
                    </div>

                </div>
                <div className="flex items-center justify-start gap-6 border border-[#EBEBEB] dark:border-gray-600 rounded-xl p-6">
                    <div className="active rounded-xl p-0 w-12 h-12 flex items-center justify-center ">
                        <svg className='w-7 h-7'>
                            <use xlinkHref='#location'></use>
                        </svg>
                    </div>
                    <div className="">
                        <p className='font-DanaBold text-lg text-secondColor dark:text-white'>آدرس</p>
                        <span className='text-secondTextColor font-DanaMedium text-sm'>سیستان و بلوچستان</span>
                    </div>

                </div>
            </div>
        </>
    )
}

export default BoxInfo