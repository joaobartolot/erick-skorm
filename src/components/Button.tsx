import React from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
	className?: string
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
	return (
		<button
			className={twMerge(
				'shadow-button disabled:bg-disabled flex h-fit cursor-pointer items-center justify-center',
				'rounded-md px-6 py-4 text-base font-semibold transition duration-300 disabled:cursor-auto',
				'bg-primary hover:bg-secondary text-white',
				className
			)}
			{...props}
		>
			{children}
		</button>
	)
}

export default Button
