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

	// Get various counts.
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

	// Calculate longest streak.
	let playerStreak = 0;
	let cpuStreak = 0;
	let playerLongestStreak = 0;
	let cpuLongestStreak = 0;
	let mostRecentWinner = false;
	games.forEach( (game) => {
		const { winner } = game;

		// Ignore draws.
		if ( 'draw' === winner ) {
			return; // Continue.
		}

		if ( 'player' === winner ) {
			// Reset the opponent's streak.
			cpuStreak = 0;

			// Add 1 to the winner's current streak.
			playerStreak += 1;

			// If a new streak has been achieved, save it.
			if ( playerStreak >= playerLongestStreak ) {
				playerLongestStreak = playerStreak;
			}
		}

		if ( 'cpu' === winner ) {
			// Reset the opponent's streak.
			playerStreak = 0;

			// Add 1 to the winner's current streak.
			cpuStreak += 1;

			// If a new streak has been achieved, save it.
			if ( cpuStreak >= cpuLongestStreak ) {
				cpuLongestStreak = cpuStreak;
			}
		}

		mostRecentWinner = winner;
	});

	// Update each player's longest streak.
	stats.player.longestStreak = playerLongestStreak;
	stats.cpu.longestStreak = cpuLongestStreak;

	// Reverse order without modifying original array.
	// We want to look at the most recent games first.
	// https://stackoverflow.com/a/30610528/3059883
	const gamesSorted = games.slice().reverse();

	// Current streak
	let playerCurrentStreak = 0;
	let cpuCurrentStreak = 0;
	for ( let i = 0; i < gamesSorted.length; i++ ) {
		const { winner } = gamesSorted[i];

		// Ignore draws.
		if ( 'draw' === winner ) {
			continue;
		}

		// Bail if the opponent won. The streak is over.
		if ( 'player' !== winner ) {
			break;
		}

		playerCurrentStreak +=1;
	}

	for ( let i = 0; i < gamesSorted.length; i++ ) {
		const { winner } = gamesSorted[i];

		// Ignore draws.
		if ( 'draw' === winner ) {
			continue;
		}

		// Bail if the opponent won. The streak is over.
		if ( 'cpu' !== winner ) {
			break;
		}

		cpuCurrentStreak +=1;
	}

	// Update each player's current streak.
	stats.player.winStreak = playerCurrentStreak;
	stats.cpu.winStreak = cpuCurrentStreak;

	return stats;
};

// Calculate win percentage based on wins and losses only.
// Value 0-1.
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

export const getShotPercentage = ( shots, total ) =>  {
	if ( 0 === shots ) {
		return 0;
	}

	return shots / total;
}

export const formatPercentage = ( percentage ) => {
	const formatter = Intl.NumberFormat('en-US', {
		style: 'percent',
		maximumFractionDigits: 1,
	});

	return formatter.format( percentage );
}

export const formatPercentageDecimal = ( value ) => {
	const formatter = Intl.NumberFormat('en-US', {
		//style: 'percent',
		maximumFractionDigits: 1,
	});

	return Number( formatter.format( value ) ) * 100;
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
