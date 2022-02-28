import { formatPercentage } from '../RPSFunctions.js';

import StatEntry from './StatEntry';

const StatsPlayerStats = ( { stats } ) => {
	return (
		<div className="StatsPlayerStats grid grid-cols-1 xs:grid-cols-2">
		<div className="player-stats-1">
			<StatEntry label="Win Streak " title="Ties are ignored" value={stats.winStreak} extraValueClasses="text-2xl"/>
			<StatEntry label="Top Streak " title="Ties are ignored" value={stats.longestStreak} extraValueClasses="text-2xl"/>
			<StatEntry label="Win % " title="Based on wins and losses only" value={formatPercentage(stats.winPercentage)} extraValueClasses="text-2xl"/>
		</div>
		<div className="player-stats-2 xs:text-right">
			<StatEntry label="Rock " title="Number of times Rock was used" value={stats.shotCounts.rock} extraValueClasses="text-2xl"/>
			<StatEntry label="Paper " title="Number of times Paper was used" value={stats.shotCounts.paper} extraValueClasses="text-2xl"/>
			<StatEntry label="Scissors " title="Number of times Scissors were used" value={stats.shotCounts.scissors} extraValueClasses="text-2xl"/>
		</div>
	</div>
	);
}

export default StatsPlayerStats;