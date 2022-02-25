import React, {useRef, useEffect } from 'react';

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
	Title,
	SubTitle,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

import {
	FaUser,
	FaRobot,
	FaRegHandRock, // Stroke
	FaRegHandPaper, // Stroke
	FaRegHandScissors, // Stroke
	FaHandRock, // Fill
	FaHandPaper, // Fill
	FaHandScissors, // Fill
	FaGithub,
	// FaMedal,
	// FaAward,
	// FaTrophy,
	// FaRegSadCry,
	// FaCat,
	// FaRegWindowClose,
	// FaWindowClose,
} from "react-icons/fa";
import { MdDoubleArrow } from "react-icons/md";

import { useAppContext } from '../../../global/AppContext';
import { useRPSContext } from '../RPSContext';
import {
	getShotPercentage,
	formatPercentage,
	updateChartShotPctOptions,
	getWinnerText,
	getShotOutput
} from '../RPSFunctions.js';
import ChartShotPctOptionDefaults from '../ChartShotPctOptionsDefaults';
import RPSHeading from './RPSHeading';
import RPSPageBreak from './RPSPageBreak';

const RockPaperScissors = () => {
	const { getTheme } = useAppContext();
	let theme = getTheme();

	// Radar chart references used when updating charts (e.g. theme color change).
	const playerChartReference = useRef(true);
	const cpuChartReference = useRef(true);
	let ChartShotPctOptions = updateChartShotPctOptions( ChartShotPctOptionDefaults, theme );

	const shotIconSize = 55;
	const shotIconFillSize = 48;

	// Update charts using new options when the theme is changed.
	useEffect(() => {
		let options = updateChartShotPctOptions( ChartShotPctOptions, getTheme(), false );

		playerChartReference.current.options = options;
		playerChartReference.current.update();

		cpuChartReference.current.options = options;
		cpuChartReference.current.update();
  }, [theme] );

	const {
		playerShoot,
		resetGame,
		game,
		stats,
		gamesPlayed,
	} = useRPSContext();

	ChartJS.register(
		RadialLinearScale,
		PointElement,
		LineElement,
		Filler,
		Tooltip,
		Legend,
		Title,
		SubTitle
	);

	const playerDataChartJS = {
		labels: ['Rock', 'Paper', 'Scissors'],
		datasets: [
			{
				label: 'Player',
				data: [
					getShotPercentage( stats.player.shotCounts.rock, gamesPlayed ),
					getShotPercentage( stats.player.shotCounts.paper, gamesPlayed ),
					getShotPercentage( stats.player.shotCounts.scissors, gamesPlayed ),
				],
				borderColor: '#25d4f3',
				backgroundColor: 'rgba(37, 213, 244, 0.424)',
				borderWidth: 2,
				fill: true,
			},
		],
	};

	const cpuDataChartJS = {
		labels: ['Rock', 'Paper', 'Scissors'],
		datasets: [
			{
				label: 'CPU',
				data: [
					getShotPercentage( stats.cpu.shotCounts.rock, gamesPlayed ),
					getShotPercentage( stats.cpu.shotCounts.paper, gamesPlayed ),
					getShotPercentage( stats.cpu.shotCounts.scissors, gamesPlayed ),
				],
				borderColor: '#ff9b00',
				backgroundColor: '#FF700377',
				borderWidth: 2,
				fill: true,
			},
		],
	};

  return (
	<article className="rock-paper-scissors">

		<RPSHeading/>

		<RPSPageBreak
			text="Statistics"
			extraTextClassName="px-4"
			textBefore={<><FaRegHandRock className="rock"/></>}
			textAfter={<><FaRegHandRock className="rock opposite"/></>}
			extraContentClassName="text-retropurple-600 dark:text-retropurple-100 text-2xl xs:text-3xl"
		/>

		<div className="stats">
			<div className="grid grid-cols-1 xsm:grid-cols-2 sm:grid-cols-2 text-xl">

				<div className="player-stats xs:pr-2 md:pr-8">
					<h2 className="player-stats-heading text-2xl text-center pb-4 mb-4">
						<span className="border-b border-retropurple-600/25 dark:border-retropurple-100/50 pb-1">
							<FaUser className="relative text-[22px] top-[-4px] text-[#25d5f4cc]"/> <span className="name-label font-brand">Player</span>
						</span>
					</h2>
					<div className="stats-wrap grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2">
						<div className="player-stats-1">
							<p className="current-streak" title="Ties are ignored">
								<span className="stat-label">Win Streak: </span>
								<span className="stat-value font-digital-italic lcd text-2xl">{stats.player.winStreak}</span>
							</p>
							<p className="longest-streak" title="Ties are ignored">
								<span className="stat-label">Top Streak: </span>
								<span className="stat-value font-digital-italic lcd text-2xl">{stats.player.longestStreak}</span>
							</p>
							<p className="win-percentage" title="Based on wins and losses only">
								<span className="stat-label">Win Pct: </span>
								<span className="stat-value font-digital-italic lcd text-2xl">{ formatPercentage(stats.player.winPercentage) }</span>
							</p>
						</div>
						<div className="player-stats-2 xs:text-right">
							<p className="rock" title="Number of times Rock was used">
								<span className="stat-label">Rock: </span>
								<span className="stat-value font-digital-italic lcd text-2xl">{stats.player.shotCounts.rock}</span>
							</p>
							<p className="paper" title="Number of times Paper was used">
								<span className="stat-label">Paper: </span>
								<span className="stat-value font-digital-italic lcd text-2xl">{stats.player.shotCounts.paper}</span>
							</p>
							<p className="scissors" title="Number of times Scissors was used">
								<span className="stat-label">Scissors: </span>
								<span className="stat-value font-digital-italic lcd text-2xl">{stats.player.shotCounts.scissors}</span>
							</p>
						</div>
					</div>
					<div className="xs:px-14 react-chartjs">
						<Radar
							options={ChartShotPctOptions}
							data={playerDataChartJS}
							ref={playerChartReference}
						/>
					</div>
				</div>

				<div className="cpu-stats xs:pl-2 md:pl-8">
					<h2 className="player-stats-heading text-2xl text-center pb-4 mb-4">
						<span className="border-b border-retropurple-600/25 dark:border-retropurple-100/50 pb-1">
							<FaRobot className="relative text-[26px] top-[-4px] text-[#FF7003ee]"/> <span className="name-label font-brand">CPU</span>
						</span>
					</h2>
					<div className="stats-wrap grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2">
						<div className="cpu-stats-1">
							<p className="current-streak" title="Ties are ignored">
								Win Streak: <span className="font-digital-italic lcd text-2xl">{stats.cpu.winStreak}</span>
							</p>
							<p className="longest-streak" title="Ties are ignored">
								Top Streak: <span className="font-digital-italic lcd text-2xl">{stats.cpu.longestStreak}</span>
							</p>
							<p className="win-percentage" title="Based on wins and losses only">
								Win Pct: <span className="font-digital-italic lcd text-2xl">{ formatPercentage(stats.cpu.winPercentage) }</span>
							</p>
						</div>
						<div className="cpu-stats-2 xs:text-right">
							<p className="rock" title="Number of times Rock was used">
								Rock: <span className="font-digital-italic lcd text-2xl">{stats.cpu.shotCounts.rock}</span>
							</p>
							<p className="paper" title="Number of times Paper was used">
								Paper: <span className="font-digital-italic lcd text-2xl">{stats.cpu.shotCounts.paper}</span>
							</p>
							<p className="scissors" title="Number of times Scissors was used">
								Scissors: <span className="font-digital-italic lcd text-2xl">{stats.cpu.shotCounts.scissors}</span>
							</p>
						</div>
					</div>
					<div className="xs:px-14 react-chartjs">
						<Radar
						options={ChartShotPctOptions}
						data={cpuDataChartJS}
						ref={cpuChartReference}
						/>
					</div>
				</div>
			</div>
		</div>

		<RPSPageBreak
			text="Scoreboard"
			extraTextClassName="px-4"
			textBefore={<><FaRegHandPaper className="paper"/></>}
			textAfter={<><FaRegHandPaper className="paper opposite"/></>}
			extraContentClassName="text-retropurple-600 dark:text-retropurple-100 text-2xl xs:text-3xl"
		/>

		<div className="scoreboard py-3">

			<div className="games-results flex flex-col xs:flex-row xs:justify-between text-lg sm:text-2xl md:text-3xl">
				<p className="games-played sm:text-center">
					<span className="stat-label">Games Played: </span><span className="font-digital-italic lcd">{gamesPlayed}</span>
				</p>
				<p className="wins sm:text-center">
					<span className="stat-label">Wins: </span><span className="font-digital-italic lcd">{stats.player.winTotal}</span>
				</p>
				<p className="losses sm:text-center">
					<span className="stat-label">Losses: </span><span className="font-digital-italic lcd">{stats.player.lossTotal}</span>
				</p>
				<p className="draws sm:text-center">
					<span className="stat-label">Draws: </span><span className="font-digital-italic lcd">{stats.player.drawTotal}</span>
				</p>
			</div>
		</div>

		<RPSPageBreak
			text="Results"
			extraTextClassName="px-4"
			textBefore={<><FaRegHandScissors className="scissors"/></>}
			textAfter={<><FaRegHandScissors className="scissors opposite"/></>}
			extraContentClassName="text-retropurple-600 dark:text-retropurple-100 text-2xl xs:text-3xl"
		/>

		<div className="results py-3 grid grid-cols-1 sm:grid-cols-3 text-xl ">
			{/* experiment with stacked layout */}
			<div className="player-shot order-1 mx-auto sm:mx-0">
				<div className="flex flex-col text-center ">
					<div className="player">
						<FaUser className="relative text-[22px] top-[-4px] text-[#25d5f4cc]"/> Your Shot
					</div>
					{ getShotOutput( game.playerShot ) }
				</div>
			</div>
			{/* <div className="player-shot order-1 mx-auto sm:mx-0">
				<FaUser className="relative text-[22px] top-[-4px] text-[#25d5f4cc]"/> Player Shot: { getShotOutput( game.playerShot ) }
			</div> */}
			<div className="game-winner xs:text-center justify-center order-3 xs:order-2 text-2xl font-brand mx-auto sm:mx-0 xs:text-3xl xs:min-h-[56px] mt-2">
				{ getWinnerText( game.winner ) }
			</div>

			<div className="cpu-shot xs:text-right order-2 xs:order-3 mx-auto sm:mx-0">
				<div className="flex flex-col text-center ">
					<div className="cpu">
						<FaUser className="relative text-[22px] top-[-4px] text-[#FF7003ee]"/> CPU Shot
					</div>
					{ getShotOutput( game.cpuShot ) }
				</div>
			</div>

			{/* <div className="cpu-shot xs:text-right order-2 xs:order-3 mx-auto sm:mx-0">
				<FaRobot className="relative text-[26px] top-[-4px] text-[#FF7003ee]"/> CPU Shot: { getShotOutput( game.cpuShot ) }
			</div> */}
		</div>

		<RPSPageBreak text={<><FaRegHandRock/> <FaRegHandPaper/> <FaRegHandScissors/></>}/>

		<div className="player-shot-controls pt-2 xs:pt-8 grid grid-cols-3 gap-4 sm:gap-8 items-center max-w-2xl mx-auto">
			<button
				className="rock
				player-shoot items-center
				border rounded-md text-center disabled:cursor-not-allowed disabled:opacity-50
				text-retropurple-600 border-retropurple-600
				hover:text-retropurple-100 hover:bg-retropurple-600
				hover:disabled:text-retropurple-600 hover:disabled:bg-inherit hover:disabled:border-retropurple-600
				dark:text-retropurple-100 dark:border-retropurple-100
				dark:hover:bg-retropurple-600
				dark:disabled:bg-retropurple-500
				dark:hover:disabled:text-retropurple-100 dark:hover:disabled:border-retropurple-100 dark:hover:disabled:bg-retropurple-500
				"
				onClick={ (event) => playerShoot( 'rock', event ) }
			>
				<FaRegHandRock size={shotIconSize} className="stroke inline-block rock"/>
				<FaHandRock size={shotIconFillSize} className="fill inline-block rock"/>
				<span className="button-text font-brand block pt-2">Rock</span>
			</button>

			<button
				className="paper
				player-shoot items-center
				border rounded-md text-center disabled:cursor-not-allowed disabled:opacity-50
				text-retropurple-600 border-retropurple-600
				hover:text-retropurple-100 hover:bg-retropurple-600
				hover:disabled:text-retropurple-600 hover:disabled:bg-inherit hover:disabled:border-retropurple-600
				dark:text-retropurple-100 dark:border-retropurple-100
				dark:hover:bg-retropurple-600
				dark:disabled:bg-retropurple-500
				dark:hover:disabled:text-retropurple-100 dark:hover:disabled:border-retropurple-100 dark:hover:disabled:bg-retropurple-500
				"
				onClick={ (event) => playerShoot( 'paper', event ) }
			>
				<FaRegHandPaper size={shotIconSize} className="stroke inline-block paper"/>
				<FaHandPaper size={shotIconFillSize} className="fill inline-block paper"/>
				<span className="button-text font-brand block pt-2">Paper</span>
			</button>

			<button
				className="scissors
				player-shoot items-center
				border rounded-md text-center disabled:cursor-not-allowed disabled:opacity-50
				text-retropurple-600 border-retropurple-600
				hover:text-retropurple-100 hover:bg-retropurple-600
				hover:disabled:text-retropurple-600 hover:disabled:bg-inherit hover:disabled:border-retropurple-600
				dark:text-retropurple-100 dark:border-retropurple-100
				dark:hover:bg-retropurple-600
				dark:disabled:bg-retropurple-500
				dark:hover:disabled:text-retropurple-100 dark:hover:disabled:border-retropurple-100 dark:hover:disabled:bg-retropurple-500
				"
				onClick={ (event) => playerShoot( 'scissors', event ) }
			>
				<FaRegHandScissors size={shotIconSize} className="stroke inline-block scissors"/>
				<FaHandScissors size={shotIconFillSize} className="fill inline-block scissors"/>
				<span className="button-text font-brand block pt-2">Scissors</span>
			</button>
		</div>

		<div className="game-actions flex flex-row mx-auto max-w-[60%] xs:max-w-[40%] items-center justify-center">
			<button onClick={ () => resetGame() } className="play-again invisible flex-grow mt-8 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-center border rounded-md
				 text-retropurple-600 border-retropurple-600
				 hover:text-retropurple-100 hover:bg-retropurple-600
				 dark:text-retropurple-100 dark:border-retropurple-100
				 dark:hover:bg-retropurple-600
			 "
				>
				<span className="button-text">Play Again</span> <span className="button-icon relative top-[-2px]"><MdDoubleArrow size={20} /></span>
			</button>
		</div>

		<RPSPageBreak text={<><FaRegHandRock/> <FaRegHandPaper/> <FaRegHandScissors/></>}/>
	 </article>
  )
}

export default RockPaperScissors;
