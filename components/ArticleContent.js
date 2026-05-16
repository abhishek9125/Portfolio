'use client'

import Link from 'next/link'
import { ArrowLeft, Clock, Share2 } from 'lucide-react'
import SectionReveal from './SectionReveal'

export default function ArticleContent({ article }) {
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
        <article>
            {/* Header */}
            <section className="section-padding pt-6 pb-8 border-b border-border/50">
                <div className="container mx-auto max-w-3xl">
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

            {/* Content */}
            <section className="section-padding">
                <div className="container mx-auto max-w-3xl space-y-10">
                    {article.sections.map((section, i) => (
                        <SectionReveal key={section.heading} delay={i * 0.03}>
                            <h2 className="h3 mb-4">{section.heading}</h2>
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
            </section>
        </article>
    )
}
