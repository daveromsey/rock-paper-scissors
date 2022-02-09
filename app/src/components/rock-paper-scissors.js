import React, { useState } from 'react';

const RockPaperScissors = () => {
	const [shot, setShot] = useState(null);

	const handleShot = (playerShot) => {
		setShot(playerShot);
		console.log(playerShot);
	};

  return (
	<article className="rock-paper-scissors">
		<h1>Rock, Paper, Scissors</h1>

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
		</div>

		<div className="results">
			<h2>Results</h2>
			<h3>Winner: </h3>
			<div className="player-value">
				Your Choice:
			</div>
			<div className="cpu-value">
				CPU Choice:
			</div>
		</div>

		<hr />

		<div className="player-controls">
			<button className="shoot rock" onClick={ () => handleShot('rock') }>Rock</button>
			<button className="shoot paper">Paper</button>
			<button className="shoot scissors">Scissors</button>

			<div className="game-actions">
				<button className="play-again">Play Again</button>
			</div>
		</div>

	 </article>
  )
}

export default RockPaperScissors
