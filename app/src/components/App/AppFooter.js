import { useRPSContext } from '../RockPaperScissors/RPSContext';

const AppFooter = () => {
	const { resetAllRpsData } = useRPSContext();

	return (
		<footer className="app-footer flex">
			<section className="footer-left flex flex-1 justify-start items-start">
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

			<section className="footer-center flex flex-1 justify-center items-center"></section>

			<section className="footer-right flex flex-1 justify-end items-end">
				By Dave Romsey - Github
			</section>
		</footer>
	);
}

export default AppFooter;
