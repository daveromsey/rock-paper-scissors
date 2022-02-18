import {
	shots,
	cpuShoot,
	getGameResult,
	getStats,
	resetButtonStates,
} from './RPSFunctions.js';

import RPSInitialState from './RPSInitialState'

// Rock Paper Scissors Reducer function.
const RPSReducer = ( state, action ) => {
	/**
	 * Handle player shoot.
	 *
	 * action.payload string The shot type rock|paper|scissors.
	 */
	if ( 'PLAYER_SHOOT' === action.type ) {
		if ( ! shots.includes( action.payload.playerShot ) ) {
			throw new Error( 'Invalid shot type.' );
		}

		const newStartTime = new Date().getTime().toString()
		const newPlayerShot = action.payload.playerShot;
		const newCpuShot = cpuShoot();
		const newWinner = getGameResult( newPlayerShot, newCpuShot );

		action.payload.event.target.classList.add('clicked');

		const playerShootButtons = document.querySelectorAll('.player-shoot');

		playerShootButtons.forEach((button) => {
			button.disabled = true;
		});

		const playAgainButton = document.querySelector('.play-again');
		playAgainButton.classList.remove( 'invisible');

		return {
			...state,
			game: {
				startTime: newStartTime,
				endTime: new Date().getTime().toString(),
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
		// // Reset shoot buttons.
		// const playerShootButtons = document.querySelectorAll('.player-shoot');

		// playerShootButtons.forEach((button) => {
		// 	button.classList.remove('clicked');
		// 	button.disabled = false;
		// });

		// // Hide Reset Game button.
		// const playAgainButton = document.querySelector('.play-again');
		// playAgainButton.classList.add('invisible');
		resetButtonStates();

		return {
			...state,
			game: { // Re-initailize game state.
				startTime: null,
				endTime: null,
				cpuShot: null,
				playerShot: null,
				winner: null
			}
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

	/**
	 * Handle updating the number of games played.
	 */
	if ( 'UPDATE_GAMES_PLAYED' === action.type ) {
		return {
			...state,
			gamesPlayed: state.games.length
		};
	}

	/**
	 * Handle updating stats.
	 */
	 if ( 'UPDATE_STATS' === action.type ) {
		const updatedStats = getStats( state.games );

		return {
			...state,
			stats: {
				player: {
					winTotal: updatedStats.player.winTotal,
					lossTotal: updatedStats.player.lossTotal,
					drawTotal: updatedStats.player.drawTotal,
					winStreak: updatedStats.player.winStreak,
					longestStreak: updatedStats.player.longestStreak,
					winPercentage: updatedStats.player.winPercentage,
					shotCounts: updatedStats.player.shotCounts,
				},
				cpu:{
					winTotal: updatedStats.cpu.winTotal,
					lossTotal: updatedStats.cpu.lossTotal,
					drawTotal: updatedStats.cpu.drawTotal,
					winStreak: updatedStats.cpu.winStreak,
					longestStreak: updatedStats.cpu.longestStreak,
					winPercentage: updatedStats.cpu.winPercentage,
					shotCounts: updatedStats.cpu.shotCounts,
				},
			},
		};
	}

	/**
	 * Handle clearing and resetting all RPS data.
	 */
	if ( 'CLEAR_AND_RESET_RPS_DATA' === action.type ) {
		resetButtonStates();
		return state = RPSInitialState;
	}

	return state;
};

export default RPSReducer;
