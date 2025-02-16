import { twJoin } from 'tailwind-merge'
import MarqueeTools from '../components/MarqueeTools'

const Experience = () => {
	return (
		<section className="relative w-full h-screen">
			<div
				className={twJoin(
					'absolute top-0 -translate-y-[50%] -translate-x-[5%] w-[110%] pt-4 -rotate-3',
					'bg-gradient-to-t from-black/60 from-80% to-transparent dark:from-black '
				)}
			>
				<MarqueeTools />
			</div>
			test
		</section>
	)
}

export default Experience
