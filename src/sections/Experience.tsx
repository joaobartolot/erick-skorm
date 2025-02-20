import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Swiper as SwiperCore } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { twJoin } from 'tailwind-merge'
import AnimatedStroke from '../components/AnimatedStroke'
import ExperienceCard from '../components/ExperienceCard'
import MarqueeTools from '../components/MarqueeTools'
import Pagination from '../components/Pagination'

const Experience = () => {
	const { t } = useTranslation()
	const [trigger, setTrigger] = useState(false)
	const [activeIndex, setActiveIndex] = useState(0)
	const sectionRef = useRef<HTMLDivElement | null>(null)
	const swiperRef = useRef<SwiperCore | null>(null)

	const experiences = t('experiences', {
		returnObjects: true,
	}) as unknown as Array<{
		logo: string
		company: string
		industry: string
		role: string
		description: string
	}>

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
		<section id="experience" className="relative w-full" data-section>
			<div
				className={twJoin(
					'absolute top-0 -translate-y-[50%] -translate-x-[5%] w-[110%] pt-4 -rotate-3',
					'bg-gradient-to-t from-black/50 from-70% md:from-40% dark:md:from-80% to-transparent dark:from-black'
				)}
			>
				<MarqueeTools />
			</div>

			<div className="flex flex-col justify-center items-center pt-24 w-full">
				<div className="text-3xl font-black w-fit leading-0">
					{t('experience.sectionTitle')}
					<AnimatedStroke
						className="w-full text-primary dark:text-primary"
						trigger={trigger}
					/>
				</div>
				<div
					ref={sectionRef}
					className="max-w-prose text-center md:text-start mt-8 px-6 md:px-0"
				>
					{t('experience.description')}
				</div>

				<div className="flex justify-center md:justify-between items-center w-full max-w-7xl mb-12 my-24">
					<div className="p-4 md:p-2 rounded-lg w-fit h-fit text-xl md:text-base font-black md:font-normal whitespace-nowrap bg-primary dark:bg-primary text-white dark:text-white">
						{t('experience.latestExperiences')}
					</div>
					<div className="hidden md:block w-full h-[1px] mx-6 bg-primary dark:bg-primary" />
					<img
						src="/icons/profiles.png"
						alt=""
						className="hidden md:block w-12"
					/>
				</div>

				<Swiper
					loop
					freeMode
					onSwiper={swiper => (swiperRef.current = swiper)}
					onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
					breakpoints={{
						640: {
							slidesPerView: 1,
						},
						768: {
							slidesPerView: 2,
						},
						1024: {
							slidesPerView: 3,
						},
					}}
					className="w-full max-w-7xl"
				>
					{experiences.map((experience, index) => (
						<SwiperSlide
							key={index}
							className="flex justify-center items-center"
						>
							<div className="flex justify-center items-center w-full">
								<ExperienceCard {...experience} />
							</div>
						</SwiperSlide>
					))}
				</Swiper>

				{/* Clickable Pagination */}
				<Pagination
					length={experiences.length}
					activeIndex={activeIndex}
					onChange={index => swiperRef.current?.slideToLoop(index)}
					className="mt-8"
				/>

				<div className="max-w-7xl px-6 my-12">
					{t('experience.additionalInfo')}
				</div>
			</div>
		</section>
	)
}

export default Experience
