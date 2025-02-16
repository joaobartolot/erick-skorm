import React from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
	variant?: 'primary' | 'outline'
	className?: string
}

const Button: React.FC<ButtonProps> = ({
	children,
	className,
	variant = 'primary',
	...props
}) => {
	const variantClasses = {
		primary: 'bg-primary border-none text-white hover:bg-secondary',
		outline:
			'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white',
	}

	return (
		<button
			className={twMerge(
				'shadow-button disabled:bg-disabled flex h-fit cursor-pointer items-center justify-center',
				'rounded-md px-4 py-3 text-base font-semibold transition duration-300 disabled:cursor-auto',
				variantClasses[variant],
				className
			)}
			{...props}
		>
			{children}
		</button>
	)
}

export default Button
