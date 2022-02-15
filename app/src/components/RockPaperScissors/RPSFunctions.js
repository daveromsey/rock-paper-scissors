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

	return stats;
};


