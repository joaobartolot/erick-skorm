import { projects } from '../data/projects'
import { getContrastTextColor } from '../utils/contrast'

const ProjectGrid = () => {
	return (
		<div className="flex flex-col md:space-y-6">
			{projects.map(project => {
				const textColor = getContrastTextColor(project.primaryBg)
				return (
					<div
						key={project.id}
						className={`flex ${project.secondaryImage ? 'even:flex-row-reverse gap-0 md:gap-4' : 'justify-center'}`}
					>
						<div
							className={`relative flex justify-center border-t-2 border-b-2 md:border-2 border-primary md:rounded-lg overflow-hidden ${
								project.secondaryImage
									? 'w-full'
									: 'w-full h-fit'
							}`}
							style={{ backgroundColor: project.primaryBg }}
						>
							<div>
								<img
									src={project.primaryImage}
									alt={`Project preview`}
									height={300}
									width={300}
									loading="lazy"
									className={`object-cover ${
										project.secondaryImage ? '' : 'w-full'
									}`}
								/>
							</div>
							{project.tools.length > 0 && (
								<div
									className={`hidden md:flex justify-center items-center absolute bottom-4 right-4 text-lg font-black leading-4 max-w-[120px] text-center text-wrap balance whitespace-normal ${textColor}`}
								>
									<img
										src={project.tools[0].icon}
										alt="Tools icons"
										width={38}
										height={38}
									/>
									{project.tools[0].label}
								</div>
							)}
						</div>

						{project.secondaryImage && (
							<div className="hidden md:block min-w-fit border-2 border-primary rounded-lg overflow-hidden">
								<img
									src={project.secondaryImage}
									alt={`Project preview`}
									height={300}
									width={300}
									loading="lazy"
									className="min-w-[300px]"
								/>
							</div>
						)}
					</div>
				)
			})}
		</div>
	)
}

export default ProjectGrid
