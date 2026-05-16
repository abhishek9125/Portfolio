import React from 'react'
import Socials from './Socials'
import { lighthouseScores } from '@/constants'

function Footer() {
    const scores = [
        { label: 'Perf', value: lighthouseScores.performance },
        { label: 'A11y', value: lighthouseScores.accessibility },
        { label: 'BP', value: lighthouseScores.bestPractices },
        { label: 'SEO', value: lighthouseScores.seo },
    ]

    return (
        <footer className="bg-secondary py-10">
            <div className="container mx-auto">
                <div className="flex flex-col items-center gap-6">
                    <div className="flex flex-wrap justify-center gap-3">
                        {scores.map((s) => (
                            <div
                                key={s.label}
                                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-sm"
                                title={`Lighthouse ${s.label} — audited ${lighthouseScores.auditedAt}`}
                            >
                                <span className="text-white/60 text-xs uppercase tracking-wider">{s.label}</span>
                                <span className="font-bold text-primary">{s.value}</span>
                            </div>
                        ))}
                    </div>
                    <Socials
                        containerStyles="flex gap-x-6"
                        iconStyles="text-primary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary transition-all"
                    />
                    <p className="text-muted-foreground text-sm text-center">
                        Copyright &copy; {new Date().getFullYear()} Abhishek Agarwal. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
