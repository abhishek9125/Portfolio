import Link from 'next/link'
import { caseStudies } from '@/constants'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export const metadata = {
    title: 'Case Studies | Abhishek Agarwal',
    description: 'In-depth breakdowns of platform migrations, performance work, and product engineering at scale.',
}

export default function CaseStudiesPage() {
    return (
        <main className="section-padding pt-8">
            <div className="container mx-auto max-w-4xl">
                <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">Portfolio</p>
                <h1 className="h1 mb-4">Case Studies</h1>
                <p className="subtitle mb-10">
                    Detailed write-ups covering architecture, performance, cost impact, and business outcomes.
                </p>

                <div className="space-y-6">
                    {caseStudies.map((study) => (
                        <article
                            key={study.slug}
                            className="rounded-2xl border border-border/60 p-6 md:p-8 hover:border-primary/30 transition-colors"
                        >
                            <p className="text-sm text-primary font-medium mb-1">{study.company} · {study.timeframe}</p>
                            <h2 className="text-2xl font-bold mb-2">{study.title}</h2>
                            <p className="text-muted-foreground mb-4 leading-relaxed">{study.excerpt}</p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {study.stack.slice(0, 5).map((t) => (
                                    <span key={t} className="text-xs px-2 py-1 rounded-md bg-accent border border-border/50">
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <Link href={`/case-study/${study.slug}`}>
                                <Button variant="outline" className="gap-x-2">
                                    Read full study <ArrowRight size={16} />
                                </Button>
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    )
}
