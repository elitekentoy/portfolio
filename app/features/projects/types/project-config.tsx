

export interface ProjectConfig {
	image: string | undefined,
	title: string,
	summary: string,
	description: string,
	role: string,
	skills: string[],
}


export const projectData : ProjectConfig[] = [
	{
		image: "app/features/projects/assets/padlock.png",
		title: "(Confidential)",
		summary: "Unified secure plaform to access business resources",
		description: "Enable employees to safely access internal systems, files, email, and web applications from remote environments. The platform emphasizes data security, containerization, and access control, ensuring sensitive corporate data never resides permanently on user devices.",
		role: "(Server-side) Developer, Maintenace",
		skills: ['Java', 'Spring', 'JUnit', 'Git', 'Gradle', 'PostgreSQL', 'AWS EC2', 'Azure DevOps', 'PlantUML', 'Draw.io', 'CVE', 'Redmine', ' WinSCP', 'Bash', 'JavaScript', 'HTML', 'CSS', 'Postman', 'Swagger', 'DBeaver']
	},
	{
		image: "app/features/projects/assets/asmrs.png",
		title: "Adelante SMRS (Capstone)",
		summary: "IoT-based Short Message Relay and Push Notification System",
		description: "The system leverages IoT technology and the MQTT protocol to transmit SMS messages from web or mobile devices connected within the school’s network. This allows a school-wide or class-wide announcement via SMS message.",
		role: "Mobile Developer, UI/UX Designer",
		skills: ['Dart', 'Flutter', 'Git', 'GitHub', 'SQLite', 'Figma']
	},
	{
		image: "app/features/projects/assets/igarchu.png",
		title: "iGarchu",
		summary: "A mobile and web application for Pet Adoption.",
		description: "A cross-platform application aimed at modernizing the pet adoption process by connecting animal shelters, pet owners, and adopters in a user-friendly environment.",
		role: "Consultant",
		skills: ['Dart', 'Flutter', 'Git', 'GitHub', 'SQLite', 'Firebase', 'Draw.io']
	},
];