'use client'

import { motion } from 'framer-motion'
import { lighthouseScores } from '@/constants'

const RADIUS = 20
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

function ScoreRing({ value, label, delay = 0 }) {
    const offset = CIRCUMFERENCE - (value / 100) * CIRCUMFERENCE
    const color = value >= 90 ? 'text-emerald-500' : value >= 50 ? 'text-amber-500' : 'text-red-500'
    const bgColor = value >= 90 ? 'stroke-emerald-500/15' : value >= 50 ? 'stroke-amber-500/15' : 'stroke-red-500/15'

    return (
        <div className="flex flex-col items-center gap-1.5">
            <div className="relative w-14 h-14">
                <svg className="w-14 h-14 -rotate-90" viewBox="0 0 48 48">
                    <circle
                        cx="24" cy="24" r={RADIUS}
                        fill="none"
                        strokeWidth="3"
                        className={bgColor}
                    />
                    <motion.circle
                        cx="24" cy="24" r={RADIUS}
                        fill="none"
                        strokeWidth="3"
                        strokeLinecap="round"
                        className={color}
                        style={{ stroke: 'currentColor' }}
                        initial={{ strokeDashoffset: CIRCUMFERENCE }}
                        whileInView={{ strokeDashoffset: offset }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
                        strokeDasharray={CIRCUMFERENCE}
                    />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-sm font-bold">
                    {value}
                </span>
            </div>
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium">{label}</span>
        </div>
    )
}

export default function LighthouseBadge() {
    const scores = [
        { label: 'Perf', value: lighthouseScores.performance },
        { label: 'A11y', value: lighthouseScores.accessibility },
        { label: 'Best P.', value: lighthouseScores.bestPractices },
        { label: 'SEO', value: lighthouseScores.seo },
    ]

    return (
        <div className="flex items-center gap-5 max-sm:gap-3">
            {scores.map((s, i) => (
                <ScoreRing key={s.label} value={s.value} label={s.label} delay={i * 0.15} />
            ))}
        </div>
    )
}
