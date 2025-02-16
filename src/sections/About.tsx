import Mortarboard from '../assets/icons/Mortarboard.svg?react'
import Academic from '../assets/images/academic.svg?react'
import Button from '../components/Button'
import GifComponent from '../components/GifComponent'
import Square from '../components/Square'

const About = () => {
	return (
		<section
			id="about"
			className="w-full flex flex-col justify-center items-center"
		>
			<div className="flex justify-center items-center w-full max-w-7xl py-8">
				<div className="w-[25%] mx-20 pb-12">
					<div className="relative rotate-45">
						<div className="rounded-[10%]  overflow-hidden">
							<img
								src="/images/erick-skorm.png"
								alt="Black and white portrait of Erick Skorm, a software developer, wearing a long-sleeved sweater and a smartwatch. He has short curly hair and a contemplative expression, gazing thoughtfully to the side with his hand resting on his chin. The background is plain and minimalistic."
								className="scale-140 -rotate-45"
							/>
						</div>
						<Square className="absolute -bottom-[40px] translate-y-[100%] w-[90%] -z-10" />
						<Square className="absolute left-[40px] -bottom-[50%] translate-x-[100%] w-[95%] -z-10" />
					</div>
				</div>
				<div className="flex flex-col text-start ml-24">
					<div className="text-3xl font-black">
						About
						<GifComponent gifPath="/animations/line.gif" />
					</div>
					<div className="text-6xl font-black">
						Hey,
						<br />
						What’s up?
					</div>
					<div className="text-primary font-medium text-[28px] my-2 w-full">
						Let me introduce myself.
					</div>
					<div className="text-base max-w-[300px]">
						My name is Erick Silva, also known as Skorm. I’m
						Brazilian, currently based in Lisbon, and always seeking
						new experiences and challenges. Whether in my work or
						personal life, my mission is to learn and share what I
						can with the world around me.
					</div>
					<div className="my-4">
						<Button variant="outline">Download CV</Button>
					</div>
				</div>
			</div>

			<div className="flex justify-center items-center w-full bg-gradient-to-t from-white from-50% to-transparent dark:from-black z-0">
				<div className="flex flex-col text-start max-w-[400px] text-sm py-8">
					<div>
						<Mortarboard className="w-18" />
					</div>
					<div className="flex flex-col items-start">
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
				<div className="relative w-[45%] self-end">
					<img
						src="/images/pencil-guy.png"
						alt="A classical-style marble statue wearing red sunglasses and holding a red pencil while reading a book, giving a modern and humorous academic aesthetic."
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
