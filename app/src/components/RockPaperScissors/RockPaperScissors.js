import React from 'react'
import { useRPSContext } from './RPSContext';
import RPSHeading from './RPSHeading';
import { IconContext } from "react-icons";

import {
	// FaMedal,
	// FaAward,
	// FaTrophy,
	// FaRegSadCry,
	// FaCat,
	// FaRegWindowClose,
	// FaWindowClose,
	// FaRegTrashAlt,
	FaRegHandRock,
	FaRegHandPaper,
	FaRegHandScissors,
	FaHandRock,
	// FaHandPaper,
	// FaHandScissors,
	// FaRedoAlt,
	FaRedo
} from "react-icons/fa";


const RockPaperScissors = () => {

	const {
		playerShoot,
		resetGame,
		game,
		stats,
		gamesPlayed,
		winTotal,
		lossTotal,
		drawTotal
	} = useRPSContext();

  return (
	<article className="rock-paper-scissors">
		<IconContext.Provider value={{ className: "react-icon icon" }}>
			<RPSHeading/>


			<div className="fancy-hr relative flex py-5 items-center">
				<div className="flex-grow border-t border-gray-400"></div>
				<span className="flex-shrink mx-4 text-gray-400 text-3xl flex items-center">
					<FaRegHandRock/>
					<span className="text">&nbsp;&nbsp;Scoreboard&nbsp;&nbsp;</span>
					<FaRegHandRock/>
				</span>
				<div className="flex-grow border-t border-gray-400"></div>
			</div>
			{/* <FaRegHandRock/> <FaRegHandPaper/> <FaRegHandScissors/> */}


			<div className="scoreboard">
				{/* <h2>Scoreboard</h2> */}
				<div className="games-played text-4xl">Games Played:&nbsp;
					<span className="font-digital-italic">{gamesPlayed}</span>
				</div>
				<div className="games-results grid grid-cols-1 xs:grid-cols-3">
					<div className="wins">Wins: {winTotal}</div>
					<div className="losses">Losses: {lossTotal}</div>
					<div className="draws">Draws: {drawTotal}</div>
				</div>
			</div>

			<div className="relative flex py-5 items-center">
				<div className="flex-grow border-t border-gray-400"></div>
				<span className="flex-shrink mx-4 text-gray-400"><FaRegHandRock/></span>
				<div className="flex-grow border-t border-gray-400"></div>
			</div>

			<div className="stats">
				<h2>Stats</h2>

				<div className="grid grid-cols-1 xsm:grid-cols-2 sm:grid-cols-2">

					<div className="player-stats">
						<h2>Player Stats</h2>
						<div className="stats-wrap grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2">
							<div className="player-stats-1">
								<div className="current-streak">Win Streak: </div>
								<div className="longest-streak">Longest Streak: </div>
								<div className="win-percentage">Win Percentage </div>
							</div>
							<div className="player-stats-2">
								<div className="rock">Rock: {stats.player.shotCounts.rock}</div>
								<div className="paper">Paper: {stats.player.shotCounts.paper}</div>
								<div className="scissors">Scissors: {stats.player.shotCounts.scissors}</div>
							</div>
						</div>
					</div>

					<div className="cpu-stats">
						<h2>CPU Stats</h2>
						<div className="stats-wrap grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2">
							<div className="cpu-stats-1">
								<div className="current-streak">Win Streak: </div>
								<div className="longest-streak">Longest Streak: </div>
								<div className="win-percentage">Win Percentage </div>
							</div>
							<div className="cpu-stats-2">
								<div className="rock">Rock: {stats.cpu.shotCounts.rock}</div>
								<div className="paper">Paper: {stats.cpu.shotCounts.paper}</div>
								<div className="scissors">Scissors: {stats.cpu.shotCounts.scissors}</div>
							</div>
						</div>
					</div>

				</div>
			</div>

			<div className="relative flex py-5 items-center">
				<div className="flex-grow border-t border-gray-400"></div>
				<span className="flex-shrink mx-4 text-gray-400"><FaRegHandPaper/></span>
				<div className="flex-grow border-t border-gray-400"></div>
			</div>

			<div className="results">
				<h2>Results</h2>
				<div className="results-grid grid grid-cols-1 xs:grid-cols-3">
					<div className="game-winner">
						<h3>Winner: {game.winner}</h3>
					</div>
					<div className="player-shot">
						Your Shot: {game.playerShot}
					</div>
					<div className="cpu-shot">
						CPU Shot: {game.cpuShot}
					</div>
				</div>
			</div>

			<div className="relative flex py-5 items-center">
				<div className="flex-grow border-t border-gray-400"></div>
				<span className="flex-shrink mx-4 text-gray-400"><FaRegHandScissors/></span>
				<div className="flex-grow border-t border-gray-400"></div>
			</div>

			<div className="player-shot-controls grid grid-cols-3 gap-4 items-center max-w-2xl mx-auto">
				<button
					className="player-shoot rock items-center
					text-gray-900 bg-white border border-gray-300 hover:bg-gray-100  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700"
					onClick={ (event) => playerShoot( 'rock', event ) }
				>
					<FaRegHandRock size={70} className="stroke inline-block"/>
					<FaHandRock size={58} className="fill inline-block"/>
					<span className="button-text block">Rock</span>
				</button>

				<button
					className="player-shoot paper inline-block"
					onClick={ (event) => playerShoot( 'paper', event ) }
				>
					<FaRegHandPaper size={70} className="stroke inline-block"/>
					<span className="button-text block">Paper</span>
				</button>

				<button
					className="player-shoot scissors inline-block"
					onClick={ (event) => playerShoot( 'scissors', event ) }
				>
					<FaRegHandScissors size={70} className="stroke inline-block"/>
					<span className="button-text block">Scissors</span>
				</button>
			</div>

			<div className="game-actions flex flex-row mx-auto max-w-[50%] items-center justify-center">
				<button onClick={ () => resetGame() } className="play-again hidden_ invisible flex-grow  mt-4 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
					<span className="button-text">Play Again</span> <FaRedo/>
				</button>
			</div>
		</IconContext.Provider>
	 </article>
  )
}

export default RockPaperScissors;
