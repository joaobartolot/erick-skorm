import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Square from './Square'

export default function DiamondImage() {
	const { t } = useTranslation()

	return (
		<div className="relative -rotate-45">
			<div className="p-[18%] pb-0 pl-0 rounded-[13%] overflow-hidden">
				<div className="relative aspect-square rounded-[13%] bg-primary">
					<motion.img
						initial={{
							opacity: 0,
							x: -20,
							y: 20,
						}}
						animate={{
							opacity: 1,
							x: 0,
							y: 0,
						}}
						width="400"
						height="400"
						loading="lazy"
						transition={{ duration: 0.5, ease: 'easeInOut' }}
						src="/images/macbook-guy.png"
						alt={t('diamondImage.alt')}
						className="absolute bottom-0 left-0 min-w-[110%]"
					/>
				</div>
			</div>
			<Square className="md:hidden absolute -left-8 bottom-0 w-[75%] -translate-x-[100%]" />
			<Square className="md:hidden absolute -bottom-8 w-[75%] translate-y-[100%] border-primary dark:border-primary" />
			<Square className="absolute rounded-[13%] w-[75%] -top-0 -right-0 translate-x-[100%] translate-y-[30%]" />
		</div>
	)
}
