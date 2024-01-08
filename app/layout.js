import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
	title: 'Abhishek\'s Portfolio',
	description: 'Personal Porfolio of Abhishek Agarwal - Senior Software Engineer @ MamaEarth',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={outfit.className}>
				<ThemeProvider attribute="class" defaultTheme="light">
					<Header />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	)
}
