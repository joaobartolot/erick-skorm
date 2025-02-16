import './App.css'
import Navbar from './layout/Navbar'
import About from './sections/About'
import Hero from './sections/Hero'

function App() {
	return (
		<>
			<Navbar />
			<main className="overflow-hidden">
				<Hero />
				<About />
			</main>
		</>
	)
}

export default App
