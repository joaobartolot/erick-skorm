import { inject } from '@vercel/analytics'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './i18n.ts'
import './index.css'

if (import.meta.env.PROD) {
	inject()
}

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>
)
