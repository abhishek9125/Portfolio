import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import SectionReveal from './SectionReveal'
import { Button } from './ui/button'
import { caseStudies } from '@/constants'

function FeaturedCaseStudy() {
    const study = caseStudies[0]
    const metrics = study.results || study.businessMetrics?.slice(0, 3) || []

    return (
        <section
            id="case-studies"
            className="section-padding border-y border-border/50 bg-accent/20 dark:bg-secondary/20 scroll-mt-32"
        >
            <div className="container mx-auto">
                <SectionReveal>
                    <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
                        <div className="flex-1 text-center lg:text-left max-lg:order-2 lg:order-1">
                            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
                                Featured case study
                            </p>
                            <h2 className="h2 mb-3">{study.title}</h2>
                            <p className="text-sm text-muted-foreground mb-2">
                                {study.company} · {study.role}
                            </p>
                            <p className="subtitle max-w-xl mx-auto lg:mx-0 mb-6">{study.tagline}</p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start max-lg:max-w-sm max-lg:mx-auto max-lg:w-full">
                                <Link href={`/case-study/${study.slug}`}>
                                    <Button className="gap-x-2 shadow-md shadow-primary/15 max-lg:w-full sm:w-auto">
                                        Read the full breakdown
                                        <ArrowRight size={18} />
                                    </Button>
                                </Link>
                                <Link href="/case-studies">
                                    <Button variant="outline" className="gap-x-2 max-lg:w-full sm:w-auto">
                                        View more case studies
                                        <ArrowRight size={18} />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0 lg:ml-auto w-full max-lg:order-1 lg:order-2 max-sm:gap-2">
                            {metrics.map((result) => (
                                <div
                                    key={result.label}
                                    className="rounded-2xl border border-border/60 bg-background/80 p-4 text-center max-sm:rounded-xl max-sm:p-3"
                                >
                                    <p className="text-2xl font-bold text-primary max-sm:text-lg max-sm:leading-none">
                                        {result.display ?? `${result.value}${result.suffix ?? ''}`}
                                    </p>
                                    <p className="text-[11px] text-muted-foreground mt-1 leading-tight max-sm:text-[10px] max-sm:line-clamp-2">
                                        {result.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </SectionReveal>
            </div>
        </section>
    )
}

export default FeaturedCaseStudy
