import { SITE_URL } from '@/constants'

export default function manifest() {
    return {
        name: 'Abhishek Agarwal — Full-Stack Engineer',
        short_name: 'Abhishek',
        description:
            'Portfolio of Abhishek Agarwal — full-stack engineer at Flipkart. Case studies, projects, and experience.',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        background_color: '#fef9f5',
        theme_color: '#FE705A',
        icons: [
            {
                src: '/logo.svg',
                sizes: 'any',
                type: 'image/svg+xml',
                purpose: 'any',
            },
        ],
        id: SITE_URL,
    }
}
