import { useEffect, useState } from 'react'

export default function ThemeToggleButton() {
	const [theme, setTheme] = useState(() => {
		// Check system preference
		return window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light'
	})

	useEffect(() => {
		// Update CSS variables dynamically
		if (theme === 'dark') {
			document.documentElement.style.setProperty(
				'--color-bg',
				'var(--color-bg-dark)'
			)
			document.documentElement.style.setProperty(
				'--color-text',
				'var(--color-text-dark)'
			)
		} else {
			document.documentElement.style.setProperty(
				'--color-bg',
				'var(--color-bg-light)'
			)
			document.documentElement.style.setProperty(
				'--color-text',
				'var(--color-text-light)'
			)
		}
	}, [theme])

	const toggleTheme = () => {
		setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
	}

	return (
		<button
			onClick={toggleTheme}
			className="p-2 rounded-lg border border-gray-300 bg-[var(--color-bg)] text-[var(--color-text)] hover:bg-opacity-80 transition"
		>
			{theme === 'dark' ? '🌙 Dark Mode' : '☀️ Light Mode'}
		</button>
	)
}
