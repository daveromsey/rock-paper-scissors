import { useRPSContext } from '../RockPaperScissors/RPSContext';

const AppFooter = () => {
	const { resetAllRpsData } = useRPSContext();

	return (
		<footer className="app-footer sm:flex">
			<section className="footer-left flex justify-center sm:flex sm:flex-1 sm:justify-start sm:items-start">
				<button className='reset-rps'
					onClick={() => {
						if ( window.confirm( 'Reset all game data?' ) ) {
							resetAllRpsData();
						}
					}}
				>
					Reset Game Data
				</button>
			</section>

			{/* <section className="footer-center flex md:flex-1 md:justify-center md:items-center"></section> */}

			<section className="footer-right flex justify-center sm:justify-end sm:flex-1 sm:items-end">
				By Dave Romsey - Github
			</section>
		</footer>
	);
}

export default AppFooter;
