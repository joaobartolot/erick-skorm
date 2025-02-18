import Button from '../components/Button'
import DiamondImage from '../components/DiamondImage'
import ScrollIndicator from '../components/ScrollIndicator'

const offset = 80

const Hero = () => {
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

	return (
		<header
			id="hero"
			className="relative flex flex-col md:flex-row justify-start md:justify-center items-center h-screen w-full "
			data-section
		>
			<div className="relative text-6xl md:text-8xl font-black text-start px-12 md:px-0 mt-[92px] md:mt-0 max-w-md ">
				<div className="leading-14 md:leading-20">Designing</div>
				<div className="relative leading-6 md:leading-10 w-fit text-4xl md:text-5xl">
					with
					<img
						src="/animations/spinning-diamond.gif"
						alt="Spinning diamond"
						className="absolute md:scale-110 -right-[170%] -top-[100%] md:-right-[220%] md:-top-[80%]"
					/>
				</div>
				<div className="leading-10 md:leading-12">purpose,</div>
				<div className="text-primary text-[24px] md:text-[39px] mt-6">
					creating with passion
				</div>
				<div className="font-normal text-sm md:text-base w-fit mt-4">
					Bringing clarity and creativity to every project. I focus on
					crafting impactful, functional designs that not only
					captivate but also solve real problems. Each design is
					driven by intention and fueled by passion.
				</div>
				<div className="flex justify-center md:justify-start mt-6">
					<Button
						onClick={() => scrollToElement('contact')}
						className="mt-4"
					>
						Hire me
					</Button>
				</div>
			</div>
			<div className="relative w-[300px] md:min-w-[300px] lg:min-w-[520px] md:m-[2%] m-12">
				<DiamondImage />
			</div>
			<ScrollIndicator />
		</header>
	)
}

export default Hero
