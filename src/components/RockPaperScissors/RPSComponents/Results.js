import { FaUser, FaRobot } from "react-icons/fa";
import { getWinnerComponent } from '../RPSFunctions.js';
import ShotResult from './ShotResult';

const Results = ( {playerShot, cpuShot, winner} ) => {

	return (
		<div className="results py-3 grid grid-cols-1 sm:grid-cols-3 text-xl ">

			<div className="player-shot order-1 mx-auto sm:mx-0">
				<div className="flex flex-col text-center">
					<div className="player">
						<FaUser className="relative text-[22px] top-[-4px] text-[#25d5f4cc]"/> Your Shot
					</div>
					<ShotResult shot={playerShot} />
				</div>
			</div>

			<div className="game-winner xs:text-center justify-center order-3 xs:order-2 text-2xl font-brand mx-auto sm:mx-0 xs:text-3xl xs:min-h-[56px] mt-3">
				{ getWinnerComponent( winner ) }
			</div>

			<div className="cpu-shot xs:text-right order-2 xs:order-3 mx-auto sm:mx-0">
				<div className="flex flex-col text-center">
					<div className="cpu">
						<FaRobot className="relative text-[22px] top-[-4px] text-[#FF7003ee]"/> CPU Shot
					</div>
					<ShotResult shot={cpuShot} />
				</div>
			</div>

		</div>
	);
}

export default Results;
