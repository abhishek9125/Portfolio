import ArticleContent from '@/components/ArticleContent'
import { articles, getArticleBySlug } from '@/constants/articles'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
    return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }) {
    const article = getArticleBySlug(params.slug)
    if (!article) return { title: 'Article Not Found' }
    return {
        title: `${article.title} | Abhishek Agarwal`,
        description: article.excerpt,
    }
}

export default function ArticlePage({ params }) {
    const article = getArticleBySlug(params.slug)
    if (!article) notFound()

    return (
        <main>
            <ArticleContent article={article} />
        </main>
    )
}
