import ScrollFadeIn from "~/ui/animations/ScrollFadeIn";
import { tileData } from "../types/tile-config";
import Tile from "./tile";



export default function Skills() {
	return (
		<ScrollFadeIn>
			<section className="px-[15vw] flex flex-col justify-center items-center gap-[5vh] mb-[15vh]">
				<p className="font-[Inter] text-[#F4F3FD] text-5xl font-bold" id="Skills">
					My <span className="text-[#FF6B6B]">Skills and Techonlogies</span>
				</p>
				<article className="flex flex-wrap gap-[10px] justify-center">
					{
						tileData.map(
							(tile) => 
								<Tile 
									image={tile.image} 
									label={tile.label}
									key={"skill-" + tile.label}
								/>)
					}
				</article>
			</section>
		</ScrollFadeIn>
	);
}