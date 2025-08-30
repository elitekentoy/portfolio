import { useEffect, useRef, type ReactNode } from "react";

type ScrollFadeInProps = {
  children: ReactNode;
};


export default function ScrollFadeIn ({children} : ScrollFadeInProps) {
	const ref = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && ref.current) {
					ref.current.classList.add("animate-fadein")
				} else {
					ref.current?.classList.remove("animate-fadein")
				}
			},
			{threshold: 0.25}
		)

		if (ref.current) observer.observe(ref.current)
			return () => observer.disconnect()

	}, [])

	return (
		<div ref={ref} className="opacity-0">
			{children}
		</div>
	);
}