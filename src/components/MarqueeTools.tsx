import Marquee from 'react-fast-marquee'

const tools = [
	{ src: '/icons/figma.png', alt: 'Figma Logo' },
	{ src: '/icons/photoshop.png', alt: 'Adobe Photoshop Logo' },
	{ src: '/icons/illustrator.png', alt: 'Adobe Illustrator Logo' },
	{ src: '/icons/premier.png', alt: 'Adobe Premiere Pro Logo' },
	{ src: '/icons/blender.png', alt: 'Blender Logo' },
	{ src: '/icons/after-effect.png', alt: 'Adobe After Effects Logo' },
	{ src: '/icons/indesign.png', alt: 'Adobe InDesign Logo' },
]

const MarqueeTools = () => {
	return (
		<Marquee
			autoFill
			speed={30}
			className="bg-primary dark:bg-primary h-[60px] md:h-[80px]"
		>
			{tools.map((tool, index) => (
				<img
					key={index}
					src={tool.src}
					alt={tool.alt}
					className="w-6 md:w-10 mx-8 md:mx-24"
				/>
			))}
		</Marquee>
	)
}

export default MarqueeTools
