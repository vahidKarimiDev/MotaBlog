import React from 'react'

const SendMessage = () => {
    return (
        <>
            <div className="my-16">
                <h4 className='text-2xl font-DanaMedium pb-4 text-secondColor dark:text-white'>ارسال پیام</h4>
                <svg width="33" height="6" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stop-color="#FE4F70"></stop>
                            <stop offset="100%" stop-color="#FFA387"></stop>
                        </linearGradient>
                    </defs>
                    <path d="M33 1c-3.3 0-3.3 4-6.598 4C23.1 5 23.1 1 19.8 1c-3.3 0-3.3 4-6.599 4-3.3 0-3.3-4-6.6-4S3.303 5 0 5" stroke="url(#gradient)" stroke-width="2" fill="none"></path>
                </svg>

                <div className="mt-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between sm:gap-4">
                        <input type="text" className='input' placeholder='نام و نام خوانوادگی' />
                        <input type="text" className='input' placeholder='ایمیل' />
                    </div>
                    <div className="">
                        <input type="text" className='input' placeholder='موضوع' />
                        <textarea className='input rounded-3xl' placeholder='پیام ...' cols={10} rows={4} ></textarea>
                    </div>
                </div>

                <button className='backGround-primary p-2 px-6 rounded-3xl'>ارسال پیام</button>
            </div>
        </>
    )
}

export default SendMessage