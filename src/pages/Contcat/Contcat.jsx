import React from 'react'
import BoxInfo from './Components/BoxInfo/BoxInfo'

const Contcat = () => {
    return (
        <>
            <div className="bg-[#F1F8FF] dark:bg-[#ffffff0d] py-10 text-center flex flex-col items-center justify-center gap-3">
                <h2 className='font-MorabbaBold text-4xl tracking-tight text-secondColor dark:text-white'>تماس با ما</h2>
                <p className='flex items-center justify-center gap-2 tracking-tighter text-sm text-secondTextColor'>
                    مــوتــا
                    <span>/</span>
                    تماس با ما
                </p>
            </div>
            <div className="container">
                <BoxInfo />
            </div>
        </>
    )
}

export default Contcat