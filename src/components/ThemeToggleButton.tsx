import { useEffect, useState } from 'react'
import Moon from '../assets/icons/moon.svg?react'
import Sun from '../assets/icons/sun.svg?react'

const ThemeToggleButton = () => {
	// Initialize theme: use stored value if available, otherwise use system preference.
	const [theme, setTheme] = useState(() => {
		const storedTheme = localStorage.getItem('theme')
		if (storedTheme) return storedTheme
		// If no stored theme, check system preference
		return window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light'
	})

	useEffect(() => {
		// Update the HTML element's class based on the current theme.
		document.documentElement.setAttribute('data-theme', theme)
		// Remember the user's preference in localStorage.
		localStorage.setItem('theme', theme)
	}, [theme])

	// Toggle between dark and light modes.
	const toggleTheme = () => {
		setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
	}

	return (
		<button
			onClick={toggleTheme}
			aria-label="Toggle Dark Mode"
			className="cursor-pointer"
		>
			{theme === 'dark' ? (
				<Sun className="w-7 md:w-8 aspect-square" />
			) : (
				<Moon className="w-7 md:w-8 aspect-square" />
			)}
		</button>
	)
}

export default ThemeToggleButton
