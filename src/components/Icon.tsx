import React from 'react'
import { twMerge } from 'tailwind-merge'

interface IconProps {
	name: string
	className?: string
	alt?: string
}

const Icon: React.FC<IconProps> = ({ name, className, alt }) => {
	return (
		<>
			<img
				src={`/icons/${name}.png`}
				alt={alt || `${name} Icon`}
				className={twMerge('w-12 dark:hidden', className)}
			/>
			<img
				src={`/icons/${name}-light.png`}
				alt={alt || `${name} Icon`}
				className={twMerge('w-12 hidden dark:block', className)}
			/>
		</>
	)
}

export default Icon
