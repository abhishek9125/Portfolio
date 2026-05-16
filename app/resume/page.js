import ResumeCode from '@/components/ResumeCode'
import { RESUME_LINK } from '@/constants'
import { Download, FileCode2, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
    title: 'Resume',
    description: 'Abhishek Agarwal\'s resume — rendered as code. Full-stack engineer at Flipkart with 5 years of experience.',
}

export default function ResumePage() {
    return (
        <section className="min-h-screen pt-6 sm:pt-8 pb-16">
            <div className="container mx-auto max-w-4xl">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
                        <FileCode2 size={14} />
                        resume.ts
                    </div>
                    <h1 className="h1 mb-3">Resume as Code</h1>
                    <p className="text-muted-foreground max-w-md mx-auto mb-5">
                        My career, skills, and experience — rendered the way I think about it.
                        Collapse sections, copy the whole thing, or download the PDF.
                    </p>
                    <div className="flex items-center justify-center gap-3 flex-wrap">
                        {RESUME_LINK && (
                            <a
                                href={RESUME_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                            >
                                <Download size={14} />
                                Download PDF
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

                {/* The code editor */}
                <ResumeCode />

                {/* Footer note */}
                <p className="text-center text-xs text-muted-foreground mt-6">
                    Click the section comments (Experience, Skills, Meta) to collapse/expand.
                    Hit Copy to grab the full source.
                </p>
            </div>
        </section>
    )
}
