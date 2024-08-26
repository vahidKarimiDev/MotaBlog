import React from 'react'

const Cover = ({ close }) => {
    const closeHandler = () => close(false)
    return (
        <div className='fixed inset-0 bg-black/50 z-0' onClick={closeHandler}></div>
    )
}

export default Cover