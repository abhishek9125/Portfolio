import { SITE_URL } from '@/constants'

const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Abhishek Agarwal',
    jobTitle: 'Senior Software Engineer',
    url: SITE_URL,
    email: 'mailto:abhishek4075@gmail.com',
    sameAs: [
        'https://www.linkedin.com/in/abhishek9125',
        'https://github.com/abhishek9125',
        'https://medium.com/@abhishek4075',
    ],
    worksFor: {
        '@type': 'Organization',
        name: 'Flipkart',
    },
    knowsAbout: [
        'React',
        'Next.js',
        'TypeScript',
        'Node.js',
        'Cloud Computing',
        'Performance Engineering',
    ],
}

export default function JsonLd() {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
    )
}
