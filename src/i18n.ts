import i18n from 'i18next'
import HttpBackend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

const savedLanguage = localStorage.getItem('language')
const systemLanguage = navigator.language.startsWith('pt') ? 'pt' : 'en'

i18n.use(HttpBackend)
	.use(initReactI18next)
	.init({
		lng: savedLanguage || systemLanguage,
		fallbackLng: 'en',
		backend: {
			loadPath: '/locales/{{lng}}.json',
		},
		interpolation: {
			escapeValue: false,
		},
	})

export default i18n
