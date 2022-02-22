import RPSHeadingDot from './RPSHeadingDot';

const RPSHeading = () => {
	return (
		<h1 className="rps-heading font-brand text-center text-2xl sm:text-5xl sm:mb-4">
			Rock <RPSHeadingDot/> Paper <RPSHeadingDot/> Scissors
		</h1>
	);
}
export default RPSHeading;
