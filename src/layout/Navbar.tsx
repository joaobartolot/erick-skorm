import { useEffect, useRef, useState } from 'react'
import { twJoin } from 'tailwind-merge'
import Logo from '../assets/images/logo.svg?react'
import Button from '../components/Button'
import ThemeToggleButton from '../components/ThemeToggleButton'

const offset = 80

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)
	const headerRef = useRef<HTMLElement>(null)

	useEffect(() => {
		if (!isOpen) return

		const handleClickOutside = (event: MouseEvent) => {
			if (
				headerRef.current &&
				!headerRef.current.contains(event.target as Node)
			) {
				setIsOpen(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [isOpen])

	const scrollToElement = (sectionId: string) => {
		const sectionElement = document.getElementById(sectionId)
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
	const handleAnchorClick = (
		event: React.MouseEvent<HTMLAnchorElement>,
		sectionId: string
	) => {
		event.preventDefault() // Prevent default anchor link behavior
		scrollToElement(sectionId)
	}

	return (
		<nav
			ref={headerRef}
			className={twJoin(
				'fixed flex h-[80px] w-full items-center justify-center px-4 z-30',
				'md:px-12'
			)}
		>
			<div className="relative flex w-full items-center justify-between">
				<div
					onClick={() => window.scrollTo(0, 0)}
					className={twJoin(
						'absolute inset-0 z-40 flex h-full w-full items-center justify-center cursor-pointer',
						'md:static md:w-fit'
					)}
				>
					<Logo className="w-24 h-fit" />
				</div>

				<div className="flex space-x-4 z-50">
					<ThemeToggleButton />
					<Button
						onClick={() => scrollToElement('contact')}
						className="text-sm md:text-base"
					>
						Hire me
					</Button>
				</div>

				<div
					className={twJoin(
						'absolute inset-0 hidden h-full items-center justify-center space-x-12',
						'md:flex'
					)}
				>
					<a
						href="#about"
						onClick={e => handleAnchorClick(e, 'about')}
					>
						About
					</a>
					<a
						href="#experience"
						onClick={e => handleAnchorClick(e, 'experience')}
					>
						Experience
					</a>
					<a
						href="#projects"
						onClick={e => handleAnchorClick(e, 'projects')}
					>
						Projects
					</a>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
