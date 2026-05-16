import BackToTop from '@/components/BackToTop'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HiringStrip from '@/components/HiringStrip'
import JsonLd from '@/components/JsonLd'
import SkipToContent from '@/components/SkipToContent'
import UtmCapture from '@/components/UtmCapture'
import { ThemeProvider } from '@/components/ThemeProvider'
import { SITE_URL } from '@/constants'
import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: 'Abhishek Agarwal | Full-Stack Software Engineer',
        template: '%s | Abhishek Agarwal',
    },
    description:
        'Portfolio of Abhishek Agarwal — full-stack engineer at Flipkart building React, Node.js, and cloud systems at scale.',
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: SITE_URL,
        siteName: 'Abhishek Agarwal',
        title: 'Abhishek Agarwal | Full-Stack Software Engineer',
        description:
            'Full-stack engineer at Flipkart. Case studies, projects, and experience across e-commerce at scale.',
        images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Abhishek Agarwal Portfolio' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Abhishek Agarwal | Full-Stack Software Engineer',
        description: 'Full-stack engineer at Flipkart — React, Node.js, GCP, AWS.',
        images: ['/og.png'],
    },
    robots: { index: true, follow: true },
    alternates: {
        canonical: SITE_URL,
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={outfit.className}>
                <JsonLd />
                <UtmCapture />
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <SkipToContent />
                    <Header />
                    <HiringStrip />
                    <div id="main-content" className="min-w-0 overflow-x-hidden">{children}</div>
                    <Footer />
                    <BackToTop />
                </ThemeProvider>
            </body>
        </html>
    )
}
