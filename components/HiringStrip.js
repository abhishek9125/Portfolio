'use client'

import Link from 'next/link'

function HiringStrip() {
    return (
        <div className="relative z-20 border-b border-primary/20 bg-primary/8 dark:bg-primary/10">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between gap-3 py-1.5 sm:py-2.5 text-center sm:text-left">
                    <p className="hidden sm:block text-sm text-foreground/90 leading-snug max-w-none">
                        <span className="font-medium text-primary">Open to opportunities</span>
                        <span className="text-foreground/90">
                            {' '}
                            · Senior full-stack · Bengaluru / Hybrid / Remote
                        </span>
                    </p>
                    <Link
                        href="/contact"
                        className="w-full sm:w-auto text-center text-[11px] sm:text-sm font-semibold rounded-full bg-primary text-primary-foreground px-4 py-2 sm:py-0 sm:px-0 sm:bg-transparent sm:text-primary hover:bg-primary/90 sm:hover:bg-transparent sm:hover:underline underline-offset-4 shrink-0 sm:ml-auto transition-colors"
                    >
                        Get in touch
                        <span className="hidden sm:inline"> →</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HiringStrip
