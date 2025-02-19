import { useTranslation } from 'react-i18next'

export const useExperiences = () => {
	const { t } = useTranslation()
	const translatedExperiences: { [key: string]: unknown }[] =
		(t('experiences', { returnObjects: true }) as {
			[key: string]: unknown
		}[]) || []

	const experiences = [
		{
			logo: '/images/cria-livre.png',
			...translatedExperiences[0],
		},
		{
			logo: '/images/via-carioca.png',
			...translatedExperiences[1],
		},
		{
			logo: '/images/skorm-logo.png',
			...translatedExperiences[2],
		},
	]

	return experiences
}
