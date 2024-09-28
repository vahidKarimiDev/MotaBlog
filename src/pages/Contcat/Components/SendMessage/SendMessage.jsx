import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createContactToServer } from '../../../../Redux/Store/Contact'

const SendMessage = () => {
    const dispatch = useDispatch()

    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [text, setText] = useState('')

    const sendContactUser = (e) => {
        e.preventDefault();

        const newContactInfo = {
            userName,
            email,
            subject,
            text,
        }
        dispatch(createContactToServer(newContactInfo));
        setUserName("")
        setEmail("")
        setSubject("")
        setText("")
    }

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
                    <path d="M33 1c-3.3 0-3.3 4-6.598 4C23.1 5 23.1 1 19.8 1c-3.3 0-3.3 4-6.599 4-3.3 0-3.3-4-6.6-4S3.303 5 0 5" stroke="url(#gradient)" strokeWidth="2" fill="none"></path>
                </svg>

                <div className="mt-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between sm:gap-4">
                        <input type="text" value={userName} onChange={e => setUserName(e.target.value)} className='input' placeholder='نام و نام خوانوادگی' />
                        <input type="text" value={email} onChange={e => setEmail(e.target.value)} className='input' placeholder='ایمیل' />
                    </div>
                    <div className="">
                        <input type="text" value={subject} onChange={e => setSubject(e.target.value)} className='input' placeholder='موضوع' />
                        <textarea value={text} onChange={e => setText(e.target.value)} className='input rounded-3xl' placeholder='پیام ...' cols={10} rows={4} ></textarea>
                    </div>
                </div>

                <button className='backGround-primary p-2 px-6 rounded-3xl' onClick={sendContactUser}>ارسال پیام</button>
            </div>
        </>
    )
}

export default SendMessage