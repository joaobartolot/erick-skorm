import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import useActiveSection from '../hooks/useActiveSection'

const ScrollToTopButton = () => {
	const activeSection = useActiveSection(0.4)
	const [position, setPosition] = useState<'top' | 'middle' | 'bottom'>('top')

	const variants = {
		top: { opacity: 0 },
		middle: { opacity: 1 },
		bottom: { bottom: 90, opacity: 1 },
	}

	useEffect(() => {
		if (!activeSection) {
			setPosition('top')
			return
		}
		if (activeSection === 'hero') {
			setPosition('top')
			return
		} else if (activeSection === 'contact') {
			setPosition('bottom')
			return
		}
		setPosition('middle')
	}, [activeSection])

	return (
		<motion.button
			initial={{ opacity: 0 }}
			variants={variants}
			animate={position}
			transition={{ duration: 0.2, ease: 'easeIn' }}
			className="fixed md:hidden bottom-5 right-5 rounded-4xl z-50"
			onClick={() => window.scrollTo(0, 0)}
		>
			<img
				src="/icons/up.png"
				alt="Up icon"
				className="w-8 aspect-square"
			/>
		</motion.button>
	)
}

export default ScrollToTopButton
