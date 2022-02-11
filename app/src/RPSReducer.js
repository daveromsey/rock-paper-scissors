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
	 * @return string rock|paper|scissors
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
		const newgameWinner = getGameResult( newplayerShot, newcpuShot );

		return {
			...state,
			game: {
				startTime: new Date().getTime().toString(),
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
	 * Handle updating games (the game history).
	 */
	if ( 'UPDATE_GAMES' === action.type ) {
		// If the game has not finished, don't add it to the history.
		if ( null === state.game.winner ) {
			return {
				...state,
			};
		}

		const updatedGames = [ ...state.games, state.game ];

		return {
			...state,
			games: updatedGames
		};
	}

	return state;
};

export default reducer;
