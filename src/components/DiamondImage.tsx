import { motion } from 'framer-motion'
import Square from './Square'

export default function DiamondImage() {
	return (
		<div className="relative -rotate-45">
			<div className="p-[18%] pb-0 pl-0 overflow-hidden">
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
						transition={{ duration: 0.5, ease: 'easeInOut' }}
						src="/images/macbook-guy.png"
						alt="A classical marble statue of a man with curly hair, wearing modern red sunglasses and using a silver MacBook laptop. The statue has a thoughtful expression, with one hand raised as if making a point. The background is removed, creating a sleek, modern contrast between antiquity and technology."
						className="absolute bottom-0 left-0 min-w-[110%]"
					/>
				</div>
			</div>
			<Square className="absolute rounded-[13%] w-[75%] -top-0 -right-0 translate-x-[100%] translate-y-[30%]" />
		</div>
	)
}
