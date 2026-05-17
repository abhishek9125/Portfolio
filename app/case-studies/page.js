'use client'

import Link from 'next/link'
import { caseStudies } from '@/constants'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionReveal from '@/components/SectionReveal'

export default function CaseStudiesPage() {
    return (
        <main className="section-padding pt-8">
            <div className="container mx-auto max-w-4xl">
                <SectionReveal>
                    <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">Portfolio</p>
                    <h1 className="h1 mb-4">Case Studies</h1>
                    <p className="subtitle mb-3">
                        Detailed write-ups covering architecture, performance, cost impact, and business outcomes.
                    </p>
                    <p className="text-sm text-muted-foreground mb-10">
                        <span className="font-semibold text-foreground">{caseStudies.length}</span> in-depth studies from production systems
                    </p>
                </SectionReveal>

                <div className="space-y-6">
                    {caseStudies.map((study, index) => (
                        <motion.article
                            key={study.slug}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: index * 0.08,
                                duration: 0.5,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="group rounded-2xl border border-border/60 p-6 md:p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                                    {study.company}
                                </span>
                                <span className="text-xs text-muted-foreground">{study.timeframe}</span>
                                <span className="text-xs text-muted-foreground">·</span>
                                <span className="text-xs text-muted-foreground">{study.role}</span>
                            </div>
                            <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors max-sm:text-xl">
                                {study.title}
                            </h2>
                            <p className="text-muted-foreground mb-5 leading-relaxed max-sm:text-sm">{study.excerpt}</p>

                            {/* Metrics preview */}
                            {study.performanceMetrics && (
                                <div className="flex flex-wrap gap-3 mb-5">
                                    {study.performanceMetrics.slice(0, 3).map((metric) => (
                                        <div
                                            key={metric.label}
                                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent/50 border border-border/30 text-xs"
                                        >
                                            <span className="text-muted-foreground">{metric.label}</span>
                                            <span className="font-bold text-primary">{metric.change}</span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <div className="flex flex-wrap gap-2">
                                    {study.stack.slice(0, 5).map((t) => (
                                        <span key={t} className="text-xs px-2 py-1 rounded-md bg-accent border border-border/50">
                                            {t}
                                        </span>
                                    ))}
                                    {study.stack.length > 5 && (
                                        <span className="text-xs px-2 py-1 rounded-md text-muted-foreground">
                                            +{study.stack.length - 5} more
                                        </span>
                                    )}
                                </div>
                                <Link href={`/case-study/${study.slug}`}>
                                    <Button variant="outline" size="sm" className="gap-x-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                        Read full study <ArrowRight size={14} />
                                    </Button>
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </main>
    )
}
