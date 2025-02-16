import Button from '../components/Button'
import Square from '../components/Square'

const About = () => {
	return (
		<section
			id="about"
			className="w-full flex justify-center items-center py-8"
		>
			<div className="flex justify-center items-center w-full max-w-7xl">
				<div className="w-[25%] mx-20 pb-12">
					<div className="relative rotate-45">
						<div className="rounded-[10%]  overflow-hidden">
							<img
								src="/images/erick-skorm.png"
								alt="Black and white portrait of Erick Skorm, a software developer, wearing a long-sleeved sweater and a smartwatch. He has short curly hair and a contemplative expression, gazing thoughtfully to the side with his hand resting on his chin. The background is plain and minimalistic."
								className="scale-140 -rotate-45"
							/>
						</div>
						<Square className="absolute -bottom-[40px] translate-y-[100%] w-[90%]" />
						<Square className="absolute left-[40px] -bottom-[50%] translate-x-[100%] w-[95%]" />
					</div>
				</div>
				<div className="flex flex-col text-start ml-24">
					<div className="text-3xl font-black border-b-4 border-primary">
						About
					</div>
					<div className="text-6xl font-black">
						Hey,
						<br />
						What’s up?
					</div>
					<div className="text-primary font-thin text-3xl my-2">
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
		</section>
	)
}

export default About
