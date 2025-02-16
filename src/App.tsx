import './App.css'
import Navbar from './layout/Navbar'
import Hero from './sections/Hero'

function App() {
	return (
		<>
			<Navbar />
			<main className="overflow-hidden">
				<Hero />
			</main>
		</>
	)
}

export default App
