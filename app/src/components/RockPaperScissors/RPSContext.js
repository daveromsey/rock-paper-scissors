import React, { useRef, createContext, useContext, useReducer, useEffect } from 'react'

import RPSStateInit from './RPSStateInit'
import RPSInitialState from './RPSInitialState'
import RPSReducer from './RPSReducer'
const RPSContext = createContext();

const RPSProvider = ({ children }) => {
  const [state, dispatch] = useReducer( RPSReducer, RPSInitialState, RPSStateInit );

	// Used to determine if this is the original render or not.
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
		// Bail on first paint.
		if ( firstUpdate.current ) {
      firstUpdate.current = false;
      return;
    }

		// Bail if the game has not finished yet.
		if ( null === state.game.endTime ) {
			return;
		}

		dispatch( { type: 'UPDATE_GAMES' } );
		dispatch( { type: 'UPDATE_GAMES_PLAYED' } );
		dispatch( { type: 'UPDATE_STATS' } );
	}, [ state.game.endTime ] );

  return (
    <RPSContext.Provider
      value={{
				...state,
				playerShoot,
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
