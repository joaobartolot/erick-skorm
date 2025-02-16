import React, { useEffect, useRef, useState } from 'react'

type GifComponentProps = {
	gifPath: string
}

const GifComponent: React.FC<GifComponentProps> = ({ gifPath }) => {
	const sectionRef = useRef(null)
	const [shouldPlayGif, setShouldPlayGif] = useState(false)

	useEffect(() => {
		const section = sectionRef.current
		if (!section) return

		const observer = new IntersectionObserver(
			(entries, observerInstance) => {
				entries.forEach(entry => {
					if (entry.isIntersecting && !shouldPlayGif) {
						setShouldPlayGif(true)
						observerInstance.unobserve(section)
					}
				})
			},
			{ threshold: 0.5 } // Adjust the threshold as needed
		)

		observer.observe(section)

		return () => {
			observer.disconnect()
		}
	}, [shouldPlayGif])

	return (
		<div ref={sectionRef} className="w-24">
			{shouldPlayGif && <img src={gifPath} alt="Animation" />}
		</div>
	)
}

export default GifComponent
