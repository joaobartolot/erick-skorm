import './App.css'
import Navbar from './layout/Navbar'
import About from './sections/About'
import Experience from './sections/Experience'
import Hero from './sections/Hero'
import Projects from './sections/Projects'

function App() {
	return (
		<>
			<Navbar />
			<main className="overflow-hidden">
				<Hero />
				<About />
				<Experience />
				<Projects />
			</main>
		</>
	)
}

export default App
