import StatEntry from './StatEntry';

const Scoreboard = ( {gamesPlayed, stats} ) => {

	return (
		<div className="scoreboard py-3 flex flex-col xs:flex-row xs:justify-between text-lg sm:text-2xl md:text-3xl">
			<StatEntry label="Games Played " value={gamesPlayed} />
			<StatEntry label="Wins " value={stats.player.winTotal} />
			<StatEntry label="Losses " value={stats.player.lossTotal} />
			<StatEntry label="Draws " value={stats.player.drawTotal} />
		</div>
	);
}

export default Scoreboard;
