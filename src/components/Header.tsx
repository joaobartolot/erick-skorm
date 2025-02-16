import { useEffect, useRef, useState } from 'react'
import { twJoin } from 'tailwind-merge'
import Logo from '../assets/images/logo.svg?react'
import Button from './Button'
import ThemeToggleButton from './ThemeToggleButton'

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [frostHeader, setFrostHeader] = useState(false)
	const headerRef = useRef<HTMLElement>(null)
	const [offset, setOffset] = useState(60)
	const [hideFast, setHideFast] = useState(false)

	// Update offset based on screen width
	useEffect(() => {
		const updateOffset = () => {
			const md = window.matchMedia('(min-width: 768px)').matches
			if (md) {
				setIsOpen(false)
				setHideFast(false)
				setOffset(72)
				return
			}
			setOffset(60)
			setHideFast(true)
		}

		updateOffset() // Set initial value
		window.addEventListener('resize', updateOffset)

		return () => window.removeEventListener('resize', updateOffset)
	}, [])

	useEffect(() => {
		window.onscroll = () =>
			window.scrollY === 0 ? setFrostHeader(false) : setFrostHeader(true)

		return () => {
			window.onscroll = null
		}
	}, [])

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
		<header
			ref={headerRef}
			className={twJoin(
				'fixed flex w-full items-center justify-center px-4 py-4 z-30',
				'md:px-12',
				!isOpen && hideFast ? 'delay-300' : '',
				isOpen && hideFast ? '' : 'transition-color duration-300',
				frostHeader && !isOpen ? 'bg-white/5 backdrop-blur-sm' : ''
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
					<Logo className="w-32 h-fit" />
				</div>

				<div className="flex space-x-3 z-50">
					<ThemeToggleButton />
					<Button
						onClick={() => scrollToElement('contact')}
						className="text-sm md:text-base"
					>
						Hire me
					</Button>
				</div>

				<nav
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
				</nav>
			</div>
		</header>
	)
}

export default Header
