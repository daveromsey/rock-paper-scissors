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
 * Gets the human-readable version of a shot name.
 *
 * @param {string} shot The name of the shot, 'rock'|'paper'|scissors.
 *
 * @return {string} The human-readable version of a shot name.
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
	// Structure for the stats.
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

	// Get the stats from the game history.

	// Calculate and set the shot count stats.
	let shotCounts          = getShotCounts( games );
	stats.player.shotCounts = shotCounts.player;
	stats.cpu.shotCounts    = shotCounts.cpu;

	// Calculate and set the win/lose/draw counts.
	let winLoseDrawCounts  = getWinLoseDrawCounts( games );
	stats.player.winTotal  = winLoseDrawCounts.player.winTotal;
	stats.player.lossTotal = winLoseDrawCounts.player.lossTotal;
	stats.player.drawTotal = winLoseDrawCounts.player.drawTotal;
	stats.cpu.winTotal     = winLoseDrawCounts.cpu.winTotal;
	stats.cpu.lossTotal    = winLoseDrawCounts.cpu.lossTotal;
	stats.cpu.drawTotal    = winLoseDrawCounts.cpu.drawTotal;

	// Calculate and set the win percentages.
	stats.player.winPercentage = getWinPercentages( stats.player.winTotal, stats.player.lossTotal );
	stats.cpu.winPercentage    = getWinPercentages( stats.cpu.winTotal, stats.cpu.lossTotal );

	// Calculate and set the current streak stats.
	let currentStreaks     = getCurrentStreaks( games );
	stats.player.winStreak = currentStreaks.player;
	stats.cpu.winStreak    = currentStreaks.cpu;

	// Calculate and set the longest streak stats.
	let longestStreaks         = getLongestStreaks( games );
	stats.player.longestStreak = longestStreaks.player;
	stats.cpu.longestStreak    = longestStreaks.cpu;

	return stats;
};

/**
 * Calculate shot counts (number of times Rock/Paper/Scissors was used)
 * for the Player and CPU.
 *
 * @param {array} games Games data.
 *
 * @return {object} Shot counts for both player and CPU.
 */
 export const getShotCounts = ( games ) => {

	let player = {
		rock: 0,
		paper: 0,
		scissors: 0,
	};

	let cpu = {
		rock: 0,
		paper: 0,
		scissors: 0,
	};

	let shotCounts = {};

	// Get shot counts.
	games.forEach( (game) => {
		const { playerShot, cpuShot } = game;

		// Handle shot counts.
		player[playerShot] += 1;
		cpu[cpuShot] += 1;
	});

	shotCounts.player = player;
	shotCounts.cpu    = cpu;

	return shotCounts;
};

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
 * Calculate the win/lose/draw counts for each player.
 * for the Player and CPU.
 *
 * @param {array} games Games data.
 *
 * @return {object} Win/Lose/Draw counts both player and CPU.
 */
 export const getWinLoseDrawCounts = ( games ) => {

	let player = {
		winTotal: 0,
		lossTotal: 0,
		drawTotal: 0,
	};

	let cpu = {
		winTotal: 0,
		lossTotal: 0,
		drawTotal: 0,
	};

	let winLoseDrawTotals = {};

	games.forEach( (game) => {
		const { winner } = game;

		// Handle win/lose/draw counts.
		if ( 'player' === winner ) {
			player.winTotal += 1;
			cpu.lossTotal += 1;
		}

		if ( 'cpu' === winner ) {
			cpu.winTotal += 1;
			player.lossTotal += 1;
		}

		if ( 'draw' === winner ) {
			player.drawTotal += 1;
			cpu.drawTotal += 1;
		}
	});

	winLoseDrawTotals.player = player;
	winLoseDrawTotals.cpu    = cpu;

	return winLoseDrawTotals;
};

/**
 * Calculate win percentage based on wins and losses, ignoring draws.
 *
 * @param {number} wins   The number of wins.
 * @param {number} losses The number of losses.
 *
 * @return {number} Win percentage as a decimal from 0 to 1.
 */
 export const getWinPercentages = ( wins, losses ) =>  {
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
 * Calculate the current streak for each player.
 *
 * @param {array} games Games data.
 *
 * @return {object} Current streak data for each player.
 */
export const getCurrentStreaks = ( games ) => {
	let currentStreakData = {};
	let playerStreak      = 0;
	let cpuStreak         = 0;

	// Reverse order without modifying original array.
	// For performance, we want to look at the most recent games first.
	// https://stackoverflow.com/a/30610528/3059883
	const gamesSorted = games.slice().reverse();

	// Player.
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

		playerStreak +=1;
	}

	// CPU.
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

		cpuStreak +=1;
	}

	currentStreakData.player = playerStreak;
	currentStreakData.cpu    = cpuStreak;

	return currentStreakData;
};

/**
 * Calculate the longest streak for each player.
 *
 * @param {array} games Games data.
 *
 * @return {object} Longest streak data for each player.
 */
 export const getLongestStreaks = ( games ) => {
	let longestStreakData   = {};
	let playerLongestStreak = 0;
	let cpuLongestStreak    = 0;
	let playerStreak        = 0;
	let cpuStreak           = 0;

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

	longestStreakData.player = playerLongestStreak;
	longestStreakData.cpu    = cpuLongestStreak;

	return longestStreakData;
};

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
	const playerShootButtons = document.querySelectorAll('.ShootButton');
	playerShootButtons.forEach((button) => {
		button.classList.remove('clicked');
		button.disabled = false;
	});

	// Hide Reset Game button.
	const playAgainButton = document.querySelector('.ResetGameButton');
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
