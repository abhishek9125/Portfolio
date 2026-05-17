'use client'

import Link from 'next/link'

export default function Breadcrumb({ items }) {
    return (
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6">
            {items.map((item, i) => (
                <span key={i} className="flex items-center gap-1.5">
                    {i > 0 && <span className="text-muted-foreground/50">/</span>}
                    {item.href ? (
                        <Link
                            href={item.href}
                            className="hover:text-primary transition-colors"
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-foreground/70 truncate max-w-[200px]">{item.label}</span>
                    )}
                </span>
            ))}
        </nav>
    )
}
