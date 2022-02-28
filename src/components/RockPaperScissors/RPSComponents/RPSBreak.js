import {
	FaRegHandRock, // Stroke
	FaRegHandPaper, // Stroke
	FaRegHandScissors, // Stroke
} from "react-icons/fa";

import RPSHeading from './RPSHeading';

const RPSBreak = () => {
	return (
		<RPSHeading
			containerTag='div'
			text={<><FaRegHandRock/> <FaRegHandPaper/> <FaRegHandScissors/></>}
		/>
	);
}

export default RPSBreak;
