import Button from './Button'

const DownloadCV = () => {
	const handleDownload = () => {
		const link = document.createElement('a')
		link.href = '/cv.pdf'
		link.download = 'ErickSkorm_CV.pdf'
		document.body.appendChild(link)
		link.click()
		document.body.removeChild(link)
	}

	return (
		<Button variant="outline" onClick={handleDownload}>
			Download CV
		</Button>
	)
}

export default DownloadCV
