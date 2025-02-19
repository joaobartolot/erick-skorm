import { twJoin } from 'tailwind-merge'
import { projects } from '../data/projects'

const ProjectGrid = () => {
	return (
		<div className="flex flex-col md:space-y-6">
			{projects.map(project => (
				<div
					key={project.id}
					className={twJoin(
						'flex first:border-t-2 border-b-2 border-primary md:border-none',
						project.secondaryImage
							? 'max-h-[300px] even:flex-row-reverse md:gap-4'
							: 'justify-center'
					)}
				>
					<div
						className={twJoin(
							'relative flex justify-center items-center md:border-2 border-primary md:rounded-lg overflow-hidden',
							project.secondaryImage
								? 'w-full min-h-[300px]'
								: 'flex-col w-full h-fit',
							project.backgroundClass
						)}
					>
						<div
							className={twJoin(
								'flex justify-center items-center gap-2',
								'text-lg font-black leading-4 text-start text-wrap balance whitespace-normal',
								project.secondaryImage
									? 'absolute bottom-4 right-4'
									: 'my-6',
								project.bgLight
									? 'text-black dark:text-black'
									: 'text-white dark:text-white'
							)}
						>
							{project.tools.icons.map((icon, index) => (
								<img
									key={index}
									src={icon}
									alt="Tools icons"
									width={36}
									height={36}
									className="w-6"
								/>
							))}
							<div className="text-xs">
								<div>{project.tools.toolPrimary}</div>
								<div>{project.tools.toolSecondary}</div>
							</div>
						</div>
						<img
							src={project.primaryImage}
							alt="Project preview"
							loading="lazy"
							className={twJoin(
								'object-cover h-full',
								project.imageClass,
								project.secondaryImage ? '' : 'max-h-[700px]'
							)}
						/>

						{project.projectLink && (
							<div className="my-6">
								<a
									href={project.projectLink}
									target="_blank"
									rel="noopener noreferrer"
									className={twJoin(
										'bg-transparent border-2  hover:text-white',
										'rounded-md px-4 py-3 text-base font-semibold',
										'transition duration-300 disabled:cursor-auto',
										project.bgLight
											? 'border-black text-black'
											: 'border-primary text-primary hover:bg-primary'
									)}
								>
									Check It Out
								</a>
							</div>
						)}
					</div>

					{project.secondaryImage && (
						<div className="w-[300px] h-[300px] aspect-square hidden md:block min-w-fit border-2 border-primary rounded-lg overflow-hidden">
							<img
								src={project.secondaryImage}
								alt="Project preview"
								height={300}
								width={300}
								loading="lazy"
								className="w-full h-full"
							/>
						</div>
					)}
				</div>
			))}
			<div
				className={twJoin(
					'flex justify-center first:border-t-2 border-b-2 border-primary md:border-none w-full'
				)}
			>
				<div
					className={twJoin(
						'relative flex flex-col items-center justify-center w-full md:border-2',
						'border-primary md:rounded-lg overflow-hidden'
					)}
					style={{ backgroundImage: 'url(/images/mr-gula-bg.png)' }}
				>
					<div
						className={twJoin(
							'absolute inset-0 opacity-50',
							'dark:bg-black bg-white -z-0'
						)}
					/>
					<div
						className={twJoin(
							'flex justify-center items-center gap-2',
							'text-lg font-black leading-4 text-start text-wrap balance whitespace-normal',
							'text-primary dark:text-white my-6 z-10'
						)}
					>
						<img
							src="/icons/figma-light.png"
							alt="Tools icons"
							width={36}
							height={36}
							className="hidden dark:block w-6"
						/>
						<img
							src="/icons/figma-primary.png"
							alt="Tools icons"
							width={36}
							height={36}
							className="dark:hidden w-6"
						/>
						<div className="text-xs">
							<div>Landing Page</div>
							<div>UX/UI</div>
						</div>
					</div>

					<img
						src="/images/mr-gula-mockup.png"
						alt=""
						width={500}
						height={700}
						loading="lazy"
						className="px-6 md:px-0 z-10"
					/>
					<div className="my-6 z-10">
						<a
							href="https://mr-gula.vercel.app/"
							target="_blank"
							rel="noopener noreferrer"
							className={twJoin(
								'bg-primary  hover:bg-secondary text-white',
								'rounded-md px-4 py-3 text-base font-semibold',
								'transition duration-300 disabled:cursor-auto',
								''
							)}
						>
							Check It Out
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProjectGrid
