import {
	FaRegHandScissors, // Stroke
} from "react-icons/fa";
import RPSHeading from './RPSHeading';

const RPSHeadingScissors = ( { text } ) => {
	return (
		<RPSHeading
			text={text}
			extraTextClassName="px-4"
			textBefore={<><FaRegHandScissors className="scissors"/></>}
			textAfter={<><FaRegHandScissors className="scissors reverse"/></>}
			extraContentClassName="text-retropurple-600 dark:text-retropurple-100 text-2xl xs:text-3xl"
		/>
	);
}

export default RPSHeadingScissors;
