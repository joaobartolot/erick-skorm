import { useTranslation } from 'react-i18next'

export function useCurrentLanguage() {
	const { i18n } = useTranslation()
	const currentLanguage = i18n.language

	const isEnglish = currentLanguage === 'en'
	const isPortuguese = currentLanguage === 'pt'

	return { currentLanguage, isEnglish, isPortuguese }
}
