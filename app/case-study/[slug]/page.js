import CaseStudyContent from '@/components/CaseStudyContent'
import { caseStudies, getCaseStudyBySlug } from '@/constants'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
    return caseStudies.map((study) => ({ slug: study.slug }))
}

export async function generateMetadata({ params }) {
    const study = getCaseStudyBySlug(params.slug)
    if (!study) return { title: 'Case Study Not Found' }
    return {
        title: `${study.title} | Abhishek Agarwal`,
        description: study.tagline,
    }
}

export default function CaseStudyPage({ params }) {
    const study = getCaseStudyBySlug(params.slug)
    if (!study) notFound()

    return (
        <main>
            <CaseStudyContent study={study} />
        </main>
    )
}
