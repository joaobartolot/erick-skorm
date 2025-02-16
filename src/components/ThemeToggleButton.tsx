import { useEffect, useState } from 'react'
import Moon from '../assets/icons/moon.svg?react'
import Sun from '../assets/icons/sun.svg?react'

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
		<button onClick={toggleTheme}>
			{theme === 'dark' ? (
				<Sun className="w-10 aspect-square" />
			) : (
				<Moon className="w-10 aspect-square" />
			)}
		</button>
	)
}
