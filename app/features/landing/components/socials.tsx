import Article from '@mui/icons-material/Article';
import { socialData } from '../types/social-config';
import Social from './social';
import MyModal from './my-modal';

export default function Socials() {
	const handleDownload = () => {
		const link = document.createElement("a");
		link.href = "/resume.pdf";
		link.download = "Resume - Jonathan Kent Morales.pdf";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
  };
	return (
		<div className="flex flex-row justify-between my-[2vh]">
			<div className="flex flex-row gap-[.4vw]">
				{
					socialData.map((social) => 
						<Social key={"social-" + social.image} image={social.image} link={social.link} />)
				}
			</div>
			<MyModal />
			
		</div>
	);
}