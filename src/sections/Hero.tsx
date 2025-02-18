import Button from '../components/Button'
import DiamondImage from '../components/DiamondImage'
import ScrollIndicator from '../components/ScrollIndicator'

const Hero = () => {
	return (
		<header
			id="hero"
			className="relative flex justify-center items-center h-screen w-full"
			data-section
		>
			<div className="relative text-8xl font-black text-start leading-14">
				Designing
				<br />
				<span className="text-6xl">with</span>
				<br />
				purpose,
				<br />
				<img
					src="/animations/spinning-diamond.gif"
					alt="Spinning diamond"
					className="absolute right-28 top-6"
				/>
				<span className="text-4xl text-primary text-[39px]">
					creating with passion
				</span>
				<div className="font-normal text-base max-w-md mt-4">
					Bringing clarity and creativity to every project. I focus on
					crafting impactful, functional designs that not only
					captivate but also solve real problems. Each design is
					driven by intention and fueled by passion.
				</div>
				<Button className="mt-4">Hire me</Button>
			</div>
			<div className="relative w-[520px] m-[2%] mt-0">
				<DiamondImage />
			</div>
			<ScrollIndicator />
		</header>
	)
}

export default Hero
