import { useEffect, useRef, useState } from 'react'
import { twJoin } from 'tailwind-merge'
import { sendContactMessage } from '../api/sendContactMessage'
import AnimatedStroke from '../components/AnimatedStroke'
import Button from '../components/Button'
import EmailFeedbackModal from '../components/EmailFeedbackModal'
import FloatingInput from '../components/FloatingInput'
import SocialIcons from '../components/SocialIcons'
import useModal from '../hooks/useModal'

const Contact = () => {
	const { isOpen, openModal, closeModal } = useModal()
	const [isSuccess, setIsSuccess] = useState(false)

	const [trigger, setTrigger] = useState(false)
	const [bgLoaded, setBgLoaded] = useState(false)
	const [phoneGuyLoaded, setPhoneGuyLoaded] = useState(false)
	const sectionRef = useRef<HTMLDivElement | null>(null)

	const [formData, setFormData] = useState({
		name: '',
		surname: '',
		email: '',
		message: '',
	})

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { id, value } = e.target
		setFormData(prevState => ({
			...prevState,
			[id]: value,
		}))
	}

	const handleEmailSend = (success: boolean) => {
		setIsSuccess(success)
		openModal()
	}

	const handleClose = () => {
		if (isSuccess) {
			setFormData({
				name: '',
				surname: '',
				email: '',
				message: '',
			})
		}

		closeModal()
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		try {
			await sendContactMessage(formData)
			handleEmailSend(true)
		} catch {
			handleEmailSend(false)
		}
	}

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

	const showSocials = bgLoaded && phoneGuyLoaded

	return (
		<section
			ref={sectionRef}
			id="contact"
			data-section
			className="relative flex justify-center w-full"
		>
			<div className="w-full max-w-7xl py-12 pb-32 z-10 pointer-events-none px-6">
				<div className="flex flex-col w-full pointer-events-none">
					<div className="flex flex-col items-center md:items-start text-2xl md:text-3xl font-black leading-0 text-center md:text-start w-full md:w-fit text-white dark:text-white">
						Contact
						<AnimatedStroke
							className="w-32 text-primary dark:text-primary"
							strokeWidth={5}
							trigger={trigger}
						/>
					</div>
					<div className="flex flex-col text-start text-xl my-6 gap-4 text-white dark:text-white pointer-events-auto">
						<div className="flex flex-col items-center md:items-start gap-2">
							<a
								href="mailto:erickolivers93@gmail.com"
								className="flex items-center gap-2 hover:underline hover:text-white w-fit"
							>
								<img
									src="/icons/email.png"
									alt="Gmail logo"
									className="h-6 hidden md:block"
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
									className="h-6 hidden md:block"
								/>
								+351 910 485 214
							</a>
						</div>
					</div>

					<div
						className={twJoin(
							'relative border border-light-gray w-full max-w-xl',
							'text-center md:text-start p-6 bg-white dark:bg-white rounded-2xl'
						)}
					>
						<div className="text-xl md:text-3xl font-black dark:text-black">
							Ready to Bring <br />
							<span className="text-primary dark:text-primary">
								Ideas
							</span>{' '}
							to Life?
						</div>
						<div className="w-[100%] lg:w-[90%] my-1 dark:text-black text-xs lg:text-base">
							Send me a message, and let’s talk about your project
							or proposal. I’d love to chat!
							<span className="text-primary dark:text-primary">
								{' '}
								If you’re around, let’s grab a coffee.
							</span>
						</div>
						<form
							className="w-full mt-4 space-y-8 pointer-events-auto"
							onSubmit={handleSubmit}
						>
							<FloatingInput
								label="Name"
								id="name"
								value={formData.name}
								onChange={handleChange}
							/>
							<FloatingInput
								label="Surname"
								id="surname"
								value={formData.surname}
								onChange={handleChange}
							/>
							<FloatingInput
								label="Email"
								id="email"
								type="email"
								value={formData.email}
								onChange={handleChange}
							/>
							<FloatingInput
								label="Message"
								id="message"
								type="textarea"
								value={formData.message}
								onChange={handleChange}
							/>
							<div className="flex justify-center items-center">
								<Button type="submit">Send</Button>
							</div>
						</form>

						{showSocials && (
							<div
								className={twJoin(
									'md:hidden absolute bottom-0 right-1/2 translate-x-1/2 translate-y-[100%]',
									'w-fit pt-6 z-40 pointer-events-auto'
								)}
							>
								<div className="text-nowrap text-2xl font-black">
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

			{/* Background Image */}
			<div
				className="absolute bg-center top-0 w-full h-[30%] md:h-[70%] z-0"
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

				<div className="hidden md:block relative w-full h-full">
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
			<EmailFeedbackModal
				isOpen={isOpen}
				onClose={handleClose}
				isSuccess={isSuccess}
			/>
		</section>
	)
}

export default Contact
