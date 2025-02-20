import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { twJoin } from 'tailwind-merge'
import { sendContactMessage } from '../api/sendContactMessage'
import AnimatedImage from '../components/AnimatedImage'
import AnimatedStroke from '../components/AnimatedStroke'
import Button from '../components/Button'
import EmailFeedbackModal from '../components/EmailFeedbackModal'
import FloatingInput from '../components/FloatingInput'
import SocialIcons from '../components/SocialIcons'
import useModal from '../hooks/useModal'

const Contact = () => {
	const { t } = useTranslation()
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
				<div className="flex flex-col items-center md:items-start w-full pointer-events-none">
					<div className="flex flex-col items-center md:items-start text-2xl md:text-3xl font-black leading-0 text-center md:text-start w-full md:w-fit text-white dark:text-white">
						{t('contact.sectionTitle')}
						<AnimatedStroke
							className="w-32 text-primary dark:text-primary"
							strokeWidth={5}
							trigger={trigger}
						/>
					</div>
					<div className="flex flex-col items-center md:items-start my-6 gap-2 text-white dark:text-white pointer-events-auto">
						<a
							href="mailto:erickolivers93@gmail.com"
							className="flex text-base gap-2 hover:underline hover:text-white w-fit"
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
							className="flex text-base gap-2 hover:underline hover:text-white w-fit"
						>
							<img
								src="/icons/whatsapp.png"
								alt="WhatsApp logo"
								className="h-6 hidden md:block"
							/>
							+351 910 485 214
						</a>
					</div>

					<div
						className={twJoin(
							'relative border md:max-lg:border-0 border-light-gray w-full max-w-xl',
							'text-center md:text-start p-6 bg-white dark:bg-white',
							'rounded-2xl md:max-lg:rounded-tl-none md:max-lg:mt-48',
							'md:max-lg:self-center'
						)}
					>
						<div
							className={twJoin(
								'static md:max-lg:absolute top-0 left-0 md:max-lg:-translate-y-[100%]',
								'bg-white rounded-t-2xl border-0 md:max-lg:w-[280px] z-20'
							)}
						>
							<div className="relative flex flex-col justify-center items-center md:items-start p-6">
								<div
									className={twJoin(
										'absolute -bottom-[2px] right-[2px] translate-x-[32px] w-[32px] h-[32px] bg-primary rounded-full',
										'bg-transparent shadow-[-10px_0_0_0_var(--color-white)] -rotate-45'
									)}
								/>
								<div
									className="text-xl lg:text-3xl font-black text-black dark:text-black max-w-fit"
									dangerouslySetInnerHTML={{
										__html: t('contact.readyToBring'),
									}}
								/>
								<div
									className="w-[100%] md:max-lg:w-[100%] lg:w-[90%] my-1 text-black dark:text-black text-xs lg:text-base"
									dangerouslySetInnerHTML={{
										__html: t('contact.messagePrompt'),
									}}
								/>
							</div>
						</div>
						<AnimatedImage
							src="/images/phone-guy.png"
							alt="Phone Guy"
							height={500}
							className={twJoin(
								'hidden md:block lg:hidden absolute top-0 right-0 -translate-y-[100%] z-10 pr-6',
								'w-[300px]'
							)}
						/>

						<form
							className="w-full mt-4 space-y-8 pointer-events-auto"
							onSubmit={handleSubmit}
						>
							<FloatingInput
								label={t('contact.form.name')}
								id="name"
								value={formData.name}
								onChange={handleChange}
							/>
							<FloatingInput
								label={t('contact.form.surname')}
								id="surname"
								value={formData.surname}
								onChange={handleChange}
							/>
							<FloatingInput
								label={t('contact.form.email')}
								id="email"
								type="email"
								value={formData.email}
								onChange={handleChange}
							/>
							<FloatingInput
								label={t('contact.form.message')}
								id="message"
								type="textarea"
								value={formData.message}
								onChange={handleChange}
							/>
							<div className="flex justify-center items-center">
								<Button type="submit">
									{t('contact.form.send')}
								</Button>
							</div>
						</form>
						<div
							className={twJoin(
								'lg:hidden absolute bottom-0 right-1/2 translate-x-1/2 translate-y-[100%]',
								'w-fit pt-6 z-40 pointer-events-auto'
							)}
						>
							<div className="text-nowrap text-2xl font-black">
								{t('contact.letsGetSocial')}
							</div>
							<div className="w-full">
								<SocialIcons />
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Background Image */}
			<div
				className="absolute bg-center top-0 w-full h-[30%] md:h-[40%] lg:h-[70%] z-0"
				style={{
					backgroundImage: `url(/images/contact-bg.png)`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				<img
					src="/images/contact-bg.png"
					alt="Background"
					className="hidden"
					loading="lazy"
					onLoad={() => setBgLoaded(true)}
				/>

				<div className="hidden lg:block relative w-full h-full">
					<div className="absolute bottom-0 lg:right-4 xl:right-12 lg:h-[60%] xl:h-[70%]">
						<div className="relative h-full">
							<AnimatedImage
								src="/images/phone-guy.png"
								alt="Phone Guy"
								height={500}
								className="h-full hidden lg:block"
								onLoad={() => setPhoneGuyLoaded(true)}
							/>

							{showSocials && (
								<div className="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-[100%] w-fit pt-12 z-20">
									<div className="text-2xl font-black">
										{t('contact.letsGetSocial')}
									</div>
									<SocialIcons />
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
