'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function Word({ children, progress, range }) {
    const opacity = useTransform(progress, range, [0.15, 1])
    return (
        <motion.span style={{ opacity }} className="inline-block mr-[0.25em] transition-colors duration-200">
            {children}
        </motion.span>
    )
}

export default function ScrollHighlight({ text, className = '' }) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start 0.85', 'start 0.35'],
    })
    const words = text.split(' ')

    return (
        <p ref={ref} className={className}>
            {words.map((word, i) => (
                <Word
                    key={`${word}-${i}`}
                    progress={scrollYProgress}
                    range={[i / words.length, (i + 1) / words.length]}
                >
                    {word}
                </Word>
            ))}
        </p>
    )
}
