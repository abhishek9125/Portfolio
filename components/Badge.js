'use client'

import { motion } from 'framer-motion'
import React from 'react'
import CountUp from 'react-countup'

function Badge({ containerStyles, icon, endCountNum, endCountText, badgeText }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className={`badge ${containerStyles}`}
        >
            <div className="text-3xl text-primary">
                {icon}
            </div>
            <div className="flex items-center gap-x-2">
                <div className="text-4xl leading-none font-bold text-primary">
                    <CountUp end={endCountNum} delay={0.8} duration={2.5} />
                    {endCountText}
                </div>
                <div className="max-w-[70px] leading-tight text-[15px] font-medium text-foreground">
                    {badgeText}
                </div>
            </div>
        </motion.div>
    )
}

export default Badge
