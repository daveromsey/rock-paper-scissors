import {
	FaRegHandPaper, // Stroke
} from "react-icons/fa";
import RPSHeading from './RPSHeading';

const RPSHeadingPaper = ( { text } ) => {
	return (
		<RPSHeading
			text={text}
			extraContainerClassName="RPSHeadingPaper"
			extraTextClassName="px-4"
			textBefore={<><FaRegHandPaper className="paper reverse"/></>}
			textAfter={<><FaRegHandPaper className="paper"/></>}
			extraContentClassName="text-retropurple-600 dark:text-retropurple-100 text-2xl xs:text-3xl"
		/>
	);
}

export default RPSHeadingPaper;
