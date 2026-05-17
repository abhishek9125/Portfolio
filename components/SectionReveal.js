'use client'

import { motion } from 'framer-motion'

function SectionReveal({ children, className = '', delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
            className={`${className} print:!opacity-100 print:!translate-y-0 print:!transform-none`.trim()}
        >
            {children}
        </motion.div>
    )
}

export default SectionReveal
