import { useEffect, useRef, useState } from 'react'
import AnimatedStroke from '../components/AnimatedStroke'
import Button from '../components/Button'
import FloatingInput from '../components/FloatingInput'

const Contact = () => {
	const [trigger, setTrigger] = useState(false)
	const sectionRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.intersectionRatio >= 0.7) {
					setTrigger(true)
				} else {
					setTrigger(false)
				}
			},
			{ threshold: 0.7 }
		)

		if (sectionRef.current) {
			observer.observe(sectionRef.current)
		}

		return () => observer.disconnect()
	}, [])

	return (
		<section
			id="contact"
			data-section
			className="relative flex justify-center w-full"
		>
			<div
				ref={sectionRef}
				className="flex flex-col w-full max-w-7xl py-24"
			>
				<div className="text-3xl font-black leading-0 text-start w-fit text-white dark:text-white">
					Contact
					<AnimatedStroke
						className="w-32 text-primary dark:text-primary"
						strokeWidth={5}
						trigger={trigger}
					/>
				</div>
				<div className="text-start text-xl my-6 gap-2 text-white dark:text-white">
					<div>erickolivers93@gmail.com</div>
					<div>+351 910 485 214</div>
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
						Send me a message, and let’s talk about your project or
						proposal. I’d love to chat!
						<span className="text-primary dark:text-primary">
							{' '}
							If you’re around, let’s grab a coffee.
						</span>
					</div>
					<form
						className="w-full mt-4 space-y-8"
						// onSubmit={handleSubmit}
					>
						<FloatingInput
							label="Name"
							id="name"
							// value={name}
							// onChange={e => setName(e.target.value)}
						/>
						<FloatingInput
							label="Surname"
							id="surname"
							// value={surname}
							// onChange={e => setSurname(e.target.value)}
						/>
						<FloatingInput
							label="Email"
							id="email"
							type="email"
							// value={email}
							// onChange={e => setEmail(e.target.value)}
						/>
						<FloatingInput
							label="Message"
							id="message"
							type="textarea"
							// value={message}
							// onChange={e => setMessage(e.target.value)}
						/>
						<div className="flex justify-center items-center">
							<Button type="submit">Send</Button>
						</div>
					</form>
				</div>
			</div>

			<div
				className="absolute bg-center top-0 w-full h-[70%] -z-10"
				style={{ backgroundImage: 'url(/images/contact-bg.png)' }}
			>
				<div className="relative w-full h-full">
					<img
						src="/images/phone-guy.png"
						alt=""
						className="absolute bottom-0 right-8 w-[40%]"
					/>
				</div>
			</div>
		</section>
	)
}

export default Contact
