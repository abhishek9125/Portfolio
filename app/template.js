'use client'

import useScrollProgess from '@/hooks/useScrollProgess'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import React from 'react'

function Template({ children }) {
    const completion = useScrollProgess();
    const pathname = usePathname();

    return (
        <>
            <AnimatePresence mode="wait">
                <motion.main
                    key={pathname}
                    initial={{ opacity: 0, y: 12, scale: 0.995 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.995 }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                >
                    {children}
                </motion.main>
            </AnimatePresence>

            <div
                style={{ width: `${completion}%` }}
                className="fixed z-50 bg-primary h-[2px] top-0 left-0 transition-[width] duration-150 ease-out pointer-events-none"
                aria-hidden
            />
        </>
    )
}

export default Template
