

export interface CertificateConfig {
	image: string,
	label: string
}

export const certificateData : CertificateConfig[] = [
	{
		image: "app/features/certificates/assets/philnits-cert.jpg",
		label: "PhilNITS FE"
	},
	{
		image: "app/features/certificates/assets/az900.jpg",
		label: "Microsoft AZ-900"
	},
	{
		image: "app/features/certificates/assets/hcia.jpg",
		label: "HCIA-AI"
	},
	{
		image: "app/features/certificates/assets/ipbl.jpg",
		label: "I-PBL"
	},
	{
		image: "app/features/certificates/assets/flutter.jpg",
		label: "Udemy Flutter"
	},
]