import ScrollFadeIn from "~/ui/animations/ScrollFadeIn";
import Description from "./description";

export default function Landing() {
	return (
		<ScrollFadeIn>
			<section className="flex flex-row justify-center items-center gap-[5vw] mt-[3vh] h-[70vh]" id="Landing">
				<Description />
				<img className="h-[50vh]" src="app/features/landing/assets/portrait.png" alt="" />
			</section>
		</ScrollFadeIn>
	);
}