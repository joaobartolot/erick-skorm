import { motion } from 'framer-motion'
import { twJoin } from 'tailwind-merge'

interface PaginationProps {
	length: number
	activeIndex: number
	onChange: (index: number) => void
	className?: string
}

const Pagination = ({
	length,
	activeIndex,
	onChange,
	className,
}: PaginationProps) => {
	return (
		<div
			className={twJoin(
				'lg:hidden flex justify-center gap-3 mt-6',
				className
			)}
		>
			{Array.from({ length }).map((_, index) => (
				<div
					key={index}
					className="relative cursor-pointer"
					onClick={() => onChange(index)} // Handle click event
				>
					{/* Outer circle */}
					<div className="w-4 h-4 rounded-full transition-all bg-gray-400 dark:bg-gray-600" />

					{/* Animated inner circle */}
					<motion.div
						className="absolute inset-0 bg-primary rounded-full"
						initial={{ scale: 0 }}
						animate={{ scale: activeIndex === index ? 1 : 0 }}
						transition={{ duration: 0.3 }}
					/>
				</div>
			))}
		</div>
	)
}

export default Pagination
