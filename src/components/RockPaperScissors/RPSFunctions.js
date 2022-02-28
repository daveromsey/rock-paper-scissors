/**
 * @file Various functions used by Rock Paper Scissors components.
 */

// Bring in Lodash functions individually.
import isEmpty from "lodash/isEmpty";

/**
 * The possible shot choices.
 *
 * @var {array} shots
 */
export const shots = [
	'rock',
	'paper',
	'scissors',
];

/**
 * Gets the human readable version of a shot name.
 *
 * @param {string} shot The name of the shot, 'rock'|'paper'|scissors.
 *
 * @return {string} The human readable version of a shot name.
 */
 export const getShotNiceName = ( shot ) => {
	if ( 'rock' === shot ) {
		return 'Rock';
	}

	if ( 'paper' === shot ) {
		return 'Paper';
	}

	if ( 'scissors' === shot ) {
		return 'Scissors';
	}
}

/**
 * Generate a random shot for the CPU.
 *
 * @returns {string} Random selection of 'rock'|'paper'|'scissors'.
 */
export const cpuShoot = () => {
	return shots[ Math.floor( Math.random() * shots.length ) ];
};

/**
 * Determine who won the game based on each player's shot.
 *
 * @param {string} playerShot The player's shot.
 * @param {string} cpuShot    The CPU's shot.
 *
 * @return {string|null} The name of the winner: 'player'|'cpu'|'draw' or null on error.
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
 * @param {array} games Games data.
 *
 * @return {object} Stats for both player and CPU.
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

/**
 * Calculate win percentage based on wins and losses, ignoring draws.
 *
 * @param {number} wins   The number of wins.
 * @param {number} losses The number of losses.
 *
 * @return {number} Win percentage as a decimal from 0 to 1.
 */
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

/**
 * Calculate shot percentage based on number of uses of the shot
 * and the number of games played.
 *
 * @param {number} shots The number of times a particular shot was used.
 * @param {number} total The number of games played.
 *
 * @return {number} Shot usage percentage as a decimal from 0 to 1.
 */
export const getShotPercentage = ( shots, total ) =>  {
	if ( 0 === shots ) {
		return 0;
	}

	return shots / total;
}

/**
 * Formats a percentage expressed as a number of 0 to 1 as a percentage.
 *
 * @param {number} percentage The percentage to format.
 *
 * @return {string} The formatted percentage value.
 */
export const formatPercentage = ( percentage ) => {
	const formatter = Intl.NumberFormat('en-US', {
		style: 'percent',
		maximumFractionDigits: 1,
	});

	return formatter.format( percentage );
}

/**
 * Prepends a space to the specified class name when necessary.
 *
 * @param {string} className The class name, or multiple class names separated by spaces.
 *
 * @return {string} The class name string prepended with a space, when necessary.
 */
 export const formatClassName = ( className ) => {
	return ( isEmpty( className ) ) ? '' : ' ' + className;
}

/**
 * Resets the state of the Shoot buttons.
 */
export const resetShootButtonStates = () => {
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

/**
 * Formats a percentage expressed as a number of 0 to 1 as a percentage.
 *
 * @param {string} chartPiece The percentage to format.
 * @param {string} theme The name of the theme, 'light'|'dark'.
 *
 * @return {string} The color used for the chartPiece based on the specified theme.
 */
export const getChartPieceColor = (chartPiece, theme ) => {
	switch (chartPiece) {
		case 'angleLines':
		case 'grid':
		case 'ticks':
		case 'legend': {
			if ( 'dark' === theme ) {
				return '#E6C1E3';
			} else {
				return 'rgba(52, 28, 71,.5)'; // #341C47
			}
		}

		case 'pointLabels':
		default: {
			if ( 'dark' === theme ) {
				return '#E6C1E3';
			} else {
				return '#341C47';
			}
		}
	}
}

/**
 * Returns updated chartOptions based on the specified theme.
 *
 * @param {array} chartOptions The current ChartJS Radar chart options.
 * @param {string} theme       The name of the theme, 'light'|'dark'.
 *
 * @return {array} The updated ChartJS Radar chart options based on the specified theme.
 */
export const updateChartShotPctOptions = ( chartOptions, theme ) => {
	chartOptions.scales.r.angleLines.color = getChartPieceColor('angleLines', theme );
	chartOptions.scales.r.pointLabels.color = getChartPieceColor('pointLabels', theme );
	chartOptions.scales.r.grid.color = getChartPieceColor('grid', theme );
	chartOptions.scales.r.ticks.color = getChartPieceColor('ticks', theme );

	return chartOptions;
}
