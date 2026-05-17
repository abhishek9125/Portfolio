'use client'

import Link from 'next/link'
import { Download, ArrowRight, FileText, FileType2 } from 'lucide-react'
import ResumeVisual from '@/components/ResumeVisual'
import { RESUME_LINK } from '@/constants'

export default function ResumePageView() {
    return (
        <section className="min-h-screen pt-6 sm:pt-8 pb-16">
            <div className="container mx-auto max-w-5xl px-4">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
                        <FileText size={14} />
                        Resume
                    </div>
                    <h1 className="h1 mb-3">Abhishek Agarwal</h1>
                    <p className="subtitle max-w-lg mx-auto mb-2">
                        Senior software engineer (frontend specialist) at Flipkart. Experience across e-commerce, FinTech,
                        and high-traffic consumer products.
                    </p>
                    <p className="text-xs text-muted-foreground max-w-lg mx-auto mb-5">
                        <strong className="text-foreground">ATS tip:</strong> Upload the plain-text file below to job portals; use{' '}
                        {RESUME_LINK ? (
                            <strong className="text-foreground">Official PDF (Drive)</strong>
                        ) : (
                            <span className="text-foreground">your PDF</span>
                        )}{' '}
                        for reviewers.
                    </p>
                    <div className="flex items-center justify-center gap-3 flex-wrap">
                        <a
                            href="/api/resume-text"
                            download="Abhishek-Agarwal-Resume-ATS.txt"
                            className="inline-flex items-center gap-2 h-10 px-5 rounded-full border border-border/60 text-sm font-medium hover:border-primary/30 transition-colors bg-background"
                        >
                            <FileType2 size={16} />
                            ATS plain text (.txt)
                        </a>
                        {RESUME_LINK && (
                            <a
                                href={RESUME_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 h-10 px-5 rounded-full border border-border/60 text-sm font-medium hover:border-primary/30 transition-colors"
                            >
                                <Download size={14} />
                                Official PDF (Drive)
                            </a>
                        )}
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 h-10 px-5 rounded-full border border-border/60 text-sm font-medium hover:border-primary/30 transition-colors"
                        >
                            Get in touch
                            <ArrowRight size={14} />
                        </Link>
                    </div>
                </div>

                <ResumeVisual />
            </div>
        </section>
    )
}
