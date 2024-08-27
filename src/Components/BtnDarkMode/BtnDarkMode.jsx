import React, { useEffect } from 'react'

const BtnDarkMode = () => {

    const darkModeHandler = () => {
        const getThemeInLocal = localStorage.getItem('theme');
        document.documentElement.classList.toggle('dark');
        if (getThemeInLocal !== "dark") {
            localStorage.setItem('theme', "dark");
        } else {
            localStorage.setItem('theme', "light");
        }
    }

    useEffect(() => {
        const getThemeInLocal = localStorage.getItem('theme');
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add(getThemeInLocal)
        }
    })

    return (
        <>
            <div className="wrapper-btn__dark">
                <input type="checkbox" id='dark-mode' onChange={darkModeHandler} />
                <label className='labelDarkMode' htmlFor="dark-mode">
                    <div className="wrapper-icon">
                        <svg className='svg sun'>
                            <use xlinkHref='#sun'></use>
                        </svg>
                        <svg className='svg moon'>
                            <use xlinkHref='#moon'></use>
                        </svg>

                    </div>
                </label>
            </div>
        </>
    )
}

export default BtnDarkMode