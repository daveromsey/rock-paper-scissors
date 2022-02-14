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
	games: []
}

const RPSProvider = ({ children }) => {
  const [state, dispatch] = useReducer( RPSReducer, initialStateRPS );

	// Used to determine if this is the original render or not.
	const firstUpdate = useRef(true);

	const playerShoot = ( playerShot, event ) => {

		dispatch({
			type: 'PLAYER_SHOOT',
			payload: {
				playerShot,
				event,
			},
		});
	};

	// useEffect( () => {
	// 	dispatch( { type: 'UPDATE_GAMES' } );
	// }, [ state.game.playerShot ] );

  useEffect( () => {
    if ( firstUpdate.current ) {
      firstUpdate.current = false;
      return;
    }

		dispatch( { type: 'UPDATE_GAMES_PLAYED' } );
  }, [ state.game.startTime ] );

	useEffect( () => {
		dispatch( { type: 'UPDATE_GAMES' } );
	}, [ state.gamesPlayed ] );

  return (
    <RPSContext.Provider
      value={{
        ...state,
				playerShoot,
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
