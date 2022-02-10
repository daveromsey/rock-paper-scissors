import React, { useState, useContext, useReducer, useEffect } from 'react'
import { useGlobalContext } from '../context'
import reducer from '../reducer'

import { IconContext } from "react-icons";
import {
	FaMedal,
	FaAward,
	FaTrophy,
	FaRegSadCry,
	FaCat,
	FaRegWindowClose,
	FaWindowClose,
	FaRegTrashAlt,
	FaRegHandRock,
	FaRegHandPaper,
	FaRegHandScissors,
	FaHandRock,
	FaHandPaper,
	FaHandScissors,
	FaRedoAlt,
	FaRedo
} from "react-icons/fa";


const RockPaperScissors = () => {
	//const [shot, setShot] = useState(null);

	// const handleShot = (playerShot) => {
	// 	setShot(playerShot);
	// 	console.log(playerShot);
	// };

	const { playerShoot, game, games, gamesPlayed } = useGlobalContext();



  return (

	<article className="rock-paper-scissors">

		<h1>Rock, Paper, Scissors</h1>
		<div className="games-played">Games Played: {	gamesPlayed } </div>
{/*
		<div className="scoreboard">
			<h2>Scoreboard</h2>
			<div className="streak">Streak: </div>
			<div className="longest-streak">Longest Streak: </div>
			<div className="win-percentage">Win Percentage </div>
			<div className="games-played">Games Played: </div>
			<div className="wins">Wins: </div>
			<div className="losses">Losses: </div>
			<div className="ties">Ties: </div>
		</div>

		<div className="stats">
			<div className="cpu-stats">
				<h2>CPU Stats</h2>
				<div className="rock">Rock: </div>
				<div className="paper">Paper: </div>
				<div className="scissors">Scissors: </div>
			</div>
			<div className="player-stats">
				<h2>Player Stats</h2>
				<div className="rock">Rock: </div>
				<div className="paper">Paper: </div>
				<div className="scissors">Scissors: </div>
			</div>
		</div> */}

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

		<hr />

		<div className="player-controls">
			<IconContext.Provider value={{ color: "blue", className: "react-icons" }}>
			{/* <button className="shoot rock" onClick={ () => handleShot('rock') }>Rock</button> */}
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

export default RockPaperScissors
