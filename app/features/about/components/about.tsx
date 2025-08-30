import ScrollFadeIn from "~/ui/animations/ScrollFadeIn";
import Actions from "./actions";
import Description from "./description";



export default function About() {
	return (
		<ScrollFadeIn>
			<section className="flex flex-row justify-center mb-[15vh]">
				<img className="h-[50vh]"
					src="app/features/about/assets/circular.png" alt="" />
				<article className="w-1/2 flex flex-col justify-center gap-[4vh]" id="About">
					<Description />
					<Actions />
				</article>
			</section>
		</ScrollFadeIn>
	);
}