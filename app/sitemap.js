import { SITE_URL, caseStudies } from '@/constants'

export default function sitemap() {
    const staticRoutes = ['', '/projects', '/contact', '/case-studies']
    const caseStudyRoutes = caseStudies.map((study) => `/case-study/${study.slug}`)

    return [...staticRoutes, ...caseStudyRoutes].map((path) => ({
        url: `${SITE_URL}${path}`,
        lastModified: new Date(),
        changeFrequency: path === '' ? 'weekly' : 'monthly',
        priority: path === '' ? 1 : path.startsWith('/case-study') ? 0.8 : 0.7,
    }))
}
