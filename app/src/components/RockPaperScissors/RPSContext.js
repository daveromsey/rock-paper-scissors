import React, { useRef, useContext, useReducer, useEffect } from 'react'
import RPSReducer from './RPSReducer'

const RPSContext = React.createContext();

const initialStateRPS = {
	game: {
		startTime: null,
		endTime: null,
		playerShot: null,
		cpuShot: null,
		winner: null,
	},
	games: [],
	gamesPlayed: 0,
	stats: {
		player:{
			winTotal: 0,
			lossTotal: 0,
			drawTotal: 0,
			winStreak: 0,
			longestStreak: 0,
			winPercentage: 0,
			shotCounts: {
				rock: 0,
				paper: 0,
				scissors: 0,
			},
		},
		cpu:{
			winTotal: 0,
			lossTotal: 0,
			drawTotal: 0,
			winStreak: 0,
			longestStreak: 0,
			winPercentage: 0,
			shotCounts: {
				rock: 0,
				paper: 0,
				scissors: 0,
			},
		},
	}
}

const RPSProvider = ({ children }) => {
  const [state, dispatch] = useReducer( RPSReducer, initialStateRPS );

	// Used to determine if this is the original render or not.
	const firstUpdate = useRef(true);

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

	// Update games and stats.
	useEffect( () => {
		// Bail on first paint.
		// if ( firstUpdate.current ) {
    //   firstUpdate.current = false;
    //   return;
    // }

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
