import {
	FaRegHandRock, // Stroke
	FaRegHandPaper, // Stroke
	FaRegHandScissors, // Stroke
} from "react-icons/fa";

import { useRPSContext } from '../RPSContext';

import RPSHeading from './RPSHeading';
import RPSPageBreak from './RPSPageBreak';
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
		<article className="rock-paper-scissors">

			<RPSHeading />

			<RPSPageBreak
				text="Statistics"
				extraTextClassName="px-4"
				textBefore={<><FaRegHandRock className="rock"/></>}
				textAfter={<><FaRegHandRock className="rock reverse"/></>}
				extraContentClassName="text-retropurple-600 dark:text-retropurple-100 text-2xl xs:text-3xl"
			/>

			<Statistics stats={stats} gamesPlayed={gamesPlayed} />

			<RPSPageBreak
				text="Scoreboard"
				extraTextClassName="px-4"
				textBefore={<><FaRegHandPaper className="paper"/></>}
				textAfter={<><FaRegHandPaper className="paper reverse"/></>}
				extraContentClassName="text-retropurple-600 dark:text-retropurple-100 text-2xl xs:text-3xl"
			/>

			<Scoreboard stats={stats} gamesPlayed={gamesPlayed} />

			<RPSPageBreak
				text="Results"
				extraTextClassName="px-4"
				textBefore={<><FaRegHandScissors className="scissors"/></>}
				textAfter={<><FaRegHandScissors className="scissors reverse"/></>}
				extraContentClassName="text-retropurple-600 dark:text-retropurple-100 text-2xl xs:text-3xl"
			/>

			<Results
				playerShot={game.playerShot}
				cpuShot={game.cpuShot}
				winner={game.winner}
			/>

			<RPSPageBreak text={<><FaRegHandRock/> <FaRegHandPaper/> <FaRegHandScissors/></>}/>

			<ShotActions />

			<GameActions />

			<RPSPageBreak text={<><FaRegHandRock/> <FaRegHandPaper/> <FaRegHandScissors/></>}/>
	 </article>
  )
}

export default RockPaperScissors;
