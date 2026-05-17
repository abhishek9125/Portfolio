'use client'

import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, Clock, Share2, ArrowRight } from 'lucide-react'
import { motion, useScroll, useSpring } from 'framer-motion'
import SectionReveal from './SectionReveal'
import Breadcrumb from './Breadcrumb'
import { articles } from '@/constants/articles'

function slugify(text) {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

function getRelatedArticles(currentArticle, count = 3) {
    return articles
        .filter((a) => a.slug !== currentArticle.slug)
        .map((a) => ({
            ...a,
            relevance: a.tags.filter((t) => currentArticle.tags.includes(t)).length,
        }))
        .filter((a) => a.relevance > 0)
        .sort((a, b) => b.relevance - a.relevance)
        .slice(0, count)
}

export default function ArticleContent({ article }) {
    const contentRef = useRef(null)
    const [activeSection, setActiveSection] = useState('')

    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

    const relatedArticles = getRelatedArticles(article)

    useEffect(() => {
        const headings = contentRef.current?.querySelectorAll('h2[id]')
        if (!headings?.length) return

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.filter((e) => e.isIntersecting)
                if (visible.length > 0) {
                    setActiveSection(visible[0].target.id)
                }
            },
            { rootMargin: '-80px 0px -60% 0px', threshold: 0.1 }
        )

        headings.forEach((h) => observer.observe(h))
        return () => observer.disconnect()
    }, [article])

    const handleShare = async () => {
        const data = {
            title: article.title,
            url: `https://abhishekagarwal.me/article/${article.slug}`,
        }
        try {
            if (navigator.share) await navigator.share(data)
            else await navigator.clipboard.writeText(data.url)
        } catch {}
    }

    return (
        <>
            {/* Reading progress bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[2px] bg-primary origin-left z-50"
                style={{ scaleX }}
            />

            <article>
                {/* Header */}
                <section className="section-padding pt-6 pb-8 border-b border-border/50">
                    <div className="container mx-auto max-w-3xl">
                        <Breadcrumb
                            items={[
                                { label: 'Home', href: '/' },
                                { label: 'Articles', href: '/articles' },
                                { label: article.title },
                            ]}
                        />

                        <Link
                            href="/articles"
                            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
                        >
                            <ArrowLeft size={16} />
                            All articles
                        </Link>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {article.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-[10px] font-medium uppercase tracking-wider text-primary bg-primary/8 px-2.5 py-1 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h1 className="h1 mb-4">{article.title}</h1>
                        <p className="subtitle mb-4">{article.excerpt}</p>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <span>
                                    {new Date(article.publishedAt).toLocaleDateString('en-IN', {
                                        month: 'long',
                                        day: 'numeric',
                                        year: 'numeric',
                                    })}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock size={13} />
                                    {article.readTime}
                                </span>
                            </div>
                            <button
                                type="button"
                                onClick={handleShare}
                                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Share2 size={14} />
                                Share
                            </button>
                        </div>
                    </div>
                </section>

                {/* Content with TOC sidebar */}
                <section className="section-padding">
                    <div className="container mx-auto max-w-6xl flex gap-10">
                        {/* Main content */}
                        <div ref={contentRef} className="max-w-3xl w-full mx-auto xl:mx-0 space-y-10">
                            {article.sections.map((section, i) => (
                                <SectionReveal key={section.heading} delay={i * 0.03}>
                                    <h2 id={slugify(section.heading)} className="h3 mb-4 scroll-mt-20">
                                        {section.heading}
                                    </h2>
                                    <div className="space-y-4">
                                        {section.paragraphs.map((para, j) => (
                                            <p
                                                key={j}
                                                className="text-muted-foreground leading-relaxed text-[16px]"
                                            >
                                                {para}
                                            </p>
                                        ))}
                                    </div>
                                </SectionReveal>
                            ))}

                            {/* Related Articles */}
                            {relatedArticles.length > 0 && (
                                <SectionReveal>
                                    <div className="border-t border-border/50 pt-8">
                                        <h3 className="text-lg font-bold mb-5">Related Articles</h3>
                                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                            {relatedArticles.map((related) => (
                                                <Link
                                                    key={related.slug}
                                                    href={`/article/${related.slug}`}
                                                    className="group block rounded-xl border border-border/60 p-4 hover:border-primary/30 transition-all duration-200 hover:shadow-md hover:shadow-primary/5"
                                                >
                                                    <div className="flex flex-wrap gap-1.5 mb-2">
                                                        {related.tags.slice(0, 2).map((tag) => (
                                                            <span
                                                                key={tag}
                                                                className="text-[9px] font-medium uppercase tracking-wider text-primary bg-primary/8 px-2 py-0.5 rounded-full"
                                                            >
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                    <h4 className="text-sm font-semibold mb-1.5 group-hover:text-primary transition-colors line-clamp-2">
                                                        {related.title}
                                                    </h4>
                                                    <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                                                        {related.excerpt}
                                                    </p>
                                                    <span className="text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                                                        Read <ArrowRight size={12} />
                                                    </span>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </SectionReveal>
                            )}

                            {/* Footer CTA */}
                            <SectionReveal>
                                <div className="border-t border-border/50 pt-8 text-center">
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Found this useful? I write about engineering, performance, and career growth.
                                    </p>
                                    <div className="flex justify-center gap-3">
                                        <Link
                                            href="/articles"
                                            className="text-sm font-medium text-primary hover:underline"
                                        >
                                            Read more articles
                                        </Link>
                                        <span className="text-muted-foreground">·</span>
                                        <Link
                                            href="/contact"
                                            className="text-sm font-medium text-primary hover:underline"
                                        >
                                            Get in touch
                                        </Link>
                                    </div>
                                </div>
                            </SectionReveal>
                        </div>

                        {/* Sticky TOC sidebar — desktop only */}
                        <aside className="hidden xl:block w-56 shrink-0">
                            <div className="sticky top-24">
                                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                                    On this page
                                </p>
                                <nav className="space-y-1.5">
                                    {article.sections.map((section) => {
                                        const id = slugify(section.heading)
                                        return (
                                            <a
                                                key={id}
                                                href={`#${id}`}
                                                className={`block text-[13px] leading-snug py-1 border-l-2 pl-3 transition-colors ${
                                                    activeSection === id
                                                        ? 'border-primary text-primary font-medium'
                                                        : 'border-transparent text-muted-foreground hover:text-foreground hover:border-border'
                                                }`}
                                            >
                                                {section.heading}
                                            </a>
                                        )
                                    })}
                                </nav>
                            </div>
                        </aside>
                    </div>
                </section>
            </article>
        </>
    )
}
