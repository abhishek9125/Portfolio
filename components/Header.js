'use client'

import { usePathname } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import Logo from './Logo'
import MobileNav from './MobileNav'
import Nav from './Nav'
import ThemeToggler from './ThemeToggler'

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname()

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    const isHomeTop = pathname === '/' && !scrolled

    return (
        <header
            className={`sticky top-0 z-40 w-full transition-all duration-300 ${
                scrolled
                    ? 'bg-white/85 dark:bg-background/85 backdrop-blur-xl border-b border-border/50 shadow-sm'
                    : isHomeTop
                      ? 'bg-[#fef9f5]/95 dark:bg-background/95'
                      : 'bg-background/80 backdrop-blur-sm'
            }`}
        >
            <div className="container mx-auto">
                <div className="flex h-12 sm:h-16 items-center justify-between gap-3 max-sm:gap-2">
                    <Logo />
                    <div className="flex items-center gap-2 sm:gap-4">
                        <Nav
                            containerStyles="hidden xl:flex gap-x-7 items-center"
                            linkStyles="text-sm font-medium hover:text-primary transition-colors duration-200"
                            underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
                        />
                        <ThemeToggler />
                        <MobileNav />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
