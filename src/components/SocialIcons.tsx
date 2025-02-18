import React from 'react'
import { twMerge } from 'tailwind-merge'
import Icon from './Icon'

interface SocialIcon {
	href: string
	name: string
}

const icons: SocialIcon[] = [
	{ href: 'https://www.instagram.com/erickskorm/', name: 'instagram' },
	{ href: 'https://x.com/_skorm', name: 'x' },
	{ href: 'https://linkedin.com/in/erick-silva-b393a515a', name: 'linkedin' },
	{ href: 'https://behance.net/erickskorm', name: 'behance' },
]

interface SocialIconsProps {
	className?: string
}

const SocialIcons: React.FC<SocialIconsProps> = ({ className }) => {
	return (
		<div className={twMerge('flex justify-between', className)}>
			{icons.map(icon => (
				<a
					key={icon.name}
					href={icon.href}
					target="_blank"
					rel="noopener noreferrer"
				>
					<Icon name={icon.name} className="w-10" />
				</a>
			))}
		</div>
	)
}

export default SocialIcons
