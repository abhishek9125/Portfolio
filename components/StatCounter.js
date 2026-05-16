'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'
import CountUp from 'react-countup'

function StatCounter({ end, suffix = '', label, display, duration = 2.2, className = '' }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-40px' })

    return (
        <div ref={ref} className={className}>
            <p className="text-2xl xl:text-3xl font-bold text-primary tabular-nums max-sm:text-xl">
                {display ? (
                    isInView ? display : '—'
                ) : isInView ? (
                    <>
                        <CountUp end={end} duration={duration} />
                        {suffix}
                    </>
                ) : (
                    `0${suffix}`
                )}
            </p>
            <p className="text-xs text-muted-foreground mt-1 leading-tight">{label}</p>
        </div>
    )
}

export default StatCounter
