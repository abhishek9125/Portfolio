'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const COMMANDS = {
    help: () => [
        'Available commands:',
        '  whoami      — about me',
        '  skills      — tech stack',
        '  experience  — career history',
        '  contact     — get in touch',
        '  projects    — what I\'ve built',
        '  clear       — clear terminal',
        '  exit        — close terminal',
    ],
    whoami: () => [
        'Abhishek Agarwal',
        'Full-stack engineer · SDE II @ Flipkart',
        'Bengaluru, India',
        '5+ years building products end to end.',
    ],
    skills: () => [
        'Core:  TypeScript · React · Next.js · Node.js · React Native',
        'Cloud: GCP · AWS · Azure · Docker · Redis',
        'Tools: Git · Webpack · Vite · Storybook · Jest',
    ],
    experience: () => [
        'Flipkart    — SDE II           (2025 – present)',
        'CARS24      — SDE III          (2024 – 2025)',
        'Mamaearth   — Sr. Software Eng (2021 – 2024)',
    ],
    contact: () => [
        'Email:    abhishek4075@gmail.com',
        'LinkedIn: linkedin.com/in/abhishek9125',
        'GitHub:   github.com/abhishek9125',
        'Web:      abhishekagarwal.info',
    ],
    projects: () => [
        '17+ projects shipped across 4 companies.',
        'Highlights:',
        '  · Flipkart OTA migration — 82% infra cost reduction',
        '  · CARS24 VAS — 280% order growth',
        '  · Mamaearth — TBT 8.2s → 1.3s',
        '',
        'Type "exit" to close and explore the full site.',
    ],
}

export default function TerminalEasterEgg() {
    const [open, setOpen] = useState(false)
    const [history, setHistory] = useState([
        { type: 'output', lines: ['Welcome! Type "help" for commands.'] },
    ])
    const [input, setInput] = useState('')
    const inputRef = useRef(null)
    const scrollRef = useRef(null)

    useEffect(() => {
        const handler = (e) => {
            if (e.key === '`' && !e.target.closest('input, textarea, [contenteditable]')) {
                e.preventDefault()
                setOpen((prev) => !prev)
            }
        }
        window.addEventListener('keydown', handler)
        return () => window.removeEventListener('keydown', handler)
    }, [])

    useEffect(() => {
        if (open) inputRef.current?.focus()
    }, [open])

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    }, [history])

    const run = useCallback(
        (cmd) => {
            const trimmed = cmd.trim().toLowerCase()
            if (!trimmed) return

            const entry = { type: 'input', text: trimmed }

            if (trimmed === 'clear') {
                setHistory([entry, { type: 'output', lines: ['Cleared.'] }])
                return
            }
            if (trimmed === 'exit') {
                setOpen(false)
                return
            }

            const handler = COMMANDS[trimmed]
            const output = handler
                ? { type: 'output', lines: handler() }
                : { type: 'output', lines: [`command not found: ${trimmed}. Type "help" for commands.`] }

            setHistory((h) => [...h, entry, output])
        },
        []
    )

    const handleSubmit = (e) => {
        e.preventDefault()
        run(input)
        setInput('')
    }

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) setOpen(false)
                    }}
                >
                    <motion.div
                        initial={{ scale: 0.95, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.95, y: 20 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full max-w-xl rounded-2xl border border-white/10 bg-[#1a1b2e] shadow-2xl overflow-hidden"
                    >
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-black/30">
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="w-3 h-3 rounded-full bg-[#ff5f57] hover:brightness-110 transition-all"
                                aria-label="Close terminal"
                            />
                            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                            <span className="ml-2 text-xs text-white/40 font-mono">
                                abhishek — easter-egg
                            </span>
                        </div>

                        <div
                            ref={scrollRef}
                            className="p-4 font-mono text-sm space-y-1 max-h-[60vh] overflow-y-auto"
                        >
                            {history.map((entry, i) =>
                                entry.type === 'input' ? (
                                    <p key={i}>
                                        <span className="text-primary">➜</span>
                                        <span className="text-white/40"> ~ </span>
                                        <span className="text-white/90">{entry.text}</span>
                                    </p>
                                ) : (
                                    entry.lines.map((line, j) => (
                                        <p key={`${i}-${j}`} className="text-white/55 pl-4">
                                            {line}
                                        </p>
                                    ))
                                )
                            )}

                            <form onSubmit={handleSubmit} className="flex items-center">
                                <span className="text-primary">➜</span>
                                <span className="text-white/40"> ~ </span>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    className="flex-1 bg-transparent text-white/90 outline-none ml-1 caret-primary"
                                    spellCheck={false}
                                    autoComplete="off"
                                />
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
