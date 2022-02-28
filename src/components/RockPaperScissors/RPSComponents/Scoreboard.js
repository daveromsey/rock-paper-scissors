// Component dependencies.
import RPSHeadingPaper from './RPSHeadingPaper';
import StatEntry from './StatEntry';

const Scoreboard = ( { gamesPlayed, stats } ) => {

	return (
		<section className="Scoreboard">
			<RPSHeadingPaper text="Scoreboard" />
			<div className="scoreboard-items flex flex-col xs:flex-row xs:justify-between text-lg sm:text-2xl md:text-3xl py-3">
				<StatEntry label="Games Played " value={gamesPlayed} />
				<StatEntry label="Wins " value={stats.player.winTotal} />
				<StatEntry label="Losses " value={stats.player.lossTotal} />
				<StatEntry label="Draws " value={stats.player.drawTotal} />
			</div>
		</section>
	);
}

export default Scoreboard;
