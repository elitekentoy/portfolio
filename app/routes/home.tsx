import type { Route } from "./+types/home";
import Landing from "~/features/landing/components/landing";
import Navigation from "~/features/landing/components/navigation";
import About from "~/features/about/components/about";
import Skills from "~/features/skills/components/skills";
import Projects from "~/features/projects/components/projects";
import Certificates from "~/features/certificates/components/certificates";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Morales Portfolio" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
	<main className="bg-[#1B2223] pb-[15vh]">
		<Navigation />
		<Landing />
		<About />
		<Skills />
		<Projects />
		<Certificates />
	</main>
  );
}
