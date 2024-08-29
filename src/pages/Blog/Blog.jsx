import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper';
import { Autoplay } from "swiper/modules"
import "swiper/css"
import NextAndPreveBtn from './Components/NextAndPreveBtn/NextAndPreveBtn';

const Blog = () => {
    SwiperCore.use([Autoplay]);

    return (
        <>
            <div className="container mt-14">
                <p className='flex items-center justify-start gap-2 text-secondTextColor text-sm tracking-tight pb-3'>
                    مــوتــا
                    <span>/</span>
                    پرطرفدار
                    <span>/</span>
                    ۶۰ کاری که باید فوراً در مورد ساختمان انجام دهید
                </p>
                <div className="flex items-start justify-between gap-6">
                    <div className="w-[70%] rounded-xl">
                        <h1 className='font-MorabbaBold text-3xl font-bold text-secondColor dark:text-white '>۶۰ کاری که باید فوراً در مورد ساختمان انجام دهید</h1>
                        <div className="flex items-center justify-start gap-4 mt-6 ">
                            <img src="/images/avatar.png" className='w-8 h-8 object-cover rounded-full' alt="Authre Blog Image ..." />
                            <p className='text-secondTextColor text-sm  tracking-tighter cursor-pointer hover:text-redPrimaryColor transition'>وحید کریمی</p>
                            <span className='block w-[3px] h-[3px] bg-redPrimaryColor rounded-full'></span>
                            <p className='text-secondTextColor text-sm  tracking-tighter cursor-pointer hover:text-redPrimaryColor transition'>پرطرفدار</p>
                            <span className='block w-[3px] h-[3px] bg-redPrimaryColor rounded-full'></span>
                            <p className='text-secondTextColor text-sm  tracking-tighter'>01 آبان 1403</p>
                            <span className='block w-[3px] h-[3px] bg-redPrimaryColor rounded-full'></span>
                            <div className="flex items-center gap-1 text-secondTextColor">
                                <svg className='w-5 h-5 '>
                                    <use xlinkHref='#message'></use>
                                </svg>
                                <span className=''>(0)</span>
                            </div>
                        </div>
                        <Swiper
                            spaceBetween={16}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{
                                delay: 1000,
                                pauseOnMouseEnter: true,
                                disableOnInteraction: false
                            }}
                            className='mt-[30px] relative rounded-xl'
                        >
                            <SwiperSlide>
                                <img src="/images/img-1.jpg" className='w-full h-[460px] object-cover rounded-xl' alt="Photo Blogs ..." />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/images/img-2.jpg" className='w-full h-[460px] object-cover rounded-xl' alt="Photo Blogs ..." />
                            </SwiperSlide>
                            <NextAndPreveBtn />
                        </Swiper>
                        <div className="text-secondTextColor dark:text-white/90 flex flex-col gap-4 mt-8 font-medium border-b border-[#EBEBEB] pb-10 dark:border-gray-600">
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی <span className='text-redPrimaryColor'>تکنولوژی</span> مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                            <img src="/images/img-3.jpg" className='w-full h-[460px] rounded-xl object-cover' alt="Photo Blog ..." />
                            <h2 className='text-2xl font-DanaBold text-secondColor dark:text-white mt-4'>سوال رقت انگیزی روی گونه اش نشست</h2>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                        </div>
                        <div className="mt-8 flex items-start justify-start gap-4">
                            <p className='tracking-tight text-secondTextColor pb-4'>اشتراک گذاری نوشته در:</p>
                            <div className="flex items-start justify-start gap-3">
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
                        </div>

                        <div className="bg-[#F1F8FF] dark:bg-[#ffffff0d] w-full p-10 flex items-center justify-start gap-6 rounded-xl mt-6">
                            <img src="/images/avatar.png" className='w-[100px] h-[100px] rounded-full' alt="Auther Blog..." />
                            <div className="">
                                <h4 className='text-lg font-DanaBold tracking-tighter text-secondColor dark:text-white pb-3'>وحید کریمی</h4>
                                <p className='text-base text-secondTextColor'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
                                <div className="flex items-start justify-start gap-5 mt-4">
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
                            </div>
                        </div>
                    </div>
                    <div className="w-[30%] h-[100px] rounded-xl bg-green-500"></div>
                </div>
            </div>
        </>
    )
}

export default Blog