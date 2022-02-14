import React, { useRef, useContext, useReducer, useEffect } from 'react'
import RPSReducer from './RPSReducer'

const RPSContext = React.createContext();

const initialStateRPS = {
	game: {
		startTime: null,
		playerShot: null,
		cpuShot: null,
		winner: null,
	},
	gamesPlayed: 0,
	winTotal: 0,
	lossTotal: 0,
	drawTotal: 0,
	games: []
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

	// Update "Games Played".
  useEffect( () => {
    if ( firstUpdate.current ) {
      firstUpdate.current = false;
      return;
    }

		if ( null === state.game.startTime ) {
			return;
		}

		dispatch( { type: 'UPDATE_GAMES_PLAYED' } );
  }, [ state.game.startTime ] );

	// Update Games (game history).
	// Update Win/Lose/Draw counts.
	useEffect( () => {
		dispatch( { type: 'UPDATE_GAMES' } );
		dispatch( { type: 'UPDATE_WIN_LOSE_DRAW_TOTALS' } );
	}, [ state.gamesPlayed ] );

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
