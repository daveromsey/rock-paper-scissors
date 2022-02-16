const RPSInitialState = {
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

export default RPSInitialState;