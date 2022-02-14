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
 * Calculate number of wins for specified player.
 *
 * @author Dave Romsey <david.romsey@webdevstudios.com>
 *
 * @return string resultType win|lose|draw
 * @return array games Games data
 * @return integer Number of wins,losses,f
 */
export const getGameResultCount = ( resultType, games ) => {
	let resultCount = 0;

	games.forEach( (game) => {
		const { winner } = game;

		if ( 'win' === resultType	&& 'player' === winner ) {
			resultCount += 1;
		} else if ( 'lose' === resultType	&& 'cpu' === winner ) {
			resultCount += 1;
		} else if ( 'draw' === resultType	&& 'draw' === winner ) {
			resultCount += 1;
		}
	});

	return resultCount;
};

export const getShotCountStats = ( games ) => {

	let shotCounts = {
		player: {
			rock: 0,
			paper: 0,
			scissors: 0,
		},
		cpu: {
			rock: 0,
			paper: 0,
			scissors: 0,
		}
	}

	games.forEach( (game) => {
		const { playerShot, cpuShot } = game;
		shotCounts.player[playerShot] += 1;
		shotCounts.cpu[cpuShot] += 1;
	});

	return shotCounts;
};


