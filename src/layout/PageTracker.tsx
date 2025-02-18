import { motion } from 'framer-motion'
import { twJoin } from 'tailwind-merge'
import useActiveSection from '../hooks/useActiveSection'

const offset = 80

const PageTracker = () => {
	const activeId = useActiveSection(0.2)

	// Get all sections dynamically
	const sections = Array.from(
		document.querySelectorAll('[data-section]')
	).map(section => section.id)

	const handleClick = (id: string) => {
		const sectionElement = document.getElementById(id)
		console.log(id)
		if (sectionElement) {
			const sectionPosition =
				sectionElement.getBoundingClientRect().top +
				window.scrollY -
				offset

			window.scrollTo({
				top: sectionPosition,
				behavior: 'smooth',
			})
		}
	}

	return (
		<div className="hidden fixed top-1/2 right-4 -translate-y-1/2 md:flex flex-col gap-4 z-30">
			{sections.map(id => (
				<div
					key={id}
					className="relative cursor-pointer"
					onClick={() => handleClick(id)}
				>
					<div
						className={twJoin(
							'w-4 h-4 rounded-full transition-all bg-light-gray dark:bg-light-gray'
						)}
					>
						<motion.div
							className="absolute inset-0 bg-primary rounded-full"
							initial={{ scale: 0 }}
							animate={{ scale: activeId === id ? 1 : 0 }}
							transition={{ duration: 0.3 }}
						/>
					</div>
				</div>
			))}
		</div>
	)
}

export default PageTracker
