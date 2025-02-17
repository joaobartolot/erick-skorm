import { motion, useAnimationControls } from 'framer-motion'
import { useEffect } from 'react'

interface AnimatedStrokeProps {
	trigger: boolean
	strokeWidth?: number
	strokeLength?: number
	className?: string
}

const AnimatedStroke: React.FC<AnimatedStrokeProps> = ({
	trigger,
	strokeWidth = 4,
	strokeLength = 1,
	className,
}) => {
	const controls = useAnimationControls()

	useEffect(() => {
		if (trigger) {
			controls.start({ strokeDashoffset: 0 })
		} else {
			controls.set({ strokeDashoffset: 200 }) // Completely hides the stroke
		}
	}, [trigger, strokeLength, controls])

	return (
		<svg width="165" height="32" viewBox="0 0 165 32" className={className}>
			<motion.path
				d="M5,24 Q85,12 160,24"
				fill="transparent"
				stroke="currentColor"
				strokeWidth={strokeWidth}
				strokeLinecap="round"
				transform="rotate(-2.5, 85, 15)"
				strokeDasharray="200" // Total stroke length
				initial={{ strokeDashoffset: 200 }} // Fully hidden
				animate={controls}
				transition={{ duration: 0.3, ease: 'easeInOut' }}
			/>
		</svg>
	)
}

export default AnimatedStroke
