import axios from 'axios'

export interface ContactMessage {
	name: string
	surname: string
	email: string
	message: string
}

export async function sendContactMessage(
	data: ContactMessage
): Promise<unknown> {
	try {
		const response = await axios.post('/api/contact', data, {
			headers: {
				'Content-Type': 'application/json',
			},
		})
		return response.data
	} catch {
		throw new Error('Failed to send message')
	}
}
