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
	 * @return string|null tie|player|cpu or null on error.
	 */
	export const getGameResult = ( playerShot, cpuShot ) => {
		// Handle a tie.
		if ( playerShot === cpuShot ) {
			return 'tie';
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