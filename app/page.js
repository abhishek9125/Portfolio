import About from '@/components/About'
import Hero from '@/components/Hero'
import FeaturedCaseStudy from '@/components/FeaturedCaseStudy'
import Work from '@/components/Work'
import Reviews from '@/components/Reviews'
import Cta from '@/components/Cta'

export default function Home() {
	return (
		<main className="section-gap min-w-0 overflow-x-hidden">
			<Hero />
			<About />
			<FeaturedCaseStudy />
			<Work />
			<Reviews />
			<Cta />
		</main>
	)
}
