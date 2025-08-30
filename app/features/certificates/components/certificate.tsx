import type { CertificateConfig } from "../types/certificate-config";




export default function Certificate(config: CertificateConfig) {
	return (
		<div className="flex flex-col border-4 border-[#889696] rounded-[5px] justify-center w-[18vw] h-[25vh] items-center">
			<img src={config.image} className="w-[18vw] h-[20vh] object-fill flex-5" alt="" />
			<p className="text-[#F4F3FD] font-[Inter] text-lg flex-1">
				{config.label}
			</p>
		</div>
	);
}