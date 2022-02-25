import { FaRegHandRock, FaRegHandPaper, FaRegHandScissors } from "react-icons/fa";
import { getShotResultText } from '../RPSFunctions.js';

const ShotResult = ( {shot} ) => {
	let shotIcon;
	const classNames = `${shot} relative top-[-2px] `;

	if ( 'rock' === shot ) {
		shotIcon = <FaRegHandRock className={classNames}/>
	}

	if ( 'paper' === shot ) {
		shotIcon = <FaRegHandPaper className={classNames}/>
	}

	if ( 'scissors' === shot ) {
		shotIcon = <FaRegHandScissors className={classNames}/>
	}

	return (
		<span className="shot-output font-brand">
			<span className="font-brand pt-2">{getShotResultText( shot )} </span>{shotIcon}
		</span>
	);
}

export default ShotResult;
