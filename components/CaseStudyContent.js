'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import SectionReveal from './SectionReveal'
import StatCounter from './StatCounter'
import CodeBlock from './CodeBlock'
import ArchitectureDiagram from './ArchitectureDiagram'
import { Button } from './ui/button'

function MetricTable({ title, rows, columns }) {
    return (
        <SectionReveal>
            <h2 className="h3 mb-4">{title}</h2>
            <div className="overflow-x-auto rounded-2xl border border-border/60">
                <table className="w-full text-sm text-left">
                    <thead className="bg-accent/50 text-muted-foreground uppercase text-xs tracking-wider">
                        <tr>
                            {columns.map((col) => (
                                <th key={col} className="px-4 py-3 font-semibold">{col}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border/60">
                        {rows.map((row) => (
                            <tr key={row.label} className="bg-background/80">
                                <td className="px-4 py-3 font-medium">{row.label}</td>
                                {row.before !== undefined && (
                                    <>
                                        <td className="px-4 py-3 text-muted-foreground">{row.before}</td>
                                        <td className="px-4 py-3 text-foreground">{row.after}</td>
                                        <td className="px-4 py-3 text-primary font-semibold">{row.change}</td>
                                    </>
                                )}
                                {row.value !== undefined && (
                                    <>
                                        <td className="px-4 py-3">{row.value}</td>
                                        <td className="px-4 py-3 text-muted-foreground text-xs">{row.detail}</td>
                                    </>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </SectionReveal>
    );
}

function CaseStudyContent({ study }) {
    return (
        <article>
            <section className="section-padding pt-6 border-b border-border/50">
                <div className="container mx-auto max-w-4xl">
                    <Link
                        href="/case-studies"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
                    >
                        <ArrowLeft size={16} />
                        All case studies
                    </Link>
                    <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
                        Case study · {study.company}
                    </p>
                    <h1 className="h1 mb-4">{study.title}</h1>
                    <p className="subtitle mb-2">{study.tagline}</p>
                    <p className="text-sm text-muted-foreground">{study.role} · {study.timeframe}</p>
                </div>
            </section>

            <section className="section-padding !py-8 bg-accent/15 dark:bg-secondary/20 border-b border-border/40">
                <div className="container mx-auto max-w-4xl">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {study.businessMetrics.map((m) => (
                            <div key={m.label} className="rounded-2xl border border-border/60 bg-background p-5 text-center">
                                <StatCounter
                                    end={m.value}
                                    suffix={m.suffix}
                                    display={m.display}
                                    label={m.label}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container mx-auto max-w-4xl space-y-14">
                    <SectionReveal>
                        <h2 className="h3 mb-4">The problem</h2>
                        <ul className="space-y-3">
                            {study.problem.map((item) => (
                                <li key={item} className="flex gap-3 text-muted-foreground leading-relaxed">
                                    <span className="text-primary font-bold shrink-0">—</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </SectionReveal>

                    <SectionReveal>
                        <h2 className="h3 mb-4">The approach</h2>
                        <ul className="space-y-3">
                            {study.solution.map((item) => (
                                <li key={item} className="flex gap-3 text-muted-foreground leading-relaxed">
                                    <span className="text-primary font-bold shrink-0">—</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </SectionReveal>

                    {study.diagramLayers && (
                        <SectionReveal>
                            <h2 className="h3 mb-4">System flow</h2>
                            <ArchitectureDiagram title="High-level architecture" layers={study.diagramLayers} />
                        </SectionReveal>
                    )}

                    {study.performanceMetrics?.length > 0 && (
                        <MetricTable
                            title="Performance metrics"
                            columns={['Metric', 'Before', 'After', 'Change']}
                            rows={study.performanceMetrics}
                        />
                    )}

                    {study.costMetrics?.length > 0 && (
                        <MetricTable
                            title="Cost & efficiency"
                            columns={['Area', 'Before', 'After', 'Notes']}
                            rows={study.costMetrics.map((r) => ({
                                label: r.label,
                                before: r.before,
                                after: r.after,
                                change: r.detail,
                            }))}
                        />
                    )}

                    {study.codeSnippet && (
                        <SectionReveal>
                            <h2 className="h3 mb-4">Implementation snapshot</h2>
                            <CodeBlock title={study.codeSnippet.title} lines={study.codeSnippet.lines} />
                        </SectionReveal>
                    )}

                    <SectionReveal>
                        <h2 className="h3 mb-6">Rollout phases</h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {study.architecture.map((phase) => (
                                <div
                                    key={phase.step}
                                    className="p-5 rounded-2xl border border-border/60 bg-accent/30"
                                >
                                    <span className="text-primary font-mono text-sm font-bold">{phase.step}</span>
                                    <h3 className="font-semibold mt-2 mb-1">{phase.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{phase.detail}</p>
                                </div>
                            ))}
                        </div>
                    </SectionReveal>

                    <SectionReveal>
                        <h2 className="h3 mb-4">Tech stack</h2>
                        <div className="flex flex-wrap gap-2">
                            {study.stack.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1.5 text-sm rounded-full border border-primary/25 bg-primary/8 font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </SectionReveal>

                    <SectionReveal className="text-center pt-2 pb-4">
                        <p className="subtitle max-w-md mx-auto mb-6">
                            Want to dive deeper into this kind of work? Let&apos;s talk.
                        </p>
                        <Link href="/contact">
                            <Button className="btn-glow gap-x-2">Get in touch</Button>
                        </Link>
                    </SectionReveal>
                </div>
            </section>
        </article>
    );
}

export default CaseStudyContent;
