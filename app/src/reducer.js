// Reducer function.
const reducer = (state, action) => {

	// The possible shot choices.
	const shots = [
		'rock',
		'paper',
		'scissors',
	];

	/**
	 * Generate a random shot for the CPU.
	 *
	 * @author Dave Romsey <david.romsey@webdevstudios.com>
	 *
	 * @return srting
	 */
	const cpuShoot = () => {
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
	const getGameResult = ( playerShot, cpuShot ) => {
		if ( playerShot === cpuShot ) {
			return 'tie';
		}

		if (
		  ( 'rock' === playerShot && 'scissors' === cpuShot ) ||
			( 'paper' === playerShot && 'rock' === cpuShot ) ||
			( 'scissors' === playerShot && 'paper' === cpuShot )
		) {
			return 'player';
		}

		if (
			( 'scissors' === playerShot && 'rock' === cpuShot ) ||
			( 'rock' === playerShot && 'paper' === cpuShot ) ||
			( 'paper' === playerShot && 'scissors' === cpuShot )
		) {
			return 'cpu';
		}

		// If we get here, something went wrong.
		return null;
	};

	/**
	 * Handle player shoot.
	 *
	 * action.payload string The shot type rock|paper|scissors.
	 */
	if ( 'PLAYER_SHOOT' === action.type ) {
		if ( ! shots.includes( action.payload ) ) {
			throw new Error( 'Invalid shot type.' );
		}

		const newcpuShot = cpuShoot();
		const newplayerShot = action.payload;
		const newgameWinner = getGameResult( newcpuShot, newplayerShot );

		return {
			...state,
			game: {
				cpuShot: newcpuShot,
				playerShot: newplayerShot,
				winner: newgameWinner
			}
		};
	}

	/**
	 * Handle updating the number of games played.
	 */
	if ( 'UPDATE_GAMES_PLAYED' === action.type ) {
		return {
			...state,
			gamesPlayed: state.gamesPlayed + 1
		};
	}

	/**
	 * Handle updating games - the game history.
	 */
	if ( 'UPDATE_GAMES' === action.type ) {
		// payload is the game.

		// If the game has not finished, don't add it to the history.
		if ( null === action.payload.winner ) {
			return {
				...state,
			};
		}

		const updatedGames = [ ...state.games, action.payload ];

		return {
			...state,
			games: updatedGames
		};
	}

	return {
		...state
	};
};

export default reducer;
