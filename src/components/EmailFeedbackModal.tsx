import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

interface EmailFeedbackModalProps {
	isOpen: boolean
	onClose: () => void
	isSuccess: boolean
}

const EmailFeedbackModal: React.FC<EmailFeedbackModalProps> = ({
	isOpen,
	onClose,
	isSuccess,
}) => {
	const { t } = useTranslation()
	const [isClosing, setIsClosing] = useState(false)

	useEffect(() => {
		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === 'Escape' && !isClosing) {
				onClose()
			}
		}

		document.addEventListener('keydown', handleEscape)
		return () => {
			document.removeEventListener('keydown', handleEscape)
		}
	}, [onClose, isClosing])

	const handleClose = () => {
		setIsClosing(true)
	}

	const handleAnimationComplete = () => {
		if (isClosing) {
			setIsClosing(false)
			onClose()
		}
	}

	if (!isOpen && !isClosing) return null

	return (
		<div
			className="fixed inset-0 bg-black/30 flex justify-center items-center z-40 px-12"
			onClick={handleClose}
		>
			<motion.div
				className="relative"
				initial={{ scale: 0 }}
				animate={!isClosing ? { scale: 1 } : { scale: 0 }}
				onAnimationComplete={handleAnimationComplete}
			>
				<button
					onClick={handleClose}
					className="absolute top-5 right-5 z-50 font-black text-2xl cursor-pointer"
				>
					<img
						src="/icons/multiply.png"
						alt="Multiply icon"
						className="w-5"
					/>
				</button>
				<div
					className="flex flex-col justify-center items-center bg-black/40 backdrop-blur-xl text-white font-bold w-xs md:w-sm aspect-[4/3] rounded-2xl shadow-xl text-center"
					onClick={e => e.stopPropagation()}
				>
					<img
						src={
							isSuccess
								? '/icons/ok-hand.png'
								: '/icons/thumbs-down.png'
						}
						alt={t(
							isSuccess
								? 'emailFeedbackModal.altSuccess'
								: 'emailFeedbackModal.altError'
						)}
						className="w-10 py-4 mx-auto"
					/>
					<h2 className="text-4xl">
						{t(
							isSuccess
								? 'emailFeedbackModal.titleSuccess'
								: 'emailFeedbackModal.titleError'
						)}
					</h2>
					<p className="py-2">
						{t(
							isSuccess
								? 'emailFeedbackModal.messageSuccess'
								: 'emailFeedbackModal.messageError'
						)}
					</p>

					{isSuccess ? (
						<span className="text-primary">
							{t('emailFeedbackModal.thankYou')}
						</span>
					) : (
						<p>
							{t('emailFeedbackModal.tryAgain')}
							<br />
							<a
								href={`mailto:${t('emailFeedbackModal.email')}`}
								className="text-primary hover:text-secondary hover:underline"
							>
								{t('emailFeedbackModal.email')}
							</a>
						</p>
					)}
				</div>
			</motion.div>
		</div>
	)
}

export default EmailFeedbackModal
