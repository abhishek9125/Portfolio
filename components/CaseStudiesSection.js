import Link from 'next/link'
import { ArrowRight, BarChart3 } from 'lucide-react'
import SectionReveal from './SectionReveal'
import { Button } from './ui/button'
import { caseStudies } from '@/constants'

function CaseStudiesSection() {
    return (
        <section id="case-studies" className="section-padding border-y border-border/50 bg-accent/20 dark:bg-secondary/20 scroll-mt-32">
            <div className="container mx-auto">
                <SectionReveal className="text-center mb-8">
                    <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
                        Deep dives
                    </p>
                    <h2 className="section-title mx-auto mb-3">Case Studies</h2>
                    <p className="subtitle max-w-xl mx-auto mb-0">
                        Performance, cost, and delivery metrics from production work — not slide-deck estimates.
                    </p>
                </SectionReveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {caseStudies.map((study, index) => (
                        <SectionReveal key={study.slug} delay={index * 0.08}>
                            <Link
                                href={`/case-study/${study.slug}`}
                                className="group flex flex-col h-full rounded-2xl border border-border/60 bg-background/90 p-6 transition-all hover:border-primary/35 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5"
                            >
                                <div className="flex items-center gap-2 text-primary mb-3">
                                    <BarChart3 size={18} />
                                    <span className="text-xs font-semibold uppercase tracking-wider">
                                        {study.company}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                                    {study.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                                    {study.excerpt}
                                </p>
                                {study.businessMetrics?.[0] && (
                                    <p className="text-2xl font-bold text-primary mb-4">
                                        {study.businessMetrics[0].display ??
                                            `${study.businessMetrics[0].value}${study.businessMetrics[0].suffix}`}
                                        <span className="text-xs font-normal text-muted-foreground block mt-0.5">
                                            {study.businessMetrics[0].label}
                                        </span>
                                    </p>
                                )}
                                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                                    Read case study <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                                </span>
                            </Link>
                        </SectionReveal>
                    ))}
                </div>

                <div className="text-center mt-8">
                    <Link href="/case-studies">
                        <Button variant="outline">View all case studies</Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default CaseStudiesSection
