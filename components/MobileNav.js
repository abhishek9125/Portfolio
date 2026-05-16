'use client'

import { Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Logo from './Logo'
import { isNavLinkActive, navLinks } from './Nav'
import Socials from './Socials'
import { Button } from './ui/button'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from './ui/sheet'

function MobileNav() {
    const path = usePathname()

    return (
        <Sheet>
            <SheetTrigger asChild>
                <button
                    type="button"
                    className="xl:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-border/60 bg-background/80 text-foreground hover:bg-accent transition-colors"
                    aria-label="Open menu"
                >
                    <Menu size={22} />
                </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100vw-1.5rem,340px)] p-0 flex flex-col">
                <div className="flex items-center justify-between border-b border-border/60 px-5 py-4">
                    <Logo showTagline />
                    <span className="sr-only">Navigation menu</span>
                </div>

                <nav className="flex-1 overflow-y-auto px-5 py-6">
                    <ul className="flex flex-col gap-1">
                        {navLinks.map((link) => {
                            const active = isNavLinkActive(path, link)
                            return (
                                <li key={link.path}>
                                    <SheetClose asChild>
                                        <Link
                                            href={link.path}
                                            className={`block rounded-xl px-4 py-3.5 text-lg capitalize transition-colors ${
                                                active
                                                    ? 'bg-primary/10 text-primary font-semibold'
                                                    : 'text-foreground hover:bg-accent'
                                            }`}
                                        >
                                            {link.name}
                                        </Link>
                                    </SheetClose>
                                </li>
                            )
                        })}
                    </ul>

                    <div className="mt-8 flex flex-col gap-3">
                        <SheetClose asChild>
                            <Link href="/contact">
                                <Button className="w-full h-12 btn-glow">Get in touch</Button>
                            </Link>
                        </SheetClose>
                        <SheetClose asChild>
                            <Link href="/case-studies">
                                <Button variant="outline" className="w-full h-12">
                                    View case studies
                                </Button>
                            </Link>
                        </SheetClose>
                    </div>
                </nav>

                <div className="border-t border-border/60 px-5 py-5">
                    <Socials
                        containerStyles="flex justify-center gap-x-6"
                        iconStyles="text-2xl text-foreground hover:text-primary transition-colors"
                    />
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav
