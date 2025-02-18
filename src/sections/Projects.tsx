import { useEffect, useRef, useState } from 'react'
import AnimatedStroke from '../components/AnimatedStroke'
import ProjectGrid from '../components/ProjectGrid'

const Projects = () => {
	const [trigger, setTrigger] = useState(false)
	const sectionRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.intersectionRatio >= 0.2) {
					setTrigger(true)
				} else {
					setTrigger(false)
				}
			},
			{ threshold: 0.2 }
		)

		if (sectionRef.current) {
			observer.observe(sectionRef.current)
		}

		return () => observer.disconnect()
	}, [])

	return (
		<section
			id="projects"
			className="flex flex-col items-center w-full py-12"
			data-section
		>
			<div className="text-3xl font-black w-fit leading-0 mb-12">
				Projects
				<AnimatedStroke
					className="w-full text-primary dark:text-primary"
					trigger={trigger}
				/>
			</div>

			<div ref={sectionRef} className="w-full max-w-7xl">
				<ProjectGrid />
			</div>
		</section>
	)
}

export default Projects
