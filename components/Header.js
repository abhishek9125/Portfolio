'use client'

import { usePathname } from 'next/navigation'
import React, { useState, useEffect, useMemo } from 'react'
import Logo from './Logo'
import MobileNav from './MobileNav'
import Nav from './Nav'
import ThemeToggler from './ThemeToggler'

function Header() {
    const [scrollY, setScrollY] = useState(0);
    const pathname = usePathname()

    useEffect(() => {
        const onScroll = () => setScrollY(window.scrollY)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    const scrolled = scrollY > 24
    const isHomeTop = pathname === '/' && !scrolled

    const progress = useMemo(() => Math.min(scrollY / 120, 1), [scrollY])

    const blurPx = scrolled ? Math.round(8 + progress * 16) : (isHomeTop ? 0 : 4)
    const shadowOpacity = (progress * 0.08).toFixed(3)
    const borderOpacity = progress > 0.8 ? ((progress - 0.8) * 5 * 0.35).toFixed(2) : 0

    const dynamicStyle = {
        backdropFilter: `blur(${blurPx}px)`,
        WebkitBackdropFilter: `blur(${blurPx}px)`,
        boxShadow: scrolled
            ? `0 1px 3px rgba(0,0,0,${shadowOpacity}), 0 4px 12px rgba(0,0,0,${(shadowOpacity * 0.5).toFixed(3)})`
            : 'none',
    }

    return (
        <header
            className={`sticky top-0 z-40 w-full transition-colors duration-300 ${
                scrolled
                    ? 'bg-white/85 dark:bg-background/85 border-b border-border/50'
                    : isHomeTop
                      ? 'bg-[#fef9f5]/95 dark:bg-background/95'
                      : 'bg-background/80'
            }`}
            style={dynamicStyle}
        >
            {/* Primary-colored accent line at the bottom */}
            <div
                className="absolute bottom-0 left-0 right-0 h-px bg-primary transition-opacity duration-300"
                style={{ opacity: borderOpacity }}
            />
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
