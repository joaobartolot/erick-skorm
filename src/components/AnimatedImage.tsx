import {
	motion,
	TargetAndTransition,
	Transition,
	VariantLabels,
} from 'framer-motion'
import { ReactNode, useState } from 'react'
import { twJoin } from 'tailwind-merge'

interface AnimatedImageProps {
	src: string
	alt: string
	width?: string | number
	height?: string | number
	className?: string
	initial?: boolean | TargetAndTransition | VariantLabels
	animate?: boolean | TargetAndTransition | VariantLabels
	transition?: Transition
	placeholder?: ReactNode
	onLoad?: () => void
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({
	src,
	alt,
	width,
	height,
	className,
	initial,
	animate,
	transition,
	placeholder,
	onLoad,
}) => {
	const [loaded, setLoaded] = useState(false)
	const handleLoad = () => {
		setLoaded(true)
		if (onLoad) {
			onLoad()
		}
	}

	return (
		<>
			{!loaded && placeholder}
			<motion.img
				src={src}
				alt={alt}
				width={width}
				height={height}
				onLoad={handleLoad}
				initial={initial || { opacity: 0, y: 20 }}
				animate={loaded ? animate || { opacity: 1, y: 0 } : {}}
				transition={transition || { duration: 0.5, ease: 'easeOut' }}
				className={twJoin(loaded ? className : 'hidden')}
			/>
		</>
	)
}

export default AnimatedImage
