import {
	shots,
	cpuShoot,
	getGameResult,
	getStats,
	resetShootButtonStates,
} from './RPSFunctions.js';

import RPSInitialState from './RPSInitialState'

// Rock Paper Scissors Reducer function.
const RPSReducer = ( state, action ) => {
	switch ( action.type ) {
		/**
		 * Handle player shoot.
		 *
		 * action.payload string The shot type rock|paper|scissors.
		 */
		case ( 'PLAYER_SHOOT' ): {
			if ( ! shots.includes( action.payload.playerShot ) ) {
				throw new Error( 'Invalid shot type.' );
			}

			const newStartTime = new Date().getTime().toString()
			const newPlayerShot = action.payload.playerShot;
			const newCpuShot = cpuShoot();
			const newWinner = getGameResult( newPlayerShot, newCpuShot );

			action.payload.event.target.classList.add('clicked');

			const playerShootButtons = document.querySelectorAll('.ShootButton');

			playerShootButtons.forEach((button) => {
				button.disabled = true;
			});

			const playAgainButton = document.querySelector('.ResetGameButton');
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
		case ( 'RESET_GAME' ): {
			resetShootButtonStates();

			return {
				...state,
				game: { // Re-initialize game state.
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
		case ( 'UPDATE_GAMES' ): {
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
		case ( 'UPDATE_GAMES_PLAYED' ): {
			return {
				...state,
				gamesPlayed: state.games.length
			};
		}

		/**
		 * Handle updating stats.
		 */
		case ( 'UPDATE_STATS' ): {
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
		case ( 'CLEAR_AND_RESET_RPS_DATA' ): {
			resetShootButtonStates();
			return state = RPSInitialState;
		}

		default: {
			return state;
		}
	}
};

export default RPSReducer;
