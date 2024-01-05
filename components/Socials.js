'use client'

import Link from 'next/link';
import React from 'react'
import { RiCodeBoxFill, RiCodepenFill, RiGithubFill, RiInstagramFill, RiLinkedinFill } from 'react-icons/ri';

const icons = [
    {
        path: '/',
        name: <RiLinkedinFill />
    },
    {
        path: '/',
        name: <RiGithubFill />
    },
    {
        path: '/',
        name: <RiInstagramFill />
    },
];

function Socials({ containerStyles, iconStyles }) {
    return (
        <div className={`${containerStyles}`}>
            {
                icons.map((icon, index) => {
                    return (
                        <Link href={icon.path} key={index}>
                            <div className={`${iconStyles}`}>
                                {icon.name}
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Socials
