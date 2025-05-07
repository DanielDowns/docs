import { Sponsor } from "@site/src/components/Sponsors/Sponsor";

export const SponsorList = () => {

	const emeraldSponsors = [
		{
			imgSrc: "/sponsors/logos/n8n.png",
			url: "https://n8n.io/",
			name: "n8n",
			description:
				"Does your interface have a backend yet? Try n8n",
		},
	];
	const sponsors = [
		{
			imgSrc: "/sponsors/sponsor.png",
			url: "https://openwebui.com",
			name: "Open WebUI",
			description:
				"On a mission to build the best AI user interface.",
		},
	];

	return (

		<div>
			{/* <div className="mb-4">
				<div className="font-semibold text-xl text-black dark:text-white ">Diamond</div>
				<hr className="mt-1 mb-3 border-gray-200 dark:border-gray-700" />


				<div className="flex flex-wrap items-start justify-start gap-5">
					
				</div>
			</div>		


			<div className="mb-4">
				<div className="font-semibold text-xl text-black dark:text-white ">Sapphire</div>
				<hr className="mt-1 mb-3 border-gray-200 dark:border-gray-700" />


				<div className="flex flex-wrap items-start justify-start gap-5">
					
				</div>
			</div>					

			<div className="mb-4">
				<div className="font-semibold text-xl text-black dark:text-white ">Topaz</div>
				<hr className="mt-1 mb-3 border-gray-200 dark:border-gray-700" />


				<div className="flex flex-wrap items-start justify-start gap-5">
					
				</div>
			</div>		 */}


			<div className="mb-4">
				<div className="font-medium text-xl text-black dark:text-white">Emerald</div>
				<hr className="mt-1 mb-3 border-gray-200 dark:border-gray-700" />


				<div className="flex flex-wrap items-start justify-start gap-5">
				{emeraldSponsors.map((sponsor) => (
						<Sponsor sponsor={sponsor} />
					))}
					
				</div>
			</div>		


			<div className="mb-4">
				<div className="font-medium text-xl text-black dark:text-white">Jade</div>
				<hr className="mt-1 mb-3 border-gray-200 dark:border-gray-700" />


				<div className="flex flex-wrap items-start justify-start gap-5">
				{sponsors.map((sponsor) => (
						<Sponsor sponsor={sponsor} />
					))}
				</div>
			</div>			
		</div>
		
	);
};
