import { useEffect, useRef, useState } from 'react'
import { twJoin } from 'tailwind-merge'
import AnimatedStroke from '../components/AnimatedStroke'
import MarqueeTools from '../components/MarqueeTools'

const Experience = () => {
	const [trigger, setTrigger] = useState(false)
	const sectionRef = useRef<HTMLElement | null>(null)

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
			id="experience"
			ref={sectionRef}
			className="relative w-full h-screen"
		>
			<div
				className={twJoin(
					'absolute top-0 -translate-y-[50%] -translate-x-[5%] w-[110%] pt-4 -rotate-3',
					'bg-gradient-to-t from-black/60 from-80% to-transparent dark:from-black '
				)}
			>
				<MarqueeTools />
			</div>

			<div className="flex flex-col justify-center items-center pt-24 w-full">
				<div className="text-3xl font-black w-fit leading-0">
					Experience
					<AnimatedStroke
						className="w-full text-primary dark:text-primary"
						trigger={trigger}
					/>
				</div>
				<div className="max-w-prose text-start mt-8">
					With years of experience as an Art Director in advertising
					agencies, I have crafted campaigns, developed brands, and
					created compelling visuals. I’ve worked in Marketing,
					Content Creation, and Review, collaborating with two of the
					world's largest social networks. Now, I'm paving my way as a
					UI Designer, continuously growing and evolving in the field.
				</div>

				<div className="flex justify-between items-center w-full max-w-7xl my-24">
					<div className="p-2 rounded-lg w-fit h-fit whitespace-nowrap bg-primary dark:bg-primary text-white dark:text-white">
						Latest experiences
					</div>
					<div className="w-full h-[1px] mx-6 bg-primary dark:bg-primary" />
					<img src="/icons/profiles.png" alt="" className="w-12" />
				</div>
			</div>
		</section>
	)
}

export default Experience
