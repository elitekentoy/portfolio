import ScrollFadeIn from "~/ui/animations/ScrollFadeIn";
import { certificateData } from "../types/certificate-config";
import Certificate from "./certificate";



export default function Certificates() {
	return (
		<ScrollFadeIn>
			<section className="flex flex-col items-center px-[10vw] gap-[8vh] mt-[15vh]">
				<p className="text-[#FF6B6B] font-[Inter] text-5xl font-bold" id="Certificates">
					Certificates
				</p>
				<article className="flex flex-wrap gap-[2vw] justify-center">
					{
						certificateData.map((cert) => 
							<Certificate key={"certificate-" + cert.label} image={cert.image} label={cert.label} />)
					}
				</article>
			</section>
		</ScrollFadeIn>
	);
}