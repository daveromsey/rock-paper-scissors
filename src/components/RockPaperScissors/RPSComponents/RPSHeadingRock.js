import {
	FaRegHandRock, // Stroke
} from "react-icons/fa";
import RPSHeading from './RPSHeading';

const RPSHeadingRock = ( { text } ) => {
	return (
		<RPSHeading
			text={text}
			extraTextClassName="px-4"
			textBefore={<><FaRegHandRock className="rock"/></>}
			textAfter={<><FaRegHandRock className="rock reverse"/></>}
			extraContentClassName="text-retropurple-600 dark:text-retropurple-100 text-2xl xs:text-3xl"
		/>
	);
}

export default RPSHeadingRock;
