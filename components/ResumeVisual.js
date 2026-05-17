'use client'

import { motion } from 'framer-motion'
import SectionReveal from '@/components/SectionReveal'
import { qualificationData, skillData, resumeAchievements, resumeContactItems, RESUME_LINK } from '@/constants'
import {
    Download, Mail, MapPin, Globe, Briefcase,
    GraduationCap, Code2, Calendar, Phone, Linkedin, Github, Award,
} from 'lucide-react'

const CONTACT_ICONS = {
    email: Mail,
    phone: Phone,
    location: MapPin,
    website: Globe,
    linkedin: Linkedin,
    github: Github,
}

const TIER_DOTS = { core: 5, proficient: 4 }

function SkillDots({ tier }) {
    const filled = TIER_DOTS[tier] ?? 3
    return (
        <span className="inline-flex gap-[3px] ml-auto shrink-0" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
                <span
                    key={i}
                    className={`resume-skill-dot w-1.5 h-1.5 rounded-full ${
                        i < filled
                            ? 'bg-primary'
                            : 'bg-border dark:bg-white/10 resume-skill-dot-empty'
                    }`}
                />
            ))}
        </span>
    )
}

function TimelineEntry({ entry, index }) {
    const headingId = `exp-${index}-company`
    return (
        <SectionReveal delay={index * 0.08}>
            <section
                aria-labelledby={headingId}
                className="relative pl-7 pb-8 last:pb-2 print:pb-3 print:last:pb-1 group"
            >
                <span
                    className="resume-timeline-line absolute left-[5px] top-2 bottom-0 w-px bg-border dark:bg-white/10 group-last:hidden"
                    aria-hidden
                />
                <span
                    className="absolute left-0 top-[7px] w-[11px] h-[11px] rounded-full border-2 border-primary bg-background dark:bg-card"
                    aria-hidden
                />

                <div className="resume-job-meta-row flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2 print:mb-0.5">
                    <div>
                        <h3 id={headingId} className="text-lg font-bold tracking-tight text-foreground print:text-[12.5pt]">
                            {entry.company}
                        </h3>
                        <p className="text-sm text-primary font-medium print:text-[10.5pt] print:leading-tight">{entry.role}</p>
                    </div>
                    <p className="text-xs text-muted-foreground flex items-center gap-1.5 shrink-0 m-0 print:text-[9.5pt] print:gap-0.5">
                        <Calendar size={12} className="print:hidden" aria-hidden />
                        <span>{entry.years}</span>
                    </p>
                </div>

                <ul className="resume-exp-highlights list-disc pl-5 space-y-1.5 mt-2 text-sm text-muted-foreground marker:text-primary print:mt-1.5 print:space-y-1 print:leading-snug">
                    {entry.highlights.map((h, i) => (
                        <li key={i} className="leading-relaxed">
                            {h}
                        </li>
                    ))}
                </ul>
            </section>
        </SectionReveal>
    )
}

export default function ResumeVisual() {
    const experience =
        qualificationData?.find((q) => q.title === 'experience')?.data ?? []
    const emailMeta = resumeContactItems?.find((c) => c.kind === 'email')
    const locationMeta = resumeContactItems?.find((c) => c.kind === 'location')

    return (
        <article
            className="resume-card rounded-2xl border border-border/60 bg-card shadow-xl overflow-hidden print:shadow-none print:border-0 bg-white dark:bg-card text-foreground"
            aria-label="Resume: Abhishek Agarwal, Senior Software Engineer"
            itemScope
            itemType="https://schema.org/Person"
        >
            <meta itemProp="name" content="Abhishek Agarwal" />
            {emailMeta?.text && <meta itemProp="email" content={emailMeta.text} />}
            {locationMeta?.text && (
                <span className="sr-only" itemProp="address">
                    {locationMeta.text}
                </span>
            )}
            <style>{`
                /* Print = same two-column layout as desktop: never rely on lg: breakpoint (print viewport is often narrow). */
                @media print {
                    .resume-card,
                    .resume-card * {
                        -webkit-print-color-adjust: exact !important;
                        print-color-adjust: exact !important;
                        color-adjust: exact !important;
                    }
                    .resume-card {
                        display: block !important;
                        box-shadow: none !important;
                        overflow: visible !important;
                        max-width: 100% !important;
                        width: 100% !important;
                        margin: 0 !important;
                        border-radius: 0 !important;
                        font-size: 10.5pt !important;
                        line-height: 1.38 !important;
                        min-height: calc(11in - 12mm) !important;
                        box-sizing: border-box !important;
                    }
                    body:not(.dark) .resume-card {
                        border: none !important;
                        color: #111827 !important;
                        background: #ffffff !important;
                    }
                    body.dark .resume-card {
                        border: none !important;
                        color: hsl(60 9.1% 97.8%) !important;
                        background: hsl(240 19% 16%) !important;
                    }
                    .resume-print-layout {
                        display: flex !important;
                        flex-direction: row !important;
                        flex-wrap: nowrap !important;
                        align-items: stretch !important;
                        width: 100% !important;
                    }
                    .resume-print-aside {
                        flex: 0 0 232px !important;
                        width: 232px !important;
                        min-width: 232px !important;
                        max-width: 232px !important;
                        box-sizing: border-box !important;
                        padding: 0.6rem 0.65rem !important;
                    }
                    body:not(.dark) .resume-print-aside {
                        border-right: 1px solid #e5e7eb !important;
                    }
                    body.dark .resume-print-aside {
                        border-right: 1px solid hsl(237 22% 23%) !important;
                    }
                    .resume-print-main {
                        flex: 1 1 auto !important;
                        min-width: 0 !important;
                        box-sizing: border-box !important;
                        padding: 0.65rem 0.75rem !important;
                    }
                    .resume-card h1 {
                        font-size: 1.45rem !important;
                        line-height: 1.2 !important;
                        margin-bottom: 0.2rem !important;
                    }
                    body:not(.dark) .resume-sidebar { background: #f3f4f6 !important; }
                    body.dark .resume-sidebar {
                        background: hsl(237 22% 18%) !important;
                    }
                    .resume-card, .resume-card * {
                        animation: none !important;
                        transition: none !important;
                    }
                    body:not(.dark) .resume-card p,
                    body:not(.dark) .resume-card li,
                    body:not(.dark) .resume-card address {
                        color: #1f2937 !important;
                    }
                    body.dark .resume-card p,
                    body.dark .resume-card li,
                    body.dark .resume-card address {
                        color: hsl(237 13% 80%) !important;
                    }
                    body:not(.dark) .resume-card h1,
                    body:not(.dark) .resume-card h2,
                    body:not(.dark) .resume-card h3 {
                        color: #111827 !important;
                    }
                    body.dark .resume-card h1,
                    body.dark .resume-card h2,
                    body.dark .resume-card h3 {
                        color: hsl(60 9.1% 97.8%) !important;
                    }
                    /* Match Tailwind theme token — do not substitute a darker hex (e.g. orange-700) in PDF */
                    .resume-card .text-primary,
                    .resume-card .text-primary.font-medium {
                        color: hsl(var(--primary)) !important;
                    }
                    .resume-card .bg-primary {
                        background-color: hsl(var(--primary)) !important;
                    }
                    .resume-card .border-primary {
                        border-color: hsl(var(--primary)) !important;
                    }
                    .resume-card .resume-exp-highlights li::marker {
                        color: hsl(var(--primary)) !important;
                    }
                    body:not(.dark) .resume-card .resume-timeline-line {
                        background: hsl(var(--border)) !important;
                    }
                    body.dark .resume-card .resume-timeline-line {
                        background: hsl(237 22% 32%) !important;
                    }
                    body:not(.dark) .resume-card .resume-skill-dot-empty {
                        background: hsl(var(--border)) !important;
                    }
                    body.dark .resume-card .resume-skill-dot-empty {
                        background: hsl(237 22% 28%) !important;
                    }
                    body:not(.dark) .resume-card .text-muted-foreground {
                        color: #374151 !important;
                    }
                    body.dark .resume-card .text-muted-foreground {
                        color: hsl(237 13% 63%) !important;
                    }
                    .resume-job-meta-row {
                        display: flex !important;
                        flex-direction: row !important;
                        align-items: baseline !important;
                        justify-content: space-between !important;
                        flex-wrap: nowrap !important;
                        gap: 0.5rem !important;
                    }
                    .resume-print-experience-header {
                        margin-bottom: 0.35rem !important;
                        padding-bottom: 0.35rem !important;
                    }
                    .resume-print-compact-skills {
                        font-size: 9.25pt !important;
                        line-height: 1.32 !important;
                    }
                    .resume-print-compact-skills p {
                        margin: 0 0 0.2em !important;
                    }
                    .resume-achievements-list {
                        font-size: 9.25pt !important;
                        line-height: 1.32 !important;
                        margin: 0.15rem 0 0 !important;
                        padding-left: 1rem !important;
                    }
                    .resume-achievements-list li {
                        margin-bottom: 0.08rem !important;
                    }
                    .no-print { display: none !important; }
                    @page {
                        size: letter portrait;
                        margin: 0;
                    }
                }
            `}</style>
                <div className="resume-print-layout flex flex-col lg:flex-row">
                    {/* ── Sidebar ── */}
                    <aside
                        className="resume-sidebar resume-print-aside lg:w-[232px] shrink-0 bg-accent/50 dark:bg-white/[0.03] p-6 sm:p-8 lg:p-6 lg:border-r border-border/40"
                        aria-label="Contact, skills, education, and achievements"
                    >
                        {/* Name + Title */}
                        <SectionReveal>
                            <div className="mb-8 print:mb-3">
                                <motion.h1
                                    className="text-3xl font-bold tracking-tight mb-1 text-foreground print:text-[1.45rem] print:mb-0.5"
                                    initial={{ opacity: 0, x: -12 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, ease: 'easeOut' }}
                                >
                                    Abhishek
                                    <span className="text-primary"> Agarwal</span>
                                </motion.h1>
                                <p className="text-sm text-muted-foreground font-medium print:text-[10.5pt] print:leading-snug">
                                    <span itemProp="jobTitle">Senior Software Engineer (Frontend Specialist)</span>
                                </p>
                            </div>
                        </SectionReveal>

                        {/* Contact */}
                        <SectionReveal delay={0.05}>
                            <div className="mb-8 print:mb-3">
                                <h2 id="resume-contact-heading" className="text-[11px] uppercase tracking-[0.15em] text-primary font-semibold mb-3 print:mb-1.5 print:text-[9px]">
                                    Contact
                                </h2>
                                <address className="not-italic">
                                    <ul className="space-y-2.5 text-sm print:space-y-1 print:text-[8.5pt]">
                                        {resumeContactItems.map((item) => {
                                            const Icon = CONTACT_ICONS[item.kind] ?? Globe
                                            return (
                                                <li key={item.kind} className="flex items-start gap-2.5">
                                                    <Icon size={14} className="text-primary mt-0.5 shrink-0 print:w-3 print:h-3" aria-hidden />
                                                    {item.href ? (
                                                        <a
                                                            href={item.href}
                                                            target={item.kind === 'website' || item.kind === 'linkedin' || item.kind === 'github' ? '_blank' : undefined}
                                                            rel={item.kind === 'website' || item.kind === 'linkedin' || item.kind === 'github' ? 'noopener noreferrer' : undefined}
                                                            className="hover:text-primary transition-colors break-all"
                                                        >
                                                            {item.text}
                                                        </a>
                                                    ) : (
                                                        <span>{item.text}</span>
                                                    )}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </address>
                            </div>
                        </SectionReveal>

                        {/* Skills — full UI on screen; comma lines in PDF to save vertical space */}
                        <SectionReveal delay={0.1}>
                            <div className="mb-8 print:mb-2">
                                <h2 id="resume-skills-heading" className="text-[11px] uppercase tracking-[0.15em] text-primary font-semibold mb-3 print:mb-1 print:text-[9px] flex items-center gap-1.5">
                                    <Code2 size={13} className="print:w-3 print:h-3 shrink-0" aria-hidden />
                                    Skills
                                </h2>
                                <div className="hidden print:block resume-print-compact-skills text-muted-foreground">
                                    {skillData.map((group) => (
                                        <p key={group.title}>
                                            <span className="font-semibold text-foreground">{group.title}: </span>
                                            {group.data.map((s) => s.name).join(', ')}
                                        </p>
                                    ))}
                                </div>
                                <div className="print:hidden space-y-5">
                                    {skillData.map((group) => (
                                        <div key={group.title}>
                                            <h3 className="text-xs font-semibold mb-2 text-foreground">{group.title}</h3>
                                            <ul className="space-y-1.5">
                                                {group.data.map((skill) => (
                                                    <li
                                                        key={skill.name}
                                                        className="flex items-center justify-between gap-2 text-[13px] text-muted-foreground"
                                                    >
                                                        <span>
                                                            {skill.name}
                                                            <span className="sr-only">
                                                                {group.tier === 'core'
                                                                    ? ', core technical strength'
                                                                    : ', proficient'}
                                                            </span>
                                                        </span>
                                                        <SkillDots tier={group.tier} />
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </SectionReveal>

                        {/* Education */}
                        <SectionReveal delay={0.15}>
                            <section aria-labelledby="resume-education-heading" className="mb-8 print:mb-2">
                                <h2 id="resume-education-heading" className="text-[11px] uppercase tracking-[0.15em] text-primary font-semibold mb-3 print:mb-1 print:text-[9px] flex items-center gap-1.5">
                                    <GraduationCap size={13} className="print:w-3 print:h-3 shrink-0" aria-hidden />
                                    Education
                                </h2>
                                <div className="print:text-[8.5pt] print:leading-snug">
                                    <p className="text-sm font-semibold text-foreground">B.E., Computer Engineering</p>
                                    <p className="text-xs text-muted-foreground">Thapar Institute of Engineering and Technology, Patiala</p>
                                    <p className="text-xs text-muted-foreground">CGPA 9.36 · July 2017 — June 2021</p>
                                </div>
                            </section>
                        </SectionReveal>

                        {/* Achievements */}
                        <SectionReveal delay={0.18}>
                            <section aria-labelledby="resume-achievements-heading">
                                <h2 id="resume-achievements-heading" className="text-[11px] uppercase tracking-[0.15em] text-primary font-semibold mb-3 print:mb-1 print:text-[9px] flex items-center gap-1.5">
                                    <Award size={13} className="print:w-3 print:h-3 shrink-0" aria-hidden />
                                    Achievements
                                </h2>
                                <ul className="resume-achievements-list list-disc pl-4 space-y-1.5 text-xs text-muted-foreground">
                                    {resumeAchievements.map((line) => (
                                        <li key={line}>{line}</li>
                                    ))}
                                </ul>
                            </section>
                        </SectionReveal>
                    </aside>

                    {/* ── Main Content ── */}
                    <main className="resume-print-main flex-1 p-6 sm:p-8 lg:p-10">
                        {/* Header — visible on desktop for the main column */}
                        <SectionReveal>
                            <div className="resume-print-experience-header flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 pb-6 border-b border-border/40 print:mb-2 print:pb-1.5 print:gap-1">
                                <header>
                                    <h2
                                        id="resume-experience-heading"
                                        className="text-[11px] uppercase tracking-[0.15em] text-primary font-semibold mb-1 flex items-center gap-1.5 print:text-[9px] print:mb-0"
                                    >
                                        <Briefcase size={13} className="print:w-3 print:h-3 shrink-0" aria-hidden />
                                        Professional Experience
                                    </h2>
                                    <p className="text-sm text-muted-foreground m-0 print:text-[8.5pt] print:leading-tight">
                                        Senior frontend engineer shipping platforms at scale across e-commerce and FinTech
                                    </p>
                                </header>
                                {RESUME_LINK && (
                                    <a
                                        href={RESUME_LINK}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="no-print inline-flex items-center gap-2 h-9 px-5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors shrink-0"
                                    >
                                        <Download size={14} />
                                        Official PDF (Drive)
                                    </a>
                                )}
                            </div>
                        </SectionReveal>

                        {/* Experience Timeline */}
                        <section aria-labelledby="resume-experience-heading">
                            {experience.map((entry, i) => (
                                <TimelineEntry
                                    key={`${entry.company}-${entry.role}-${entry.years}`}
                                    entry={entry}
                                    index={i}
                                />
                            ))}
                        </section>

                        {/* Highlights strip */}
                        <SectionReveal delay={0.25} className="no-print">
                            <section
                                aria-label="Summary: years of experience, companies, and scale of impact"
                                className="resume-stats-grid mt-8 pt-6 border-t border-border/40 grid grid-cols-3 gap-4 text-center"
                            >
                                {[
                                    { value: '5+', label: 'Years Experience' },
                                    { value: '3', label: 'Companies' },
                                    { value: '12M+', label: 'Users Impacted' },
                                ].map((stat) => (
                                    <div key={stat.label}>
                                        <p className="text-2xl font-bold text-primary">{stat.value}</p>
                                        <p className="text-[11px] text-muted-foreground uppercase tracking-wider mt-0.5">
                                            {stat.label}
                                        </p>
                                    </div>
                                ))}
                            </section>
                        </SectionReveal>
                    </main>
                </div>
        </article>
    )
}
