import Link from 'next/link'
import React from 'react'
import SectionReveal from './SectionReveal'
import { Button } from './ui/button'

function Cta() {
    return (
        <section className="section-padding relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-tertiary via-background to-primary/5 dark:from-secondary/30 dark:via-background dark:to-primary/10" />
            <div className="container mx-auto relative">
                <SectionReveal className="flex flex-col items-center text-center">
                    <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-4">
                        Let&apos;s collaborate
                    </p>
                    <h2 className="h2 max-w-2xl mb-4 px-2">
                        Have a product idea or role in mind?
                    </h2>
                    <p className="subtitle max-w-lg mx-auto mb-8">
                        I&apos;m open to senior full-stack roles and impactful project work. Let&apos;s talk.
                    </p>
                    <Link href="/contact">
                        <Button className="btn-glow shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-shadow">
                            Get in Touch
                        </Button>
                    </Link>
                </SectionReveal>
            </div>
        </section>
    )
}

export default Cta;
