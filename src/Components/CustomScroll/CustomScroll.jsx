import React, { useEffect, useRef } from 'react'

const CustomScroll = () => {
    const customScrollElm = useRef();

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;

            const documentHeigth = document.body.clientHeight;
            const windoHeight = window.innerHeight;
            const scrollPercent = scrollTop / (documentHeigth - windoHeight);
            const scrollRand = Math.round(scrollPercent * 100)

            customScrollElm.current.style.width = scrollRand + "%"
        })

        return () => window.removeEventListener("scroll", () => {
            const scrollTop = window.scrollY;

            const documentHeigth = document.body.clientHeight;
            const windoHeight = window.innerHeight;
            const scrollPercent = scrollTop / (documentHeigth - windoHeight);
            const scrollRand = Math.round(scrollPercent * 100)

            customScrollElm.current.style.width = scrollRand + "%"
        })
    })

    return (
        <>
            <div ref={customScrollElm} className="customScroll"></div>
        </>
    )
}

export default CustomScroll