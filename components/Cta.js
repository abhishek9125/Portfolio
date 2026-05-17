import Link from 'next/link'
import React from 'react'
import SectionReveal from './SectionReveal'
import { Button } from './ui/button'
import { ArrowRight, Download } from 'lucide-react'
import { RESUME_LINK } from '@/constants'

function Cta() {
    return (
        <section className="section-padding relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-tertiary via-background to-primary/5 dark:from-secondary/30 dark:via-background dark:to-primary/10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="container mx-auto relative">
                <SectionReveal className="flex flex-col items-center text-center">
                    <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-4">
                        Let&apos;s collaborate
                    </p>
                    <h2 className="h2 max-w-2xl mb-4 px-2">
                        Have a product idea or role in mind?
                    </h2>
                    <p className="subtitle max-w-lg mx-auto mb-8">
                        I&apos;m open to senior full-stack roles and impactful project work.
                        Let&apos;s build something great.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <Link href="/contact">
                            <Button className="btn-glow shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-shadow gap-x-2">
                                Get in Touch
                                <ArrowRight size={16} />
                            </Button>
                        </Link>
                        {RESUME_LINK && (
                            <a href={RESUME_LINK} target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" className="gap-x-2">
                                    <Download size={15} />
                                    Download Resume
                                </Button>
                            </a>
                        )}
                    </div>

                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-sm text-muted-foreground">
                        <Link href="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link>
                        <span className="text-border">·</span>
                        <Link href="/projects" className="hover:text-primary transition-colors">Projects</Link>
                        <span className="text-border">·</span>
                        <Link href="/articles" className="hover:text-primary transition-colors">Articles</Link>
                        <span className="text-border">·</span>
                        <Link href="/resume" className="hover:text-primary transition-colors">Resume</Link>
                    </div>
                </SectionReveal>
            </div>
        </section>
    )
}

export default Cta
