import { useTranslation } from 'react-i18next'

const Footer = () => {
	const { t } = useTranslation()

	return (
		<footer className="w-full h-20 bg-primary dark:bg-primary text-white">
			<div className="flex flex-col md:flex-row justify-center items-center h-full text-xs">
				<div>{t('footer.designedBy')}</div>
				<div className="hidden md:block px-1">-</div>
				<div>{t('footer.builtBy')}</div>
			</div>
		</footer>
	)
}

export default Footer
