import React from 'react'
import Image from 'next/image'

function DevImg({ containerStyles, imgSrc, imgStyle }) {
    return (
        <div className={`${containerStyles}`}>
            <img src={imgSrc} fill priority alt="" width={280} className={`absolute ${imgStyle}`} />
        </div>
    )
}

export default DevImg
