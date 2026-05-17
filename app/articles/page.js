'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { articles } from '@/constants/articles'
import { ArrowRight, Clock, Search, X } from 'lucide-react'

export default function ArticlesPage() {
    const [query, setQuery] = useState('')
    const [activeTag, setActiveTag] = useState(null)

    const allTags = useMemo(
        () => [...new Set(articles.flatMap((a) => a.tags))].sort(),
        []
    )

    const filtered = useMemo(() => {
        let result = articles

        if (activeTag) {
            result = result.filter((a) => a.tags.includes(activeTag))
        }

        if (query.trim()) {
            const q = query.toLowerCase()
            result = result.filter(
                (a) =>
                    a.title.toLowerCase().includes(q) ||
                    a.tags.some((t) => t.toLowerCase().includes(q)) ||
                    a.excerpt.toLowerCase().includes(q)
            )
        }

        return result
    }, [query, activeTag])

    return (
        <main className="section-padding pt-8">
            <div className="container mx-auto max-w-4xl">
                <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">Writing</p>
                <h1 className="h1 mb-4">Articles</h1>
                <p className="subtitle mb-8">
                    Practical engineering lessons from 5+ years of shipping products at scale.
                </p>

                {/* Search */}
                <div className="relative mb-4">
                    <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search articles by title or topic..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-border/60 bg-background text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                    />
                    {query && (
                        <button
                            onClick={() => setQuery('')}
                            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <X size={15} />
                        </button>
                    )}
                </div>

                {/* Tag filters */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {allTags.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                            className={`text-[11px] font-medium uppercase tracking-wider px-3 py-1 rounded-full border transition-all ${
                                activeTag === tag
                                    ? 'bg-primary text-primary-foreground border-primary'
                                    : 'text-muted-foreground border-border/60 hover:border-primary/40 hover:text-primary'
                            }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                {/* Count */}
                <p className="text-xs text-muted-foreground mb-5">
                    Showing {filtered.length} of {articles.length} articles
                </p>

                {/* Articles list */}
                <div className="space-y-5">
                    {filtered.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-muted-foreground text-sm">No articles match your search.</p>
                            <button
                                onClick={() => { setQuery(''); setActiveTag(null) }}
                                className="text-sm text-primary hover:underline mt-2"
                            >
                                Clear filters
                            </button>
                        </div>
                    ) : (
                        filtered.map((article) => (
                            <Link
                                key={article.slug}
                                href={`/article/${article.slug}`}
                                className="block group"
                            >
                                <article className="rounded-2xl border border-border/60 p-5 md:p-6 hover:border-primary/30 transition-all duration-200 hover:shadow-md hover:shadow-primary/5">
                                    <div className="flex flex-wrap items-center gap-2 mb-2">
                                        {article.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-[10px] font-medium uppercase tracking-wider text-primary bg-primary/8 px-2 py-0.5 rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h2 className="text-xl font-bold mb-1.5 group-hover:text-primary transition-colors max-sm:text-lg">
                                        {article.title}
                                    </h2>
                                    <p className="text-muted-foreground mb-3 leading-relaxed text-[15px] max-sm:text-sm">
                                        {article.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                            <span>{new Date(article.publishedAt).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                            <span className="flex items-center gap-1">
                                                <Clock size={11} />
                                                {article.readTime}
                                            </span>
                                        </div>
                                        <span className="text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                                            Read <ArrowRight size={14} />
                                        </span>
                                    </div>
                                </article>
                            </Link>
                        ))
                    )}
                </div>
            </div>
        </main>
    )
}
