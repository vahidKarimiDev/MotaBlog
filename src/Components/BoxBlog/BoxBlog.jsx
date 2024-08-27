import React from 'react'

const BoxBlog = () => {
    return (
        <>
            <div className="rounded-xl overflow-hidden h-[560px] border border-[#EBEBEB]">
                <div className="w-full h-[235px] overflow-hidden">
                    <img src="/images/image_post.jpg" className='w-full h-[235px] object-cover hover:scale-105 transition duration-300 cursor-pointer' alt="Photo Post ...." />
                </div>
                <div className="p-[30px]">
                    <div className="flex items-center justify-start gap-3">
                        <img src="/images/avatar.png" className='w-9 h-9 object-cover' alt="" />
                        <p className='text-secondTextColor text-xs tracking-tighter hover:text-redPrimaryColor transition'>وحید کریمی</p>
                        <span className='block w-[3px] h-[3px] bg-redPrimaryColor rounded-full'></span>
                        <p className='text-xs tracking-tighter text-secondTextColor'>01 آبان 1403</p>
                    </div>
                    <div className="mt-4">
                        <h2 className='font-DanaMedium hover:text-redPrimaryColor cursor-pointer transition text-xl line-clamp-2 tracking-tighter text-secondColor h-[56px]'>۶۰ کاری که باید فوراً در مورد ساختمان انجام دهید</h2>
                        <p className='tracking-tighter line-clamp-3 text-secondTextColor mt-4 h-[72px]'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و…</p>
                    </div>
                    <div className="mt-[30px] border-t border-[#EBEBEB] flex items-center justify-between">
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