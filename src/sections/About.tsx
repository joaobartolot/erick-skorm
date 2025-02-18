import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import MortarboardLight from '../assets/icons/Mortarboard-light.svg?react'
import Mortarboard from '../assets/icons/Mortarboard.svg?react'
import Academic from '../assets/images/academic.svg?react'
import AnimatedStroke from '../components/AnimatedStroke'
import DownloadCV from '../components/DownloadCV'
import Square from '../components/Square'

const About = () => {
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
					About
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
						<div className="rounded-[10%]  overflow-hidden">
							<img
								src="/images/erick-skorm.png"
								alt="Black and white portrait of Erick Skorm, a software developer, wearing a long-sleeved sweater and a smartwatch. He has short curly hair and a contemplative expression, gazing thoughtfully to the side with his hand resting on his chin. The background is plain and minimalistic."
								width="400"
								height="400"
								loading="lazy"
								className="scale-140 -rotate-45"
							/>
						</div>
						<Square className="hidden md:block absolute -bottom-[40px] translate-y-[100%] w-[100%] -z-10" />
						<Square className="hidden md:block absolute -right-[40px] -bottom-[50%] translate-x-[100%] w-[100%] -z-10" />
					</div>
				</div>
				<div className="flex flex-col text-center md:text-start md:ml-24 px-6">
					<div className="hidden md:block text-3xl font-black leading-0 text-start w-fit">
						About
						<AnimatedStroke
							className="w-24 stroke-4 text-primary dark:text-primary"
							strokeWidth={6}
							trigger={trigger}
						/>
					</div>
					<div className="text-6xl font-black">
						Hey,
						<br />
						What’s up?
					</div>
					<div className="text-primary font-medium text-[28px] my-2 w-full">
						Let me introduce myself.
					</div>
					<div className="text-base max-w-[300px] py-4">
						My name is Erick Silva, also known as Skorm. I’m
						Brazilian, currently based in Lisbon, and always seeking
						new experiences and challenges. Whether in my work or
						personal life, my mission is to learn and share what I
						can with the world around me.
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
					<div className="flex flex-col items-center md:items-start">
						<Academic className="h-[48px] w-fit" />
						<div className="text-6xl font-black">background</div>
					</div>
					<div className="mt-4">
						I hold a Bachelor's degree in Advertising and Propaganda
						from Universidade Estácio de Sá, based in Rio de
						Janeiro, where I developed a strong foundation in
						marketing, communication, and creative strategy. In
						addition to my undergraduate studies, I pursued an MBA
						in Business Management and Strategy, which helped me
						gain a deeper understanding of corporate dynamics,
						leadership, and strategic planning. Furthermore, I
						completed a second postgraduate degree in Digital
						Product Design (UX/UI) at Faculdade Anhanguera,
						equipping me with advanced skills in user experience and
						interface design, focused on creating intuitive and
						impactful digital products.
					</div>
				</div>
				<div className="relative self-end">
					<motion.img
						initial={{
							opacity: 0,
							y: 20,
						}}
						animate={{
							opacity: 1,
							y: 0,
						}}
						transition={{ duration: 0.5, ease: 'easeInOut' }}
						width="600"
						height="525"
						src="/images/pencil-guy.png"
						alt="A classical-style marble statue wearing red sunglasses and holding a red pencil while reading a book, giving a modern and humorous academic aesthetic."
						loading="lazy"
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
