const ScrollIndicator = () => {
	return (
		<div className="absolute bottom-16 md:bottom-12">
			<div className="hidden md:flex w-5 h-10 border-2 dark:border-white border-black rounded-full justify-center items-start relative transition-colors duration-300">
				<div className="w-1 h-2 dark:bg-white bg-black rounded-full animate-slow-bounce mt-2 transition-colors duration-300"></div>
			</div>
		</div>
	)
}

export default ScrollIndicator
