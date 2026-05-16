'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionReveal from './SectionReveal'

const quotes = [
    { text: 'Make it work, make it right, make it fast.', author: 'Kent Beck' },
    { text: 'Simplicity is the ultimate sophistication.', author: 'Leonardo da Vinci' },
    { text: 'Code is read far more often than it is written.', author: 'Guido van Rossum' },
    { text: 'First, solve the problem. Then, write the code.', author: 'John Johnson' },
    { text: 'The best code is no code at all.', author: 'Jeff Atwood' },
    { text: 'Premature optimization is the root of all evil.', author: 'Donald Knuth' },
]

export default function PhilosophyQuotes() {
    const [idx, setIdx] = useState(0)

    useEffect(() => {
        const id = setInterval(() => setIdx((i) => (i + 1) % quotes.length), 5000)
        return () => clearInterval(id)
    }, [])

    return (
        <section className="section-padding border-y border-border/40 bg-accent/10 dark:bg-secondary/10">
            <div className="container mx-auto">
                <SectionReveal className="text-center max-w-2xl mx-auto">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-medium mb-4">
                        Engineering philosophy
                    </p>
                    <div className="min-h-[80px] flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.4 }}
                            >
                                <blockquote className="text-xl sm:text-2xl font-medium italic text-foreground/80 leading-relaxed">
                                    &ldquo;{quotes[idx].text}&rdquo;
                                </blockquote>
                                <p className="text-sm text-muted-foreground mt-3">
                                    — {quotes[idx].author}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </SectionReveal>
            </div>
        </section>
    )
}
