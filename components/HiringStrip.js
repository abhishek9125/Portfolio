'use client'

import Link from 'next/link'

function HiringStrip() {
    return (
        <div className="relative z-20 border-b border-primary/20 bg-primary/8 dark:bg-primary/10">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between gap-3 py-1.5 sm:py-2.5 text-center sm:text-left max-sm:justify-center">
                    <p className="text-[11px] sm:text-sm text-foreground/90 leading-snug max-w-[340px] sm:max-w-none">
                        <span className="font-medium text-primary">Open to opportunities</span>
                        <span className="hidden sm:inline text-foreground/90">
                            {' '}
                            · Senior full-stack · Bengaluru / Hybrid / Remote
                        </span>
                    </p>
                    <Link
                        href="/contact"
                        className="text-[11px] sm:text-sm font-semibold text-primary hover:underline underline-offset-4 shrink-0 whitespace-nowrap"
                    >
                        Get in touch →
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HiringStrip
