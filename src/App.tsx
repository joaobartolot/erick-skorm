import './App.css'
import Footer from './layout/Footer'
import Navbar from './layout/Navbar'
import PageTracker from './layout/PageTracker'
import PageWrapper from './layout/PageWrapper'
import ScrollToTopButton from './layout/ScrollToTopButton'
import About from './sections/About'
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import Hero from './sections/Hero'
import Projects from './sections/Projects'

function App() {
	return (
		<PageWrapper>
			<Navbar />
			<PageTracker />
			<main className="overflow-hidden">
				<Hero />
				<About />
				<Experience />
				<Projects />
				<Contact />
			</main>
			<Footer />
			<ScrollToTopButton />
		</PageWrapper>
	)
}

export default App
