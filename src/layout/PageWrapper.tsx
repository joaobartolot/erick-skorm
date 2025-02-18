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
							80,
						behavior: 'smooth',
					})
				}
			}
		}

		document.addEventListener('click', handleSmoothScroll)
		return () => document.removeEventListener('click', handleSmoothScroll)
	}, [])

	return <div>{children}</div>
}

export default PageWrapper
