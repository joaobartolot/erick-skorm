import React from 'react'
import { twMerge } from 'tailwind-merge'

type SquareProps = {
	className?: string
}

const Square: React.FC<SquareProps> = ({ className }) => {
	return (
		<div
			className={twMerge(
				'aspect-[1/1] rounded-[10%] border dark:border-white/30 border-black/30 bg-transparent w-[500px] transition-colors duration-300',
				className
			)}
		></div>
	)
}

export default Square
