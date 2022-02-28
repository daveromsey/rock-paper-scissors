import {
	FaRegHandRock, // Stroke
	FaRegHandPaper, // Stroke
	FaRegHandScissors, // Stroke
	FaHandRock, // Fill
	FaHandPaper, // Fill
	FaHandScissors, // Fill
} from "react-icons/fa";

import { useRPSContext } from '../RPSContext';
import { getShotNiceName } from '../RPSFunctions'
const ShootButton = ( { shot } ) => {
	const { playerShoot } = useRPSContext();
	let icons;
	const iconSize = 55;
	const iconFillSize = 48;

	if ( 'rock' === shot ) {
		icons = <>
			<FaRegHandRock size={iconSize} className={`stroke inline-block ${shot}`} />
			<FaHandRock size={iconFillSize} className={`fill inline-block ${shot}`} />
		</>;
	}

	if ( 'paper' === shot ) {
		icons = <>
			<FaRegHandPaper size={iconSize} className={`stroke inline-block ${shot}`} />
			<FaHandPaper size={iconFillSize} className={`fill inline-block ${shot}`} />
		</>;
	}

	if ( 'scissors' === shot ) {
		icons = <>
			<FaRegHandScissors size={iconSize} className={`stroke inline-block ${shot}`} />
			<FaHandScissors size={iconFillSize} className={`fill inline-block ${shot}`} />
		</>;
	}

  return (
		<button
			className={`${shot}
			player-shoot items-center
			border rounded-md text-center disabled:cursor-not-allowed disabled:opacity-50
			text-retropurple-600 border-retropurple-600
			hover:text-retropurple-100 hover:bg-retropurple-600
			hover:disabled:text-retropurple-600 hover:disabled:bg-inherit hover:disabled:border-retropurple-600
			dark:text-retropurple-100 dark:border-retropurple-100
			dark:hover:bg-retropurple-600
			dark:disabled:bg-retropurple-500
			dark:hover:disabled:text-retropurple-100 dark:hover:disabled:border-retropurple-100 dark:hover:disabled:bg-retropurple-500
			`}
			onClick={ (event) => playerShoot( shot, event ) }
		>
			{ icons }
			<span className="button-text font-brand block pt-2">{ getShotNiceName( shot ) }</span>
		</button>
  )
}

export default ShootButton;
