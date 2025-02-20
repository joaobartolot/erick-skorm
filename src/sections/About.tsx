import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { twJoin } from 'tailwind-merge'
import MortarboardLight from '../assets/icons/Mortarboard-light.svg?react'
import Mortarboard from '../assets/icons/Mortarboard.svg?react'
import Academic from '../assets/images/academic.svg?react'
import Formacao from '../assets/images/formacao.svg?react'
import AnimatedImage from '../components/AnimatedImage'
import AnimatedStroke from '../components/AnimatedStroke'
import DownloadCV from '../components/DownloadCV'
import Square from '../components/Square'
import { useCurrentLanguage } from '../hooks/useCurrentLanguage'

const About = () => {
	const { isEnglish } = useCurrentLanguage()
	const { t } = useTranslation()
	const [trigger, setTrigger] = useState(false)
	const sectionRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.intersectionRatio >= 0.6) {
					setTrigger(true)
				} else {
					setTrigger(false)
				}
			},
			{ threshold: 0.6 }
		)

		if (sectionRef.current) {
			observer.observe(sectionRef.current)
		}

		return () => observer.disconnect()
	}, [])

	return (
		<section
			id="about"
			className="w-full flex flex-col justify-center items-center pt-32"
			data-section
		>
			<div className="flex flex-col md:flex-row justify-center items-center w-full max-w-7xl py-8">
				<div className="md:hidden text-3xl font-black leading-0 text-start w-fit">
					{t('about.sectionTitle')}
					<AnimatedStroke
						className="w-24 stroke-4 text-primary dark:text-primary"
						strokeWidth={6}
						trigger={trigger}
					/>
				</div>

				<div
					ref={sectionRef}
					className="aspect-square m-20 md:my-0 pb-12"
				>
					<div className="relative aspect-square rotate-45">
						<div className="rounded-[10%] overflow-hidden w-[250px] md:w-[300px] lg:w-[400px] aspect-square">
							<AnimatedImage
								width={400}
								height={400}
								src="/images/erick-skorm.png"
								alt={t('about.erickPortraitAlt')}
								className="scale-140 -rotate-45"
							/>
						</div>
						<Square className="hidden md:block absolute -bottom-[40px] translate-y-[100%] w-[100%] -z-10" />
						<Square className="hidden md:block absolute -right-[40px] -bottom-[50%] translate-x-[100%] w-[100%] -z-10" />
					</div>
				</div>

				<div className="flex flex-col text-center md:text-start lg:ml-24 px-6">
					<div className="hidden md:block text-3xl font-black leading-0 text-start w-fit">
						{t('about.sectionTitle')}
						<AnimatedStroke
							className="w-24 stroke-4 text-primary dark:text-primary"
							strokeWidth={6}
							trigger={trigger}
						/>
					</div>
					<div
						className="text-6xl font-black"
						dangerouslySetInnerHTML={{
							__html: t('about.greeting'),
						}}
					/>
					<div className="text-primary font-medium text-[28px] my-2 w-full">
						{t('about.introduction')}
					</div>
					<div className="text-base max-w-[300px] py-4">
						{t('about.bio')}
					</div>
					<div className="flex justify-center md:justify-start my-4">
						<DownloadCV />
					</div>
				</div>
			</div>

			<div className="flex flex-col md:flex-row justify-center items-center w-full bg-gradient-to-t from-white from-50% to-transparent dark:from-black z-0">
				<div className="flex flex-col items-center md:items-start text-center md:text-start max-w-[400px] text-sm px-6 py-8">
					<Mortarboard className="hidden dark:block w-[72px] h-[72px] aspect-square object-cover" />
					<MortarboardLight className="dark:hidden w-[72px] h-[72px] aspect-square object-cover" />
					<div className="flex flex-col items-center md:items-start mb-6">
						{isEnglish ? (
							<Academic className="h-[48px] w-fit" />
						) : (
							<Formacao className="pl-2 h-[56px] w-fit" />
						)}
						<div
							className={twJoin(
								'text-6xl font-black',
								!isEnglish ? 'leading-8 tracking-tighter' : ''
							)}
						>
							{t('about.backgroundTitle')}
						</div>
					</div>
					<div className="mt-4">
						{t('about.backgroundDescription')}
					</div>
				</div>
				<div className="relative md:self-end md:w-[600px]">
					<AnimatedImage
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, ease: 'easeInOut' }}
						width="600"
						height="525"
						src="/images/pencil-guy.png"
						alt={t('about.pencilGuyAlt')}
					/>
					<img
						src="/images/diamond.png"
						className="absolute top-0 right-0 w-16"
					/>
				</div>
			</div>
		</section>
	)
}

export default About
