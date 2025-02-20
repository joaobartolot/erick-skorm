import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { twJoin } from 'tailwind-merge'
import Logo from '../assets/images/logo.svg?react'
import Button from '../components/Button'
import LanguageSwitcher from '../components/LanguageSwitcher'
import ThemeToggleButton from '../components/ThemeToggleButton'

const offset = 80

const Navbar = () => {
	const { t } = useTranslation()
	const [isOpen, setIsOpen] = useState(false)
	const [frostHeader, setFrostHeader] = useState(false)
	const headerRef = useRef<HTMLElement>(null)
	const [hideFast, setHideFast] = useState(false)

	useEffect(() => {
		const updateOffset = () => {
			const md = window.matchMedia('(min-width: 768px)').matches
			if (md) {
				setIsOpen(false)
				setHideFast(false)
				return
			}
			setHideFast(true)
		}

		updateOffset()
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

	const topVariants = {
		closed: { rotate: 0, y: 0 },
		open: { width: '100%', rotate: 45, y: 8 },
	}

	const middleVariants = {
		closed: { opacity: 1 },
		open: { opacity: 0 },
	}

	const bottomVariants = {
		closed: { rotate: 0, y: 0 },
		open: { rotate: -45, y: -8, width: '100%' },
	}

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
		event.preventDefault()
		scrollToElement(sectionId)
		setIsOpen(false)
	}

	return (
		<header
			ref={headerRef}
			className={twJoin(
				'fixed flex w-full items-center justify-center h-[80px] px-4 py-4 z-30',
				'md:px-12',
				!isOpen && hideFast ? 'delay-300' : '',
				isOpen && hideFast ? '' : 'transition-color duration-300',
				frostHeader && !isOpen ? 'bg-white/5 backdrop-blur-sm' : ''
			)}
		>
			<div className="relative flex w-full items-center justify-between">
				<div
					className={twJoin(
						'absolute inset-0 z-40 flex h-full w-full items-center justify-center',
						'md:static md:w-fit'
					)}
				>
					<button
						onClick={() => window.scrollTo(0, 0)}
						className="cursor-pointer"
					>
						<Logo className="w-18 md:w-24 h-fit" />
					</button>
				</div>
				<button
					className="z-50 flex h-6 w-8 flex-col justify-around md:hidden"
					onClick={() => setIsOpen(!isOpen)}
				>
					<motion.span
						className="h-[3px] w-[60%] rounded-full bg-black dark:bg-white self-end"
						variants={topVariants}
						animate={isOpen ? 'open' : 'closed'}
						transition={{ duration: 0.3 }}
					/>

					<motion.span
						className="h-[3px] w-full rounded-full bg-black dark:bg-white"
						variants={middleVariants}
						animate={isOpen ? 'open' : 'closed'}
						transition={{ duration: 0.3 }}
					/>

					<motion.span
						className="h-[3px] w-[60%] rounded-full bg-black dark:bg-white"
						variants={bottomVariants}
						animate={isOpen ? 'open' : 'closed'}
						transition={{ duration: 0.3 }}
					/>
				</button>

				<div className="flex items-center gap-2 md:gap-4 z-50">
					<ThemeToggleButton />
					<LanguageSwitcher />
					<Button
						onClick={() => scrollToElement('contact')}
						className="hidden md:block text-xs md:text-base px-4 py-2 md:px-4 md:py-3"
					>
						{t('navbar.hireMe')}
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
						className="hover:text-primary transition-colors"
					>
						{t('navbar.about')}
					</a>
					<a
						href="#experience"
						onClick={e => handleAnchorClick(e, 'experience')}
						className="hover:text-primary transition-colors"
					>
						{t('navbar.experience')}
					</a>
					<a
						href="#projects"
						onClick={e => handleAnchorClick(e, 'projects')}
						className="hover:text-primary transition-colors"
					>
						{t('navbar.projects')}
					</a>
				</nav>
			</div>
			<motion.nav
				initial={{ x: '-100%' }}
				animate={{ x: isOpen ? 0 : '-100%' }}
				exit={{ x: '-100%' }}
				transition={{
					type: 'tween',
					duration: 0.4,
					ease: 'easeOut',
				}}
				className={twJoin(
					'md:hidden absolute top-0 left-0 overflow-hidden bg-white/5 backdrop-blur-sm',
					'z-40 flex flex-col items-start space-y-6 py-24 pl-4 pr-24 rounded-br-[30px]'
				)}
			>
				<a
					href="#about"
					onClick={e => handleAnchorClick(e, 'about')}
					className="hover:text-primary transition-colors"
				>
					{t('navbar.about')}
				</a>
				<a
					href="#experience"
					onClick={e => handleAnchorClick(e, 'experience')}
					className="hover:text-primary transition-colors"
				>
					{t('navbar.experience')}
				</a>
				<a
					href="#projects"
					onClick={e => handleAnchorClick(e, 'projects')}
					className="hover:text-primary transition-colors"
				>
					{t('navbar.projects')}
				</a>
			</motion.nav>
		</header>
	)
}

export default Navbar
