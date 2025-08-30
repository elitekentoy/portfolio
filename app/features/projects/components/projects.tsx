import ScrollFadeIn from "~/ui/animations/ScrollFadeIn";
import { projectData } from "../types/project-config";
import Project from "./project";



export default function Projects() {

	return (
		<ScrollFadeIn>
			<section className="flex flex-col px-[15vw] items-center gap-[10vh]">
				<p className="text-[#F4F3FD] font-[Inter] text-5xl font-bold" id="Projects">
					<span className="text-[#FF6B6B]">Projects</span> Involved
				</p>
				<div className="flex flex-col gap-[4vh]">
					{
						projectData.map((project, index) => 
							<Project 
								invert={index % 2 == 0} key={"projects-" + project.title}
								image={project.image} title={project.title} summary={project.summary} 
								description={project.description} role={project.role} skills={project.skills}/>)
					}
				</div>
			</section>
		</ScrollFadeIn>
	);
}