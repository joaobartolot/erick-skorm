import { motion } from 'framer-motion'
import Square from './Square'

export default function DiamondImage() {
	return (
		<div className="relative aspect-square rounded-[13%] bg-primary -rotate-45 ">
			<motion.img
				initial={{
					opacity: 0,
					x: -10,
					y: 10,
				}}
				animate={{
					opacity: 1,
					x: 0,
					y: 0,
				}}
				transition={{ duration: 0.3, ease: 'easeInOut' }}
				src="/images/macbook-guy.png"
				alt="A classical marble statue of a man with curly hair, wearing modern red sunglasses and using a silver MacBook laptop. The statue has a thoughtful expression, with one hand raised as if making a point. The background is removed, creating a sleek, modern contrast between antiquity and technology."
				className="absolute bottom-0 left-0 min-w-[110%]"
			/>
			<Square className="absolute rounded-[13%] w-[100%] -top-0 -right-[50px] translate-x-[100%]" />
		</div>
	)
}
