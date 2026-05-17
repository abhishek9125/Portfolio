import {
    qualificationData,
    skillData,
    contactSecondary,
    resumeAchievements,
    resumeContactItems,
    SITE_URL,
} from '@/constants'

/**
 * Single-column, keyword-rich plain text for ATS / resume parsers.
 * Keep in sync with ResumeVisual content.
 */
export function getResumePlainText() {
    const lines = []
    lines.push('ABHISHEK AGARWAL')
    lines.push('Senior Software Engineer (Frontend Specialist)')
    lines.push('')

    lines.push('CONTACT')
    for (const c of resumeContactItems) {
        const value =
            c.href && (c.kind === 'linkedin' || c.kind === 'github' || c.kind === 'website')
                ? c.href
                : c.text
        lines.push(`${c.label}: ${value}`)
    }
    for (const c of contactSecondary) {
        if (c.label === 'Languages') lines.push(`${c.label}: ${c.text}`)
    }
    lines.push('')

    lines.push(
        'SUMMARY',
        'Senior software engineer (frontend specialist) with experience shipping React, Next.js, React Native, and Node.js platforms at scale (Flipkart, CARS24, Mamaearth). Focus areas: Core Web Vitals and performance, FinTech and e-commerce journeys, platform migrations (Azure to GCP), micro-frontends, design systems, and cloud tooling (GCP, Azure, Redis, Docker, CI/CD).',
        ''
    )

    const experience = qualificationData?.find((q) => q.title === 'experience')?.data ?? []
    lines.push('PROFESSIONAL EXPERIENCE')
    for (const job of experience) {
        lines.push('')
        lines.push(`${job.company} — ${job.role}`)
        lines.push(job.years)
        for (const h of job.highlights) {
            lines.push(`• ${h}`)
        }
    }
    lines.push('')

    lines.push('TECHNICAL SKILLS')
    for (const group of skillData) {
        const names = group.data.map((d) => d.name).join(', ')
        lines.push(`${group.title}: ${names}`)
    }
    lines.push('')

    lines.push('EDUCATION')
    lines.push('Bachelor of Engineering, Computer Engineering — Thapar Institute of Engineering and Technology, Patiala')
    lines.push('CGPA: 9.36 · July 2017 — June 2021')
    lines.push('')

    lines.push('ACHIEVEMENTS & AWARDS')
    for (const line of resumeAchievements) {
        lines.push(`• ${line}`)
    }
    lines.push('')

    lines.push('---')
    lines.push(`Plain-text resume generated from ${SITE_URL.replace(/^https?:\/\//, '')} — use for ATS uploads alongside your PDF.`)

    return lines.join('\n')
}
