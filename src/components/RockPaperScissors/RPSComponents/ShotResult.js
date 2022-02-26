import { FaRegHandRock, FaRegHandPaper, FaRegHandScissors } from "react-icons/fa";
import { getShotResultText } from '../RPSFunctions.js';

const ShotResult = ( {shot} ) => {
	let icon;
	let iconReverse;
	const reverseClassName = 'reverse';
	const classNames = `${shot} relative top-[-2px]`;

	if ( 'rock' === shot ) {
		icon = <FaRegHandRock className={classNames}/>
		iconReverse = <FaRegHandRock className={`${reverseClassName} ${classNames}`}/>
	}

	if ( 'paper' === shot ) {
		icon = <FaRegHandPaper className={classNames}/>
		iconReverse = <FaRegHandPaper className={`${reverseClassName} ${classNames}`}/>
	}

	if ( 'scissors' === shot ) {
		icon = <FaRegHandScissors className={classNames}/>
		iconReverse = <FaRegHandScissors className={`${reverseClassName} ${classNames}`}/>
	}

	return (
		<span className="shot-output font-brand mt-1">
			{icon}
				<span className="font-brand pt-2 mx-1"> {getShotResultText( shot )} </span>
			{iconReverse}
		</span>
	);
}

export default ShotResult;
