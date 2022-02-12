import { shots, cpuShoot, getGameResult } from './RPSFunctions.js';

// Reducer function.
const reducer = ( state, action ) => {

	/**
	 * Handle player shoot.
	 *
	 * action.payload string The shot type rock|paper|scissors.
	 */
	if ( 'PLAYER_SHOOT' === action.type ) {
		if ( ! shots.includes( action.payload ) ) {
			throw new Error( 'Invalid shot type.' );
		}

		const newCpuShot = cpuShoot();
		const newPlayerShot = action.payload;
		const newWinner = getGameResult( newPlayerShot, newCpuShot );

		return {
			...state,
			game: {
				startTime: new Date().getTime().toString(),
				cpuShot: newCpuShot,
				playerShot: newPlayerShot,
				winner: newWinner
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
