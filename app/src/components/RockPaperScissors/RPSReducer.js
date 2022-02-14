import { shots, cpuShoot, getGameResult } from './RPSFunctions.js';

// Reducer function.
const reducer = ( state, action ) => {

	/**
	 * Handle player shoot.
	 *
	 * action.payload string The shot type rock|paper|scissors.
	 */
	if ( 'PLAYER_SHOOT' === action.type ) {
		if ( ! shots.includes( action.payload.playerShot ) ) {
			throw new Error( 'Invalid shot type.' );
		}

		const newCpuShot = cpuShoot();
		const newPlayerShot = action.payload.playerShot;
		const newWinner = getGameResult( newPlayerShot, newCpuShot );

		//console.log( action.payload.event);

		action.payload.event.target.classList.add('clicked');

		const playerShootButtons = document.querySelectorAll('.player-shoot');

		playerShootButtons.forEach((button) => {
			//button.classList.add('clicked');
			button.disabled = true;
		});

		const playAgainButton = document.querySelector('.play-again');
		playAgainButton.classList.remove( 'invisible');

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
	 * Handle resetting the game.
	 */
	 if ( 'RESET_GAME' === action.type ) {

		// Reset shoot buttons.
		const playerShootButtons = document.querySelectorAll('.player-shoot');

		playerShootButtons.forEach((button) => {
			button.classList.remove('clicked');
			button.disabled = false;
		});

		// Clear: Winner, Your shot, CPU Shot

		// Hide Reset Game button.
		const playAgainButton = document.querySelector('.play-again');
		playAgainButton.classList.add( 'invisible');

		return {
			...state,
			game: { // Initailize game state.
				startTime: null,
				cpuShot: null,
				playerShot: null,
				winner: null
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
