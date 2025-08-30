import type { ProjectConfig } from "../types/project-config";



export default function Description(config: ProjectConfig) {
	return (
		<div className="text-[#F4F3FD] font-[Inter] flex flex-col gap-[1vh]">
			<p className="text-2xl font-semibold text-[#FFB703]">
				{config.title}
			</p>
			<p>
				{config.summary}
			</p>
			<p>
				{config.description}
			</p>
			<p>
				<span className="text-[#FFB703]">Role</span>: {config.role}
			</p>
			<div className="flex flex-wrap gap-[5px]">
				{
					config.skills.map((skill) => 
						<div 
							key={"skill-" + skill}
							className="bg-[#FF6B6B] px-[10px] py-[5px] rounded-[5px]">
							{skill}
						</div>)
				}
			</div>
		</div>
	);
}