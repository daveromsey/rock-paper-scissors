// Reducer function.
const reducer = (state, action) => {

	const shots = [
		'rock',
		'paper',
		'scissors',
	];

	const cpuShoot = () => {
		return shots[ Math.floor( Math.random() * shots.length ) ];
	};

	const getGameResult = ( playerShot, cpuShot ) => {
		if ( playerShot === cpuShot ) {
			return 'tie';
		}

		if (
		  ( 'rock' === playerShot && 'scissors' === cpuShot ) ||
			( 'paper' === playerShot && 'rock' === cpuShot ) ||
			( 'scissors' === playerShot && 'paper' === cpuShot )
		) {
			return 'player';
		}

		if (
			( 'scissors' === playerShot && 'rock' === cpuShot ) ||
			( 'rock' === playerShot && 'paper' === cpuShot ) ||
			( 'paper' === playerShot && 'scissors' === cpuShot )
		) {
			return 'cpu';
		}

		// If we get here, something went wrong.
		return null;
	};

	if ( 'PLAYER_SHOOT' === action.type ) {

		if ( ! shots.includes( action.payload ) ) {
			throw new Error( 'Invalid shot type.' );
		}

		// state.game.cpuShot = cpuShoot();
		// state.game.playerShot = action.payload;
		// state.game.winner = getGameResult( state.game.playerShot, state.game.cpuShot );

		const newcpuShot = cpuShoot();
		const newplayerShot = action.payload;
		const newgameWinner = getGameResult( newcpuShot, newplayerShot );

		//const updatedGames = [...state.games, state.game];


		//state.gamesPlayed += 1;

		console.log('PLAYER_SHOOT');

		//console.log(`state.games`);
		//console.log(state.games);
		//state.games.push( [	state.game.winner] );
		// const updatedGames = state.games;
		// state.games.push(state.game.winner);
		return {
			...state,
			game: {
				cpuShot: newcpuShot,
				playerShot: newplayerShot,
				winner: newgameWinner
			},
			//games: updatedGames
		};
	}

	if ( 'UPDATE_GAMES' === action.type ) {
		const updatedGames = [...state.games, action.payload];
		return { // always return state.
			...state,
			games: updatedGames
		};
	}

	if ( 'UPDATE_GAMES_PLAYED' === action.type ) {
		//const gamesUpdated = state.games;
		//state.games.push( action.payload );
		// const gamesUpdated = action.payload.games;

		// gamesUpdated.push(action.payload.game );

		//state.gamesPlayed += 1;


		return { // always return state.
			...state,
			gamesPlayed: state.gamesPlayed + 1
		};
	}


	return {
		...state
	};
};

export default reducer;