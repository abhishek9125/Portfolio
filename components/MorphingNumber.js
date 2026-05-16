'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

function Digit({ value }) {
    return (
        <span className="relative inline-block w-[0.62em] h-[1.1em] overflow-hidden align-bottom">
            <AnimatePresence mode="wait">
                <motion.span
                    key={value}
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    exit={{ y: '-100%', opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    {value}
                </motion.span>
            </AnimatePresence>
        </span>
    )
}

export default function MorphingNumber({
    end,
    suffix = '',
    label,
    duration = 2000,
    className = '',
}) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-40px' })
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        if (!inView) return
        let start = 0
        const steps = Math.min(end, 30)
        const interval = duration / steps
        const timer = setInterval(() => {
            start += Math.ceil(end / steps)
            if (start >= end) {
                setCurrent(end)
                clearInterval(timer)
            } else {
                setCurrent(start)
            }
        }, interval)
        return () => clearInterval(timer)
    }, [inView, end, duration])

    const digits = String(current).split('')

    return (
        <div ref={ref} className={className}>
            <p className="text-2xl xl:text-3xl font-bold text-primary tabular-nums max-sm:text-xl">
                {inView ? (
                    <>
                        {digits.map((d, i) => (
                            <Digit key={`${i}-pos`} value={d} />
                        ))}
                        {suffix && <span>{suffix}</span>}
                    </>
                ) : (
                    `0${suffix}`
                )}
            </p>
            {label && <p className="text-xs text-muted-foreground mt-1 leading-tight">{label}</p>}
        </div>
    )
}
