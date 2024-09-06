import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper';
import { Autoplay } from "swiper/modules"
import "swiper/css"
import NextAndPreveBtn from './Components/NextAndPreveBtn/NextAndPreveBtn';
import NextAndPrevBtnEvents from './Components/NextAndPrevBtnEvents/NextAndPrevBtnEvents';

const Blog = () => {
    SwiperCore.use([Autoplay]);

    return (
        <>
            <div className="container mt-14">
                <p className='flex items-center justify-start gap-2 text-secondTextColor text-xs sm:text-sm tracking-tight pb-3'>
                    مــوتــا
                    <span>/</span>
                    پرطرفدار
                    <span>/</span>
                    ۶۰ کاری که باید فوراً در مورد ساختمان انجام دهید
                </p>
                <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
                    <div className="w-full lg:w-[65%] rounded-xl">
                        <h1 className='font-MorabbaBold text-2xl sm:text-3xl font-bold text-secondColor dark:text-white '>۶۰ کاری که باید فوراً در مورد ساختمان انجام دهید</h1>
                        <div className="flex items-center justify-start gap-3 sm:gap-4 mt-6 ">
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
                                delay: 3000,
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
                        <div className="text-secondTextColor dark:text-white/90 flex flex-col gap-4 mt-8 font-medium border-b border-[#EBEBEB] dark:border-gray-600 pb-10 dark:border-gray-600">
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی <span className='text-redPrimaryColor'>تکنولوژی</span> مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                            <img src="/images/img-3.jpg" className='w-full h-[460px] rounded-xl object-cover' alt="Photo Blog ..." />
                            <h2 className='text-2xl font-DanaBold text-secondColor dark:text-white mt-4'>سوال رقت انگیزی روی گونه اش نشست</h2>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                        </div>
                        <div className="mt-8 flex items-start justify-start gap-4">
                            <p className='tracking-tight text-secondTextColor dark:text-white pb-4'>اشتراک گذاری نوشته در:</p>
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

                        <div className="bg-[#F1F8FF] dark:bg-[#ffffff0d] w-full p-10 flex flex-col sm:flex-row items-center justify-start gap-6 rounded-xl mt-6">
                            <img src="/images/avatar.png" className='w-[100px] h-[100px] rounded-full' alt="Auther Blog..." />
                            <div className="text-center sm:text-right">
                                <h4 className='text-lg font-DanaBold tracking-tighter text-secondColor dark:text-white pb-3'>وحید کریمی</h4>
                                <p className='text-base text-secondTextColor'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
                                <div className="flex items-start justify-center sm:justify-start gap-5 mt-4">
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
                    <div className="w-full lg:w-[35%] flex flex-col gap-10">
                        <div className="border border-[#EBEBEB] dark:border-gray-600 rounded-xl py-[35px] px-[30px]">
                            <p className='font-DanaMedium text-center pb-3 text-xl text-secondColor dark:text-white'>نوشته های محبوب</p>
                            <div className="flex items-center justify-center w-full">
                                <svg width="33" height="6" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stop-color="#FE4F70"></stop>
                                            <stop offset="100%" stop-color="#FFA387"></stop>
                                        </linearGradient>
                                    </defs>
                                    <path d="M33 1c-3.3 0-3.3 4-6.598 4C23.1 5 23.1 1 19.8 1c-3.3 0-3.3 4-6.599 4-3.3 0-3.3-4-6.6-4S3.303 5 0 5" stroke="url(#gradient)" stroke-width="2" fill="none"></path>
                                </svg>
                            </div>
                            <div className="mt-8 flex flex-col items-start justify-start child:py-4">
                                <div className="customBorder relative flex items-center justify-start gap-3 w-full">
                                    <div className="relative">
                                        <img src="/images/img-4.jpg" className='w-[60px] h-[60px] object-cover rounded-full' alt="Blog Photo ..." />
                                        <span className='absolute -top-2 right-0 border-2 shadow-inner shadow-red-600 border-white rounded-full w-6 h-6 bg-redPrimaryColor flex items-center justify-center text-sm text-white'>1</span>
                                    </div>
                                    <div className="">
                                        <h4 className='text-secondColor text-base tracking-tighter font-DanaMedium hover:text-redPrimaryColor transition cursor-pointer dark:text-white '>۳ راه آسان برای سریعتر کردن آیفون</h4>
                                        <span className='block text-secondTextColor text-sm tracking-tighter mt-1'>28 مرداد 1401</span>
                                    </div>
                                </div>
                                <div className="customBorder relative flex items-center justify-start gap-3 w-full">
                                    <div className="relative">
                                        <img src="/images/img-4.jpg" className='w-[60px] h-[60px] object-cover rounded-full' alt="Blog Photo ..." />
                                        <span className='absolute -top-2 right-0 border-2 shadow-inner shadow-red-600 border-white rounded-full w-6 h-6 bg-redPrimaryColor flex items-center justify-center text-sm text-white'>1</span>
                                    </div>
                                    <div className="">
                                        <h4 className='text-secondColor text-base tracking-tighter font-DanaMedium hover:text-redPrimaryColor transition cursor-pointer dark:text-white'>۳ راه آسان برای سریعتر کردن آیفون</h4>
                                        <span className='block text-secondTextColor text-sm tracking-tighter mt-1'>28 مرداد 1401</span>
                                    </div>
                                </div>
                                <div className="customBorder relative flex items-center justify-start gap-3 w-full">
                                    <div className="relative">
                                        <img src="/images/img-4.jpg" className='w-[60px] h-[60px] object-cover rounded-full' alt="Blog Photo ..." />
                                        <span className='absolute -top-2 right-0 border-2 shadow-inner shadow-red-600 border-white rounded-full w-6 h-6 bg-redPrimaryColor flex items-center justify-center text-sm text-white'>1</span>
                                    </div>
                                    <div className="">
                                        <h4 className='text-secondColor text-base tracking-tighter font-DanaMedium hover:text-redPrimaryColor transition cursor-pointer dark:text-white'>۳ راه آسان برای سریعتر کردن آیفون</h4>
                                        <span className='block text-secondTextColor text-sm tracking-tighter mt-1'>28 مرداد 1401</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border border-[#EBEBEB] dark:border-gray-600 rounded-xl py-[35px] px-[30px] flex flex-col items-center">
                            <p className='font-DanaMedium text-center pb-3 text-xl text-secondColor dark:text-white'>خبرنامه</p>
                            <div className="flex items-center justify-center w-full">
                                <svg width="33" height="6" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stop-color="#FE4F70"></stop>
                                            <stop offset="100%" stop-color="#FFA387"></stop>
                                        </linearGradient>
                                    </defs>
                                    <path d="M33 1c-3.3 0-3.3 4-6.598 4C23.1 5 23.1 1 19.8 1c-3.3 0-3.3 4-6.599 4-3.3 0-3.3-4-6.6-4S3.303 5 0 5" stroke="url(#gradient)" stroke-width="2" fill="none"></path>
                                </svg>
                            </div>
                            <div className="w-full mt-8">
                                <ul className='w-full flex items-center flex-col gap-3'>
                                    <li className='customBorder relative pt-3 w-full flex items-center justify-between'>
                                        <div className="flex items-center gap-5">
                                            <svg className='w-5 h-5 rotate-180 text-redPrimaryColor'>
                                                <use xlinkHref='#arrow-left'></use>
                                            </svg>
                                            <p className='font-DanaMedium text-secondColor cursor-pointer hover:text-redPrimaryColor transition dark:text-white'>الهام بخش</p>
                                        </div>
                                        <span className='text-secondTextColor '>(2)</span>
                                    </li>
                                    <li className='customBorder relative pt-3 w-full flex items-center justify-between'>
                                        <div className="flex items-center gap-5">
                                            <svg className='w-5 h-5 rotate-180 text-redPrimaryColor'>
                                                <use xlinkHref='#arrow-left'></use>
                                            </svg>
                                            <p className='font-DanaMedium text-secondColor cursor-pointer hover:text-redPrimaryColor transition dark:text-white'>الهام بخش</p>
                                        </div>
                                        <span className='text-secondTextColor '>(2)</span>
                                    </li>
                                    <li className='customBorder relative pt-3 w-full flex items-center justify-between'>
                                        <div className="flex items-center gap-5">
                                            <svg className='w-5 h-5 rotate-180 text-redPrimaryColor'>
                                                <use xlinkHref='#arrow-left'></use>
                                            </svg>
                                            <p className='font-DanaMedium text-secondColor cursor-pointer hover:text-redPrimaryColor transition dark:text-white'>الهام بخش</p>
                                        </div>
                                        <span className='text-secondTextColor '>(2)</span>
                                    </li>
                                    <li className='customBorder relative pt-3 w-full flex items-center justify-between'>
                                        <div className="flex items-center gap-5">
                                            <svg className='w-5 h-5 rotate-180 text-redPrimaryColor'>
                                                <use xlinkHref='#arrow-left'></use>
                                            </svg>
                                            <p className='font-DanaMedium text-secondColor cursor-pointer hover:text-redPrimaryColor transition dark:text-white'>الهام بخش</p>
                                        </div>
                                        <span className='text-secondTextColor '>(2)</span>
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="border border-[#EBEBEB] dark:border-gray-600 rounded-xl py-[35px] px-[30px] flex flex-col items-center">
                            <p className='font-DanaMedium text-center pb-3 text-xl text-secondColor dark:text-white'>خبرنامه</p>
                            <div className="flex items-center justify-center w-full">
                                <svg width="33" height="6" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stop-color="#FE4F70"></stop>
                                            <stop offset="100%" stop-color="#FFA387"></stop>
                                        </linearGradient>
                                    </defs>
                                    <path d="M33 1c-3.3 0-3.3 4-6.598 4C23.1 5 23.1 1 19.8 1c-3.3 0-3.3 4-6.599 4-3.3 0-3.3-4-6.6-4S3.303 5 0 5" stroke="url(#gradient)" stroke-width="2" fill="none"></path>
                                </svg>
                            </div>
                            <div className="text-secondColor font-DanaMedium mt-6 text-[17px] dark:text-white">به 70000 مشترک بپیوندید!</div>
                            <input type="text" placeholder='آدرس ایمیل ...' className='input py-2 text-sm my-2 text-center' />
                            <button className='backGround-primary w-full mt-1 rounded-full py-2 font-DanaMedium'>عضویت</button>
                            <span className='text-center text-sm text-secondTextColor mt-5'>با ثبت نام، با سیاست حفظ حریم <span className='text-redPrimaryColor'>خصوصی ما</span> موافقت می کنید</span>

                        </div>

                        <div className=" border border-[#EBEBEB] dark:border-gray-600 rounded-xl py-[35px] px-[30px] flex flex-col items-center">
                            <p className='font-DanaMedium text-center pb-3 text-xl text-secondColor dark:text-white'>جشنواره ها</p>
                            <div className="flex items-center justify-center w-full">
                                <svg width="33" height="6" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stop-color="#FE4F70"></stop>
                                            <stop offset="100%" stop-color="#FFA387"></stop>
                                        </linearGradient>
                                    </defs>
                                    <path d="M33 1c-3.3 0-3.3 4-6.598 4C23.1 5 23.1 1 19.8 1c-3.3 0-3.3 4-6.599 4-3.3 0-3.3-4-6.6-4S3.303 5 0 5" stroke="url(#gradient)" stroke-width="2" fill="none"></path>
                                </svg>
                            </div>
                            <div className="w-full">
                                <Swiper
                                    spaceBetween={16}
                                    slidesPerView={1}
                                    loop={true}
                                    autoplay={{
                                        delay: 3000,
                                        pauseOnMouseEnter: true,
                                        disableOnInteraction: false
                                    }}
                                    className='mt-8 rounded-xl w-full'
                                >
                                    <SwiperSlide>
                                        <div className="w-full">
                                            <div className="relative">
                                                <img src="/images/img-3.jpg" className='w-full h-[200px] object-cover rounded-xl' alt="Events Blog ..." />
                                                <span className='absolute top-4 right-5 active py-1 px-3.5 text-[13px] tracking-tight'>الهام بخش</span>
                                            </div>
                                            <h3 className='text-secondColor text-lg mt-4 line-clamp-2 h-[56px] font-DanaBold cursor-pointer hover:text-redPrimaryColor transition dark:text-white'>در حال حاضر چه کاری می توانید در مورد مد انجام دهید</h3>
                                            <div className="flex items-center justify-start gap-4 mt-3">
                                                <p className='text-secondTextColor text-sm  tracking-tighter cursor-pointer hover:text-redPrimaryColor transition'>وحید کریمی</p>
                                                <span className='block w-[3px] h-[3px] bg-redPrimaryColor rounded-full'></span>
                                                <p className='text-secondTextColor text-sm  tracking-tighter'>26 مرداد 1403</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="w-full">
                                            <div className="relative">
                                                <img src="/images/img-3.jpg" className='w-full h-[200px] object-cover rounded-xl' alt="Events Blog ..." />
                                                <span className='absolute top-4 right-5 active py-1 px-3.5 text-[13px] tracking-tight'>الهام بخش</span>
                                            </div>
                                            <h3 className='text-secondColor text-lg mt-4 line-clamp-2 h-[56px] font-DanaBold cursor-pointer hover:text-redPrimaryColor transition dark:text-white'>در حال حاضر چه کاری می توانید در مورد مد انجام دهید</h3>
                                            <div className="flex items-center justify-start gap-4 mt-3">
                                                <p className='text-secondTextColor text-sm  tracking-tighter cursor-pointer hover:text-redPrimaryColor transition'>وحید کریمی</p>
                                                <span className='block w-[3px] h-[3px] bg-redPrimaryColor rounded-full'></span>
                                                <p className='text-secondTextColor text-sm  tracking-tighter'>26 مرداد 1403</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <NextAndPrevBtnEvents />

                                </Swiper>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog