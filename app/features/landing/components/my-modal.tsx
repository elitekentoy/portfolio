import { Article } from '@mui/icons-material';
import { useState } from 'react';

export default function MyModal() {
		const [isOpen, setIsOpen] = useState(false);
		const handleDownload = () => {
				const link = document.createElement("a");
				link.href = "/resume.pdf";
				link.download = "Resume - Jonathan Kent Morales.pdf";
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
		};

		const toggleModal = () => {
			setIsOpen(!isOpen);
		};

		return (
			<>
				<div
					id='Resume'
					onClick={toggleModal}
					className={`flex flex-row border-2 rounded-[5px] border-[#FF6B6B] px-[1vw] items-center hover:bg-[#FFB703] animate-appear`}>
					<Article />
					<p>Download Resume</p>
				</div>

				{isOpen && (
					<div className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center">
						<div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
							<h2 className="text-xl font-bold mb-4 text-[#FF6B6B]">Notice</h2>
							<p className="mb-4 text-[#1B2223]">
								References and exact address has been removed for Privacy purposes.
							</p>
							<p className="mb-4 text-[#1B2223]">
								Please contact me via email/number if you need it for Hiring Purposes.
							</p>
							<p className="mb-4 text-[#1B2223]">
								Thank you in advance!
							</p>
							<div className='flex flex-row justify-end gap-3'>
								<button onClick={toggleModal} className="px-4 py-2 bg-[#FF6B6B] text-white rounded">
									Close
								</button>
								<button onClick={handleDownload} className="px-4 py-2 bg-[#FFB703] text-white rounded">
									Download
								</button>
							</div>
							
						</div>
					</div>
				)}
			</>
	);
}
