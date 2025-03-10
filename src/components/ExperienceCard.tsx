interface ExperienceProps {
	logo: string
	company: string
	industry: string
	role: string
	description: string
}

const ExperienceCard = ({
	logo,
	company,
	industry,
	role,
	description,
}: ExperienceProps) => {
	return (
		<div className="border-2 border-primary p-6 w-[370px] h-[370px] rounded-lg">
			<div className="flex flex-col space-y-6">
				<div className="flex space-x-6">
					<img
						src={logo}
						alt={`${company} logo`}
						className="h-[96px] aspect-square"
					/>
					<div className="text-start text-2xl">
						<div className="font-black leading-5">{company}</div>
						<div className="font-normal">{industry}</div>
						<div className="text-primary font-light">{role}</div>
					</div>
				</div>
				<div className="text-start text-light-gray">{description}</div>
			</div>
		</div>
	)
}

export default ExperienceCard
