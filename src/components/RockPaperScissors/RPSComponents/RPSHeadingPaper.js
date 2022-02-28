import {
	FaRegHandPaper, // Stroke
} from "react-icons/fa";
import RPSHeading from './RPSHeading';

const RPSHeadingPaper = ( { text } ) => {
	return (
		<RPSHeading
			text={text}
			extraTextClassName="px-4"
			textBefore={<><FaRegHandPaper className="paper"/></>}
			textAfter={<><FaRegHandPaper className="paper reverse"/></>}
			extraContentClassName="text-retropurple-600 dark:text-retropurple-100 text-2xl xs:text-3xl"
		/>
	);
}

export default RPSHeadingPaper;
