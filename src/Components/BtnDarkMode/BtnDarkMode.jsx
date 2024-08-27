import React from 'react'

const BtnDarkMode = () => {
    const darkModeHandler = () => {
        document.documentElement.classList.toggle('dark');
    }

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