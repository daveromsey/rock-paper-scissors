import { FaUser, FaRobot } from "react-icons/fa";
import RPSHeadingScissors from './RPSHeadingScissors';
import WinnerPlayer from './WinnerPlayer';
import WinnerCPU from './WinnerCPU';
import WinnerDraw from './WinnerDraw';
import ShotResult from './ShotResult';

const Results = ( { playerShot, cpuShot, winner } ) => {

	return (
		<section className="Results">

			<RPSHeadingScissors text="Results" />

			<div className="results-layout py-3 grid grid-cols-1 sm:grid-cols-3 text-xl">

				<section className="player-shot order-1 mx-auto sm:mx-0">
					<div className="flex flex-row sm:flex-col text-center">
						<div className="player">
							<FaUser className="relative text-[22px] top-[-4px] text-[#25d5f4cc]"/> Your Shot
						</div>
						<ShotResult shot={playerShot} />
					</div>
				</section>

				<section className="game-winner xs:text-center justify-center order-3 sm:order-2 text-2xl font-brand mx-auto sm:mx-0 xs:text-3xl xs:min-h-[56px] whitespace-nowrap mt-3">
					{ ( 'player' === winner ) && <WinnerPlayer /> }
					{ ( 'cpu' === winner ) && <WinnerCPU /> }
					{ ( 'draw' === winner ) && <WinnerDraw /> }
				</section>

				<section className="cpu-shot xs:text-right order-2 sm:order-3 mx-auto sm:mx-0">
					<div className="flex flex-row sm:flex-col text-center">
						<div className="cpu">
							<FaRobot className="relative text-[22px] top-[-4px] text-[#FF7003ee]"/> CPU Shot
						</div>
						<ShotResult shot={cpuShot} />
					</div>
				</section>
			</div>
		</section>
	);
}

export default Results;
