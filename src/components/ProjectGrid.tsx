import { twJoin } from 'tailwind-merge'
import { projects } from '../data/projects'
import Button from './Button'

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
								? 'w-full'
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
							{project.tools.icons.map(icon => (
								<img
									src={icon}
									alt="Tools icons"
									width={36}
									height={36}
								/>
							))}
							<div>
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
								project.secondaryImage ? '' : 'max-h-[700px]'
							)}
						/>

						{project.projectLink && (
							<div className="my-6">
								<Button
									variant="outline"
									className={twJoin(
										project.bgLight
											? 'border-black text-black'
											: ''
									)}
								>
									Check It Out
								</Button>
							</div>
						)}
					</div>

					{project.secondaryImage && (
						<div className="hidden md:block min-w-fit border-2 border-primary rounded-lg overflow-hidden">
							<img
								src={project.secondaryImage}
								alt="Project preview"
								height={300}
								width={300}
								loading="lazy"
								className="min-w-[300px]"
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
							'flex justify-center items-center gap-2',
							'text-lg font-black leading-4 text-start text-wrap balance whitespace-normal',
							'text-primary dark:text-white my-6'
						)}
					>
						<img
							src="/icons/figma-light.png"
							alt="Tools icons"
							width={36}
							height={36}
							className="hidden dark:block"
						/>
						<img
							src="/icons/figma-primary.png"
							alt="Tools icons"
							width={36}
							height={36}
							className="dark:hidden"
						/>
						<div>
							<div>Landing Page</div>
							<div>UX/UI</div>
						</div>
					</div>

					<img
						src="/images/mr-gula-mockup.png"
						alt=""
						width={500}
						height={700}
					/>
					<div className="my-6">
						<Button variant="primary">Check It Out</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProjectGrid
