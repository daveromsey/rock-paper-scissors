// The possible shot choices.
export const shots = [
	'rock',
	'paper',
	'scissors',
];

/**
 * Generate a random shot for the CPU.
 *
 * @author Dave Romsey <david.romsey@webdevstudios.com>
 *
 * @return string rock|paper|scissors
 */
export const cpuShoot = () => {
	return shots[ Math.floor( Math.random() * shots.length ) ];
};

/**
 * Determine who won the game based on each player's shot.
 *
 * @author Dave Romsey <david.romsey@webdevstudios.com>
 *
 * @param string playerShot The player's shot.
 * @param string cpuShot    The CPU's shot.
 *
 * @return string|null player|cpu|draw or null on error.
 */
export const getGameResult = ( playerShot, cpuShot ) => {
	// Handle a draw.
	if ( playerShot === cpuShot ) {
		return 'draw';
	}

	// Handle Player wins.
	if (
		( 'rock' === playerShot && 'scissors' === cpuShot ) ||
		( 'paper' === playerShot && 'rock' === cpuShot ) ||
		( 'scissors' === playerShot && 'paper' === cpuShot )
	) {
		return 'player';
	}

	// Handle CPU wins.
	if (
		( 'rock' === cpuShot && 'scissors' === playerShot ) ||
		( 'paper' === cpuShot && 'rock' === playerShot ) ||
		( 'scissors' === cpuShot && 'paper' === playerShot )
	) {
		return 'cpu';
	}

	// If we get here, something went wrong.
	return null;
};

/**
 * Calculate stats for the Player and CPU.
 *
 * @author Dave Romsey <david.romsey@webdevstudios.com>

 * @param array games Games data

 * @return object stats Stats for both player and CPU.
 */
export const getStats = ( games ) => {

	let stats = {
		player: {
			winTotal: 0,
			lossTotal: 0,
			drawTotal: 0,
			winStreak: 0,
			longestStreak: 0,
			winPercentage: 0,
			shotCounts: {
				rock: 0,
				paper: 0,
				scissors: 0,
			}
		},
		cpu: {
			winTotal: 0,
			lossTotal: 0,
			drawTotal: 0,
			winStreak: 0,
			longestStreak: 0,
			winPercentage: 0,
			shotCounts: {
				rock: 0,
				paper: 0,
				scissors: 0,
			}
		}
	}

	games.forEach( (game) => {
		const { playerShot, cpuShot, winner } = game;

		// Handle shot counts.
		stats.player.shotCounts[playerShot] += 1;
		stats.cpu.shotCounts[cpuShot] += 1;

		// Handle win/lose/draw counts.
		if ( 'player' === winner ) {
			stats.player.winTotal += 1;
			stats.cpu.lossTotal += 1;
		}

		if ( 'cpu' === winner ) {
			stats.cpu.winTotal += 1;
			stats.player.lossTotal += 1;
		}

		if ( 'draw' === winner ) {
			stats.player.drawTotal += 1;
			stats.cpu.drawTotal += 1;
		}
	});

	// Calculate Win Percentages.
	stats.player.winPercentage = getWinPercentage( stats.player.winTotal, stats.player.lossTotal );
	stats.cpu.winPercentage = getWinPercentage( stats.cpu.winTotal, stats.cpu.lossTotal );



	// Current streak

	// Reverse order without modifying original array.
	// https://stackoverflow.com/a/30610528/3059883
	const gamesSorted = games.slice().reverse();

	let mostRecentWinner = false;

	let playerCurrentStreak = 0;
	let playerCurrentStreakDone = false
	let cpuCurrentStreak = 0;
	let cpuCurrentStreakDone = false

	gamesSorted.forEach( (game) => {
		const { winner } = game;

		if ( 'draw' === winner ) {
			return; // "Continue".
		}

		if ( ! mostRecentWinner ) {
			mostRecentWinner = winner;
		} else if ( mostRecentWinner !== winner ) {

		}
	});


	// Longest streak.
	// playerLongestStreak = 0;
	// cpuLongestStreak = 0;

	return stats;
};

// Calculate win percentage bases on wins and losses only.
export const getWinPercentage = ( wins, losses ) =>  {
	let winPct = wins / ( wins + losses );

	if ( 0 === wins && 0 === losses ) {
		winPct = 0;
	}

	if ( ! isFinite( winPct ) ) {
		winPct = 1;
	}

	return winPct;
}

export const formatPercentage = ( percentage ) => {
	const formatter = Intl.NumberFormat('en-US', {
		style: 'percent',
		maximumFractionDigits: 1,
	});

	return formatter.format( percentage );
}


export const resetButtonStates = () => {
	// Reset shoot buttons.
	const playerShootButtons = document.querySelectorAll('.player-shoot');
	playerShootButtons.forEach((button) => {
		button.classList.remove('clicked');
		button.disabled = false;
	});

	// Hide Reset Game button.
	const playAgainButton = document.querySelector('.play-again');
	playAgainButton.classList.add('invisible');
}
