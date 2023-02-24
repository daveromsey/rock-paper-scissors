import React, { useRef, createContext, useContext, useReducer, useEffect } from 'react'

import RPSStateInit from './RPSStateInit'
import RPSInitialState from './RPSInitialState'
import RPSReducer from './RPSReducer'
const RPSContext = createContext();

const RPSProvider = ({ children }) => {
  const [state, dispatch] = useReducer( RPSReducer, RPSInitialState, RPSStateInit );

	// Flag used to determine if this is the first render or not.
	const firstUpdate = useRef(true);

	// Save RPS state to Local Storage whenever state changes.
	useEffect(() => {
    localStorage.setItem( "RPSState", JSON.stringify(state) );
  }, [state] );

	// Handle Player Shot.
	const playerShoot = ( playerShot, event ) => {
		dispatch({
			type: 'PLAYER_SHOOT',
			payload: {
				playerShot,
				event,
			},
		});
	};

	// Update games array, games played counter, and stats array.
	const updateGameData = () => {
		dispatch( { type: 'UPDATE_GAMES' } );
		dispatch( { type: 'UPDATE_GAMES_PLAYED' } );
		dispatch( { type: 'UPDATE_STATS' } );
	};

	// Reset the game state.
	const resetGame = () => {
		dispatch({
			type: 'RESET_GAME'
		});
	};

	// Clear all RPS data from local storage.
	const resetAllRpsData = () => {
		dispatch({
			type: 'CLEAR_AND_RESET_RPS_DATA'
		});
	};

	// Update games and stats.
	useEffect( () => {
		// Handle first paint.
		if ( firstUpdate.current ) {
			firstUpdate.current = false;

			/*
				Ensure that we start with an empty game when page is first loaded.

				This also fixes an issue where when game data exists and we're in dev
				and strict mode is enabled (which causes two renders), the previous game state would
				be re-run and added to the game history. https://stackoverflow.com/questions/61254372/my-react-component-is-rendering-twice-because-of-strict-mode
			*/
			resetGame();

			return;
		}

		// Bail if the game has not finished yet.
		if ( null === state.game.endTime ) {
			return;
		}

		// Update game history, stats, etc.
		updateGameData();
	}, [ state.game.endTime ] );

  return (
    <RPSContext.Provider
      value={{
				...state,
				playerShoot,
				updateGameData,
				resetGame,
				resetAllRpsData
      }}
    >
      {children}
    </RPSContext.Provider>
  )
}

export const useRPSContext = () => {
  return useContext( RPSContext )
}

export { RPSContext, RPSProvider };
