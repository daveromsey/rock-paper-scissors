import { useRPSContext } from '../RockPaperScissors/RPSContext';
import { FaGithub } from "react-icons/fa";


import { BsTrash } from "react-icons/bs";

const AppFooter = () => {
	const { resetAllRpsData } = useRPSContext();

	return (
		<footer className="app-footer sm:flex">
			<section className="footer-left flex my-8 sm:my-2 flex-shrink justify-center sm:max-w-sm sm:flex sm:flex-1 sm:justify-start sm:items-start">
				<button className="reset-rps text-retropurple-100 hover:text-red-600 text-center"
					onClick={() => {
						if ( window.confirm( 'Delete all game data?' ) ) {
							resetAllRpsData();
						}
					}}
				>
					<span className="button-text">Clear Data</span> <span className="button-icon"><BsTrash size={16} /></span>
				</button>
			</section>

			{/* <section className="footer-center flex md:flex-1 md:justify-center md:items-center"></section> */}

			<section className="footer-right my-8 sm:my-2 flex max-w-full justify-center sm:justify-end sm:flex-1 sm:items-end">
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