import type { TileConfig } from "../types/tile-config";

export default function Tile(config: TileConfig) {
	return (
		<div className="flex flex-col border-[#FF6B6B] border-2 h-[125px] w-[125px] rounded-[5px] justify-center items-center hover:border-[#FFB703] hover:scale-110">
			<img src={config.image} className="h-[50px] w-[50px] object-contain" alt="" />
			<p className="font-[Inter] text-[#F4F3FD]">{config.label}</p>
		</div>
	);
}
