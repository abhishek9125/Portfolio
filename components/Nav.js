'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export const navLinks = [
    { path: '/', name: 'home' },
    { path: '/case-studies', name: 'case studies', matchPrefix: '/case-study' },
    { path: '/projects', name: 'projects' },
    { path: '/articles', name: 'articles', matchPrefix: '/article' },
    { path: '/resume', name: 'resume' },
    { path: '/setup', name: 'setup' },
    { path: '/contact', name: 'contact' },
]

export function isNavLinkActive(path, link) {
    if (link.path === '/') return path === '/';
    if (link.matchPrefix) return path.startsWith(link.matchPrefix) || path === link.path;
    return path === link.path || path.startsWith(`${link.path}/`);
}

function Nav({ containerStyles, linkStyles, underlineStyles }) {
    const path = usePathname();

    return (
        <nav className={containerStyles}>
            {navLinks.map((link) => {
                const active = isNavLinkActive(path, link);
                return (
                    <Link
                        href={link.path}
                        key={link.path}
                        className={`relative capitalize ${linkStyles} ${active ? 'text-primary font-medium' : ''}`}
                    >
                        {active && underlineStyles && (
                            <motion.span
                                initial={{ y: '-100%' }}
                                animate={{ y: 0 }}
                                transition={{ type: 'tween' }}
                                layoutId="underline"
                                className={underlineStyles}
                            />
                        )}
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    )
}

export default Nav
