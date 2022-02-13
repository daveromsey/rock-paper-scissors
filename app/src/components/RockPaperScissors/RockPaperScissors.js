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
	// FaHandRock,
	// FaHandPaper,
	// FaHandScissors,
	// FaRedoAlt,
	FaRedo
} from "react-icons/fa";


const RockPaperScissors = () => {

	const { playerShoot, game, gamesPlayed } = useRPSContext();

  return (

	<article className="rock-paper-scissors">

		<RPSHeading/>

		<div className="games-played text-4xl">Games Played:&nbsp;
			<span className="font-digital-italic">{gamesPlayed}</span>
		</div>

		<div className="scoreboard">
			<h2>Scoreboard</h2>
			<div className="games-played">Games Played: </div>
			<div className="wins">Wins: </div>
			<div className="losses">Losses: </div>
			<div className="ties">Ties: </div>
		</div>

		<div class="relative flex py-5 items-center">
			<div class="flex-grow border-t border-gray-400"></div>
			<span class="flex-shrink mx-4 text-gray-400"><FaRegHandRock/></span>
			<div class="flex-grow border-t border-gray-400"></div>
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
							<div className="rock">Rock: </div>
							<div className="paper">Paper: </div>
							<div className="scissors">Scissors: </div>
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
							<div className="rock">Rock: </div>
							<div className="paper">Paper: </div>
							<div className="scissors">Scissors: </div>
						</div>
					</div>
				</div>

			</div>
		</div>

		<div class="relative flex py-5 items-center">
			<div class="flex-grow border-t border-gray-400"></div>
			<span class="flex-shrink mx-4 text-gray-400"><FaRegHandPaper/></span>
			<div class="flex-grow border-t border-gray-400"></div>
		</div>

		<div className="results">
			<h2>Results</h2>
			<h3>Winner: {game.winner}</h3>
			<div className="player-shot">
				Your Shot: {game.playerShot}
			</div>
			<div className="cpu-shot">
				CPU Shot: {game.cpuShot}
			</div>
		</div>

		<div class="relative flex py-5 items-center">
			<div class="flex-grow border-t border-gray-400"></div>
			<span class="flex-shrink mx-4 text-gray-400"><FaRegHandScissors/></span>
			<div class="flex-grow border-t border-gray-400"></div>
		</div>

		<div className="player-controls">
			<IconContext.Provider value={{ color: "blue", className: "react-icons" }}>
				<button
					className="player-shoot rock"
					onClick={ () => playerShoot( 'rock' ) }
				>
					Rock <FaRegHandRock/>
				</button>

				<button
					className="player-shoot paper"
					onClick={ () => playerShoot( 'paper' ) }
				>
					Paper <FaRegHandPaper/>
				</button>

				<button
					className="player-shoot scissors"
					onClick={ () => playerShoot( 'scissors' ) }
				>
					Scissors <FaRegHandScissors/>
				</button>

				<div className="game-actions">
					<button className="play-again">
						Play Again <FaRedo/>
					</button>
				</div>
			</IconContext.Provider>
		</div>
	 </article>
  )
}

export default RockPaperScissors;
