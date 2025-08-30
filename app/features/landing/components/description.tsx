import LocationPinIcon from '@mui/icons-material/LocationPin';
import Socials from './socials';


export default function Description() {

	return (
		<article className="text-[#F4F3FD] font-[Inter] flex flex-col justify-center pt-[5vh]">
			<p className='text-xl'>
				Hello, I'm Jonathan Kent Morales
			</p>
			<p className="font-semibold text-8xl my-[1vh]">
				JAVA <span className="text-[#FF6B6B]">DEVELOPER</span>
			</p>
			<p className='text-xl'>
				I build robust applications with Java and Spring Boot.
			</p>
			<div className='flex flex-row my-[1vh]'>
				<LocationPinIcon color='error' />
				<p>
					Cebu, Philippines
				</p>
			</div>
			<Socials />
		</article>
	);
}