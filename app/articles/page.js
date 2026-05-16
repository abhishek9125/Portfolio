import Link from 'next/link'
import { articles } from '@/constants/articles'
import { ArrowRight, Clock } from 'lucide-react'

export const metadata = {
    title: 'Articles | Abhishek Agarwal',
    description: 'Technical articles on frontend engineering, performance, architecture, and career growth.',
}

export default function ArticlesPage() {
    return (
        <main className="section-padding pt-8">
            <div className="container mx-auto max-w-4xl">
                <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">Writing</p>
                <h1 className="h1 mb-4">Articles</h1>
                <p className="subtitle mb-10">
                    Practical engineering lessons from 5+ years of shipping products at scale.
                </p>

                <div className="space-y-5">
                    {articles.map((article) => (
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
                    ))}
                </div>
            </div>
        </main>
    )
}
