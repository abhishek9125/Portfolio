'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'

function Word({ children }) {
    return (
        <motion.span className="inline-block mr-[0.25em] transition-colors duration-200">
            {children}
        </motion.span>
    )
}

export default function ScrollHighlight({ text, className = '' }) {
    const ref = useRef(null)
    const words = text.split(' ')

    return (
        <p ref={ref} className={className}>
            {words.map((word, i) => (
                <Word
                    key={`${word}-${i}`}
                >
                    {word}
                </Word>
            ))}
        </p>
    )
}
