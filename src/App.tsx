import './App.css'
import Footer from './layout/Footer'
import Navbar from './layout/Navbar'
import PageTracker from './layout/PageTracker'
import PageWrapper from './layout/PageWrapper'
import About from './sections/About'
import Contact from './sections/contact'
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
		</PageWrapper>
	)
}

export default App
