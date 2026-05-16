'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

export const terminalLines = [
    { prompt: true, text: 'whoami' },
    { output: 'abhishek — full-stack engineer' },
    { prompt: true, text: 'stack --list' },
    { output: 'node · react · next · typescript · redis · gcp' },
    { prompt: true, text: 'status' },
    { output: 'shipping @ flipkart ✓' },
]

function HeroTerminal({ className, animateLines = true, title = 'abhishek — zsh' }) {
    const reduceMotion = useReducedMotion()
    const shouldAnimate = animateLines && !reduceMotion

    return (
        <div
            className={cn(
                'relative rounded-2xl border border-border/70 bg-secondary dark:bg-[#1a1b2e] shadow-2xl overflow-hidden',
                'shadow-[0_20px_50px_-20px_rgba(0,0,0,0.45)] dark:shadow-[0_20px_60px_-24px_rgba(0,0,0,0.7)]',
                'ring-1 ring-primary/15',
                className
            )}
        >
            <motion.div
                className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/25 via-transparent to-primary/10 pointer-events-none"
                aria-hidden
                animate={reduceMotion ? undefined : { opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />

            <div className="relative flex items-center gap-2 px-3.5 py-2.5 border-b border-white/10 bg-black/25">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-1.5 text-[10px] sm:text-xs text-white/50 font-mono truncate">{title}</span>
            </div>

            <div className="relative p-4 sm:p-5 font-mono text-[11px] sm:text-sm space-y-1.5 sm:space-y-2 min-h-[168px] sm:min-h-[160px]">
                {terminalLines.map((line, i) => (
                    <motion.div
                        key={i}
                        className="leading-relaxed"
                        initial={shouldAnimate ? { opacity: 0, x: -6 } : false}
                        animate={shouldAnimate ? { opacity: 1, x: 0 } : false}
                        transition={{ delay: 0.25 + i * 0.18, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {line.prompt ? (
                            <p>
                                <span className="text-primary">➜</span>
                                <span className="text-white/40"> ~ </span>
                                <span className="text-white/90">{line.text}</span>
                            </p>
                        ) : (
                            <p className="text-white/50 pl-3 sm:pl-4">{line.output}</p>
                        )}
                    </motion.div>
                ))}
                <motion.p
                    initial={shouldAnimate ? { opacity: 0 } : false}
                    animate={shouldAnimate ? { opacity: 1 } : false}
                    transition={{ delay: 0.25 + terminalLines.length * 0.18, duration: 0.3 }}
                >
                    <span className="text-primary">➜</span>
                    <span className="text-white/40"> ~ </span>
                    <span
                        className={cn(
                            'inline-block w-2 h-3.5 sm:h-4 bg-primary/80 ml-0.5 align-middle',
                            !reduceMotion && 'animate-pulse'
                        )}
                    />
                </motion.p>
            </div>
        </div>
    )
}

export default HeroTerminal
