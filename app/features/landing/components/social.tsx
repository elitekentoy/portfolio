import type { SocialConfig } from "../types/social-config";



export default function Social(config : SocialConfig) {
	return (
		<a href={config.link} target="_blank">
			<img src={config.image} className="h-[5vh] w-[5vh]" alt="" />
		</a>
	);
}