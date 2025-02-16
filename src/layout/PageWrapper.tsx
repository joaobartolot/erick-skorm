import { useEffect } from 'react'

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
	useEffect(() => {
		const handleSmoothScroll = (event: Event) => {
			const target = event.target as HTMLAnchorElement
			if (target.hash) {
				event.preventDefault()
				const section = document.querySelector(target.hash)
				if (section) {
					window.scrollTo({
						top:
							section.getBoundingClientRect().top +
							window.scrollY -
							80, // Offset for Navbar
						behavior: 'smooth',
					})
				}
			}
		}

		document.addEventListener('click', handleSmoothScroll)
		return () => document.removeEventListener('click', handleSmoothScroll)
	}, [])

	return <div className="text-white bg-black">{children}</div>
}

export default PageWrapper
