import {
	FaRegHandScissors, // Stroke
} from "react-icons/fa";
import RPSHeading from './RPSHeading';

const RPSHeadingScissors = ( { text } ) => {
	return (
		<RPSHeading
			text={text}
			extraContainerClassName="RPSHeadingScissors"
			extraTextClassName="px-4"
			textBefore={<><FaRegHandScissors className="scissors reverse"/></>}
			textAfter={<><FaRegHandScissors className="scissors"/></>}
			extraContentClassName="text-retropurple-600 dark:text-retropurple-100 text-2xl xs:text-3xl"
		/>
	);
}

export default RPSHeadingScissors;
