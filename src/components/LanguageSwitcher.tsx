import { useTranslation } from 'react-i18next'

export default function LanguageSwitcher() {
	const { i18n } = useTranslation()
	const isEnglish = i18n.language === 'en'

	const toggleLanguage = () => {
		const newLang = isEnglish ? 'pt' : 'en'
		i18n.changeLanguage(newLang)
		localStorage.setItem('language', newLang)
	}

	return (
		<button
			onClick={toggleLanguage}
			className="text-sm font-semibold transition-colors cursor-pointer"
		>
			<span className={isEnglish ? 'text-primary' : ''}>EN</span> /
			<span className={!isEnglish ? 'text-primary' : ''}> PT</span>
		</button>
	)
}
