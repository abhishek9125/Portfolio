import React from 'react'
import Image from 'next/image'

function DevImg({ containerStyles, imgSrc }) {
    return (
        <div className={`${containerStyles}`}>
            <img src={imgSrc} fill priority alt="" width={280} className="absolute top-[19px] left-[80px]" />
        </div>
    )
}

export default DevImg
