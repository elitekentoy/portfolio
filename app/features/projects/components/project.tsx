import type { ProjectConfig } from "../types/project-config";
import Description from "./description";

type ProjectProps = ProjectConfig & {
	invert?: boolean;
};

export default function Project({ invert = false, ...config}: ProjectProps) {
	return (
		<article className={`flex gap-[3vw] ${invert ? 'flex-row-reverse' : 'flex-row'}`}>
			<img src={config.image} className="border-[#FFB703] border-5 rounded-[5px] h-[30vh] w-[30vw] object-contain flex-1" alt="" />
			<div className="flex-3">
				<Description image={config.image} title={config.title} 
					summary={config.summary} description={config.description} 
					role={config.role} skills={config.skills} />
			</div>
		</article>
	);
}