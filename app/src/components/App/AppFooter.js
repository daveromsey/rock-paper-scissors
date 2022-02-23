import { useRPSContext } from '../RockPaperScissors/RPSContext';
import {
	FaGithub,
} from "react-icons/fa";
import RPSHeading from '../RockPaperScissors/RPSComponents/RPSHeading';
const AppFooter = () => {
	const { resetAllRpsData } = useRPSContext();

	return (
		<footer className="app-footer sm:flex">
			<section className="footer-left flex flex-shrink justify-center sm:max-w-sm sm:flex sm:flex-1 sm:justify-start sm:items-start">
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

			<section className="footer-right flex max-w-full justify-center sm:justify-end sm:flex-1 sm:items-end">
				<p>
					<span className="site-author">
						<span className="copyright text-sm">&copy; 2022</span>
						<span className="author-name"> &#183; Dave Romsey </span>
						<a href="https://github.com/daveromsey/rock-paper-scissors">
							<FaGithub size={24} className="top-[-3px] relative inline-block github"/>
						</a>
					</span>
				</p>
			</section>
		</footer>
	);
}

export default AppFooter;
