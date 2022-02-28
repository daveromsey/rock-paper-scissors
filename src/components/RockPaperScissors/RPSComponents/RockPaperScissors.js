import '../../../assets/sass/RockPaperScissors.scss';

import { useRPSContext } from '../RPSContext';

import RPSTitle from './RPSTitle';
import RPSBreak from './RPSBreak';
import Statistics from './Statistics';
import Scoreboard from './Scoreboard';
import Results from './Results';
import ShotActions from './ShotActions';
import GameActions from './GameActions';

const RockPaperScissors = () => {

	const {
		game,
		stats,
		gamesPlayed,
	} = useRPSContext();

  return (
		<article className="RockPaperScissors">
			<RPSTitle />
			<Statistics stats={stats} gamesPlayed={gamesPlayed} />
			<Scoreboard stats={stats} gamesPlayed={gamesPlayed} />
			<Results
				playerShot={game.playerShot}
				cpuShot={game.cpuShot}
				winner={game.winner}
			/>
			<RPSBreak />
			<ShotActions />
			<GameActions />
			<RPSBreak />
	 </article>
  );
}

export default RockPaperScissors;
