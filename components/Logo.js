import Link from 'next/link'
import React from 'react'
import LogoMark from './LogoMark'

function Logo({ showTagline = true }) {
    return (
        <Link
            href="/"
            className="group flex items-center gap-2.5 sm:gap-3 shrink-0 min-w-0"
            aria-label="Abhishek Agarwal — home"
        >
            <span className="relative flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-primary shadow-md shadow-primary/20 ring-1 ring-primary/25 p-1.5 transition-transform duration-200 group-hover:scale-[1.03] group-active:scale-[0.98]">
                <LogoMark />
            </span>
            {showTagline && (
                <span className="flex flex-col leading-none min-w-0">
                    <span className="font-bold text-sm sm:text-base tracking-tight text-foreground truncate">
                        Abhishek Agarwal
                    </span>
                    <span className="hidden sm:block text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-muted-foreground mt-0.5 truncate">
                        Full-stack Software Engineer
                    </span>
                </span>
            )}
        </Link>
    )
}

export default Logo
