'use client'

import { icons } from '@/constants'
import React from 'react'

function Socials({ containerStyles, iconStyles }) {
    return (
        <div className={`${containerStyles}`}>
            {
                icons.map((icon, index) => {
                    return (
                        <a href={icon.path} key={index} target="_blank">
                            <div className={`${iconStyles}`}>
                                {icon.name}
                            </div>
                        </a>
                    )
                })
            }
        </div>
    )
}

export default Socials
