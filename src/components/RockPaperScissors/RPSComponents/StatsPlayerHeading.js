import { FaUser, FaRobot } from "react-icons/fa";

const StatsPlayerHeading = ( { playerName, playerNiceName } ) => {
	let icon;

	if ( 'player' === playerName ) {
		icon = <FaUser className="relative text-[22px] top-[-4px] text-[#25d5f4cc]" />;
	}

	if ( 'cpu' === playerName ) {
		icon = <FaRobot className="relative text-[26px] top-[-4px] text-[#FF7003ee]"/>;
	}

	return (
		<h3 className="StatsPlayerHeading text-2xl text-center pb-4 mb-4">
			<span className="border-b border-retropurple-600/25 dark:border-retropurple-100/50 pb-1">
				{icon} <span className="name-label font-brand">{playerNiceName}</span>
			</span>
		</h3>
	);
}

export default StatsPlayerHeading;