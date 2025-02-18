import { useEffect, useRef, useState } from 'react'
import { twJoin } from 'tailwind-merge'
import AnimatedStroke from '../components/AnimatedStroke'
import Button from '../components/Button'
import FloatingInput from '../components/FloatingInput'
import SocialIcons from '../components/SocialIcons'

const Contact = () => {
	const [trigger, setTrigger] = useState(false)
	const [bgLoaded, setBgLoaded] = useState(false)
	const [phoneGuyLoaded, setPhoneGuyLoaded] = useState(false)
	const sectionRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setTrigger(entry.intersectionRatio >= 0.4)
			},
			{ threshold: 0.4 }
		)

		if (sectionRef.current) {
			observer.observe(sectionRef.current)
		}

		return () => observer.disconnect()
	}, [])

	// Only show socials when both images are loaded
	const showSocials = bgLoaded && phoneGuyLoaded

	return (
		<section
			ref={sectionRef}
			id="contact"
			data-section
			className="relative flex justify-center w-full"
		>
			<div className="w-full max-w-7xl py-24 z-10 pointer-events-none">
				<div className="flex flex-col w-fit pointer-events-auto">
					<div className="text-3xl font-black leading-0 text-start w-fit text-white dark:text-white">
						Contact
						<AnimatedStroke
							className="w-32 text-primary dark:text-primary"
							strokeWidth={5}
							trigger={trigger}
						/>
					</div>
					<div className="flex flex-col text-start text-xl my-6 gap-4 text-white dark:text-white">
						<div className="flex flex-col gap-2">
							<a
								href="mailto:erickolivers93@gmail.com"
								className="flex items-center gap-2 hover:underline hover:text-white w-fit"
							>
								<img
									src="/icons/email.png"
									alt="Gmail logo"
									className="h-6"
								/>
								erickolivers93@gmail.com
							</a>
							<a
								href="https://wa.me/351910485214"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 hover:underline hover:text-white w-fit"
							>
								<img
									src="/icons/whatsapp.png"
									alt="WhatsApp logo"
									className="h-6"
								/>
								+351 910 485 214
							</a>
						</div>
					</div>

					<div className="border border-light-gray dark:border-white max-w-xl text-start p-6 bg-white dark:bg-white rounded-2xl">
						<div className="text-3xl font-black dark:text-black">
							Ready to Bring <br />
							<span className="text-primary dark:text-primary">
								Ideas
							</span>{' '}
							to Life?
						</div>
						<div className="w-[90%] my-1 dark:text-black">
							Send me a message, and let’s talk about your project
							or proposal. I’d love to chat!
							<span className="text-primary dark:text-primary">
								{' '}
								If you’re around, let’s grab a coffee.
							</span>
						</div>
						<form className="w-full mt-4 space-y-8">
							<FloatingInput label="Name" id="name" />
							<FloatingInput label="Surname" id="surname" />
							<FloatingInput
								label="Email"
								id="email"
								type="email"
							/>
							<FloatingInput
								label="Message"
								id="message"
								type="textarea"
							/>
							<div className="flex justify-center items-center">
								<Button type="submit">Send</Button>
							</div>
						</form>
					</div>
				</div>
			</div>

			{/* Background Image */}
			<div
				className="absolute bg-center top-0 w-full h-[70%] z-0"
				style={{
					backgroundImage: `url(/images/contact-bg.png)`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				{/* Hidden img tag to track when it loads */}
				<img
					src="/images/contact-bg.png"
					alt="Background"
					className="hidden"
					loading="lazy"
					onLoad={() => setBgLoaded(true)}
				/>

				<div className="relative w-full h-full">
					<div className="absolute bottom-0 right-12 h-[70%]">
						<div className="relative h-full">
							{/* Phone Guy Image */}
							<img
								src="/images/phone-guy.png"
								alt="Phone Guy"
								height={500}
								className="h-full"
								loading="lazy"
								onLoad={() => setPhoneGuyLoaded(true)}
							/>

							{/* Show Social Icons only when both images are loaded */}
							{showSocials && (
								<div
									className={twJoin(
										'absolute bottom-0 right-1/2 translate-x-1/2 translate-y-[100%]',
										'w-fit pt-12 z-20'
									)}
								>
									<div className="text-2xl font-black">
										Let’s Get Social!
									</div>
									<div className="w-full">
										<SocialIcons />
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact
