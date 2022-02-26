import {
	FaRegHandRock, // Stroke
	FaRegHandPaper, // Stroke
	FaRegHandScissors, // Stroke
	FaHandRock, // Fill
	FaHandPaper, // Fill
	FaHandScissors, // Fill
} from "react-icons/fa";
import { MdDoubleArrow } from "react-icons/md";

import { useRPSContext } from '../RPSContext';

import RPSHeading from './RPSHeading';
import RPSPageBreak from './RPSPageBreak';
import Statistics from './Statistics';
import Scoreboard from './Scoreboard';
import Results from './Results';

const RockPaperScissors = () => {
	const shotIconSize = 55;
	const shotIconFillSize = 48;

	const {
		playerShoot,
		resetGame,
		game,
		stats,
		gamesPlayed,
	} = useRPSContext();

  return (
		<article className="rock-paper-scissors">

			<RPSHeading />

			<RPSPageBreak
				text="Statistics"
				extraTextClassName="px-4"
				textBefore={<><FaRegHandRock className="rock"/></>}
				textAfter={<><FaRegHandRock className="rock reverse"/></>}
				extraContentClassName="text-retropurple-600 dark:text-retropurple-100 text-2xl xs:text-3xl"
			/>

			<Statistics stats={stats} gamesPlayed={gamesPlayed} />

			<RPSPageBreak
				text="Scoreboard"
				extraTextClassName="px-4"
				textBefore={<><FaRegHandPaper className="paper"/></>}
				textAfter={<><FaRegHandPaper className="paper reverse"/></>}
				extraContentClassName="text-retropurple-600 dark:text-retropurple-100 text-2xl xs:text-3xl"
			/>

			<Scoreboard stats={stats} gamesPlayed={gamesPlayed} />

			<RPSPageBreak
				text="Results"
				extraTextClassName="px-4"
				textBefore={<><FaRegHandScissors className="scissors"/></>}
				textAfter={<><FaRegHandScissors className="scissors reverse"/></>}
				extraContentClassName="text-retropurple-600 dark:text-retropurple-100 text-2xl xs:text-3xl"
			/>

			<Results
				playerShot={game.playerShot}
				cpuShot={game.cpuShot}
				winner={game.winner}
			/>

			<RPSPageBreak text={<><FaRegHandRock/> <FaRegHandPaper/> <FaRegHandScissors/></>}/>

			<section className="player-shot-controls pt-2 xs:pt-8 grid grid-cols-3 gap-4 sm:gap-8 items-center max-w-2xl mx-auto">
				<button
					className="rock
					player-shoot items-center
					border rounded-md text-center disabled:cursor-not-allowed disabled:opacity-50
					text-retropurple-600 border-retropurple-600
					hover:text-retropurple-100 hover:bg-retropurple-600
					hover:disabled:text-retropurple-600 hover:disabled:bg-inherit hover:disabled:border-retropurple-600
					dark:text-retropurple-100 dark:border-retropurple-100
					dark:hover:bg-retropurple-600
					dark:disabled:bg-retropurple-500
					dark:hover:disabled:text-retropurple-100 dark:hover:disabled:border-retropurple-100 dark:hover:disabled:bg-retropurple-500
					"
					onClick={ (event) => playerShoot( 'rock', event ) }
				>
					<FaRegHandRock size={shotIconSize} className="stroke inline-block rock"/>
					<FaHandRock size={shotIconFillSize} className="fill inline-block rock"/>
					<span className="button-text font-brand block pt-2">Rock</span>
				</button>

				<button
					className="paper
					player-shoot items-center
					border rounded-md text-center disabled:cursor-not-allowed disabled:opacity-50
					text-retropurple-600 border-retropurple-600
					hover:text-retropurple-100 hover:bg-retropurple-600
					hover:disabled:text-retropurple-600 hover:disabled:bg-inherit hover:disabled:border-retropurple-600
					dark:text-retropurple-100 dark:border-retropurple-100
					dark:hover:bg-retropurple-600
					dark:disabled:bg-retropurple-500
					dark:hover:disabled:text-retropurple-100 dark:hover:disabled:border-retropurple-100 dark:hover:disabled:bg-retropurple-500
					"
					onClick={ (event) => playerShoot( 'paper', event ) }
				>
					<FaRegHandPaper size={shotIconSize} className="stroke inline-block paper"/>
					<FaHandPaper size={shotIconFillSize} className="fill inline-block paper"/>
					<span className="button-text font-brand block pt-2">Paper</span>
				</button>

				<button
					className="scissors
					player-shoot items-center
					border rounded-md text-center disabled:cursor-not-allowed disabled:opacity-50
					text-retropurple-600 border-retropurple-600
					hover:text-retropurple-100 hover:bg-retropurple-600
					hover:disabled:text-retropurple-600 hover:disabled:bg-inherit hover:disabled:border-retropurple-600
					dark:text-retropurple-100 dark:border-retropurple-100
					dark:hover:bg-retropurple-600
					dark:disabled:bg-retropurple-500
					dark:hover:disabled:text-retropurple-100 dark:hover:disabled:border-retropurple-100 dark:hover:disabled:bg-retropurple-500
					"
					onClick={ (event) => playerShoot( 'scissors', event ) }
				>
					<FaRegHandScissors size={shotIconSize} className="stroke inline-block scissors"/>
					<FaHandScissors size={shotIconFillSize} className="fill inline-block scissors"/>
					<span className="button-text font-brand block pt-2">Scissors</span>
				</button>
			</section>

			<section className="game-actions flex flex-row mx-auto max-w-[60%] xs:max-w-[40%] items-center justify-center">
				<button onClick={ () => resetGame() } className="play-again invisible flex-grow mt-8 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-center border rounded-md
					text-retropurple-600 border-retropurple-600
					hover:text-retropurple-100 hover:bg-retropurple-600
					dark:text-retropurple-100 dark:border-retropurple-100
					dark:hover:bg-retropurple-600
				"
					>
					<span className="button-text">Play Again</span> <span className="button-icon relative top-[-2px]"><MdDoubleArrow size={20} /></span>
				</button>
			</section>

			<RPSPageBreak text={<><FaRegHandRock/> <FaRegHandPaper/> <FaRegHandScissors/></>}/>
	 </article>
  )
}

export default RockPaperScissors;
