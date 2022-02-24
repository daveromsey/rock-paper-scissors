import React, {useRef, useEffect } from 'react';

import {
	FaGithub,
	// FaMedal,
	// FaAward,
	// FaTrophy,
	// FaRegSadCry,
	// FaCat,
	// FaRegWindowClose,
	// FaWindowClose,
	FaUser,
	FaRobot,
	FaRegHandRock, // Stroke
	FaRegHandPaper, // Stroke
	FaRegHandScissors, // Stroke
	FaHandRock, // Fill
	FaHandPaper, // Fill
	FaHandScissors, // Fill
} from "react-icons/fa";

import { MdDoubleArrow } from "react-icons/md";


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

import { useAppContext } from '../../../global/AppContext';
import { useRPSContext } from '../RPSContext';

import {
	getShotPercentage,
	formatPercentage,
	updateChartShotPctOptions
} from '../RPSFunctions.js';

import RPSHeading from './RPSHeading';
import RPSPageBreak from './RPSPageBreak';

import ChartShotPctOptionDefaults from '../ChartShotPctOptionsDefaults';

const RockPaperScissors = () => {
	const { getTheme } = useAppContext();

	let theme = getTheme();

	const playerChartReference = useRef(true);
	const cpuChartReference = useRef(true);
	let ChartShotPctOptions = updateChartShotPctOptions( ChartShotPctOptionDefaults, theme );

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
				// blue
				// borderColor: 'rgba(16, 190, 229, 1)',
				// backgroundColor: 'rgba(16, 190, 229, .2)',
				// purple
				// borderColor: '#B362AC',
				// backgroundColor: '#B362AC77',
				// yellow
				// borderColor: 'rgb(255, 255, 0)',
				// backgroundColor: 'rgba(255, 255, 0, .5)',
				// blue 2
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
				// borderColor: 'rgba(255, 99, 132, 1)',
				// backgroundColor: 'rgba(255, 99, 132, 0.2)',
				borderColor: '#ff9b00',
				backgroundColor: '#FF700377',
				borderWidth: 2,
				fill: true,
			},
		],
	};

	const shotIconSize = 55;
	const shotIconFillSize = 48;

  return (
	<article className="rock-paper-scissors">

		<RPSHeading/>

		<RPSPageBreak
			text="Scoreboard"
			extraTextClassName="px-4"
			textBefore={<><FaRegHandRock className="rock"/></>}
			textAfter={<><FaRegHandRock className="rock right"/></>}
			extraContentClassName="text-retropurple-600 dark:text-retropurple-100 text-3xl"
		/>

		<div className="scoreboard">
			{/* <h2>Scoreboard</h2> */}
			<div className="games-played text-4xl">
				<span className="stat-label">Games Played: </span><span className="font-digital-italic lcd">{gamesPlayed}</span>
			</div>
			<div className="games-results grid grid-cols-1 xs:grid-cols-3 text-2xl">
				<p className="wins">
					<span className="stat-label">Wins: </span><span className="font-digital-italic lcd">{stats.player.winTotal}</span>
				</p>
				<p className="losses xs:text-center">
					<span className="stat-label">Losses: </span><span className="font-digital-italic lcd">{stats.player.lossTotal}</span>
				</p>
				<p className="draws xs:text-right">
					<span className="stat-label">Draws: </span><span className="font-digital-italic lcd">{stats.player.drawTotal}</span>
				</p>
			</div>
		</div>

		<RPSPageBreak text={<><FaRegHandRock/></>}/>

		<div className="stats">
			{/* <h2>Stats</h2> */}
			<div className="grid grid-cols-1 xsm:grid-cols-2 sm:grid-cols-2 text-xl">

				<div className="player-stats xs:pr-2 md:pr-8">
					<h2 className="player-stats-heading text-2xl text-center pb-4 mb-4">
						<span className="border-b border-retropurple-100/50 pb-1">
							<FaUser className="relative text-[22px] top-[-4px] text-[#25d5f4ee]"/> Player Stats
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
					<div className="xs:px-10 react-chartjs">
						<Radar
							options={ChartShotPctOptions}
							data={playerDataChartJS}
							ref={playerChartReference}
						/>
					</div>
				</div>

				<div className="cpu-stats xs:pl-2 md:pl-8">
					<h2 className="player-stats-heading text-2xl text-center pb-4 mb-4">
						<span className="border-b border-retropurple-100/50 pb-1">
							<FaRobot className="relative text-[26px] top-[-4px] text-[#FF7003ee]"/> CPU Stats
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
					<div className="xs:px-10 react-chartjs">
						<Radar
						options={ChartShotPctOptions}
						data={cpuDataChartJS}
						ref={cpuChartReference}
						/>
					</div>
				</div>
			</div>

			{/* <div className="grid grid-cols-1 xsm:grid-cols-2 sm:grid-cols-2 text-xl">
				<div className="px-8 react-chartjs">
					<Radar
						options={ChartShotPctOptions}
						data={playerDataChartJS}
						ref={playerChartReference}
					/>
				</div>
				<div className="px-8 react-chartjs">
					<Radar
						options={ChartShotPctOptions}
						data={cpuDataChartJS}
						ref={cpuChartReference}
					/>
				</div>
			</div> */}

		</div>

		<RPSPageBreak text={<><FaRegHandPaper/></>}/>

		<div className="results">
			<h2>Results</h2>
			<div className="results-grid grid grid-cols-1 xs:grid-cols-3">
				<div className="game-winner">
					<h3>Winner: {game.winner}</h3>
				</div>
				<div className="player-shot">
					Your Shot: {game.playerShot}
				</div>
				<div className="cpu-shot">
					CPU Shot: {game.cpuShot}
				</div>
			</div>
		</div>

		<RPSPageBreak text={<><FaRegHandScissors/></>}/>

		<div className="player-shot-controls pt-2 xs:pt-8 grid grid-cols-3 gap-4 sm:gap-8 items-center max-w-2xl mx-auto">
			<button
				className="player-shoot rock items-center
				border text-retropurple-100 border-retropurple-100 hover:bg-retropurple-600 rounded-md text-center
				disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-retropurple-500
				"
				onClick={ (event) => playerShoot( 'rock', event ) }
			>
				<FaRegHandRock size={shotIconSize} className="stroke inline-block rock"/>
				<FaHandRock size={shotIconFillSize} className="fill inline-block rock"/>
				<span className="button-text font-brand block pt-2">Rock</span>
			</button>

			<button
				className="player-shoot paper items-center
				border text-retropurple-100 border-retropurple-100 hover:bg-retropurple-600 rounded-md text-center
				disabled:cursor-not-allowed disabled:opacity-40 disabled:bg-retropurple-500
				"
				onClick={ (event) => playerShoot( 'paper', event ) }
			>
				<FaRegHandPaper size={shotIconSize} className="stroke inline-block paper"/>
				<FaHandPaper size={shotIconFillSize} className="fill inline-block paper"/>
				<span className="button-text font-brand block pt-2">Paper</span>
			</button>

			<button
				className="player-shoot scissors items-center
				border text-retropurple-100 border-retropurple-100 hover:bg-retropurple-600 rounded-md text-center
				disabled:cursor-not-allowed disabled:opacity-40 disabled:bg-retropurple-500
				"
				onClick={ (event) => playerShoot( 'scissors', event ) }
			>
				<FaRegHandScissors size={shotIconSize} className="stroke inline-block scissors"/>
				<FaHandScissors size={shotIconFillSize} className="fill inline-block scissors"/>
				<span className="button-text font-brand block pt-2">Scissors</span>
			</button>
		</div>

		<div className="game-actions flex flex-row mx-auto max-w-[60%] xs:max-w-[40%] items-center justify-center">
			<button onClick={ () => resetGame() } className="play-again invisible flex-grow mt-8 py-2.5 px-5 mr-2 mb-2 text-sm font-medium
				border text-retropurple-100 border-retropurple-100 hover:bg-retropurple-600 rounded-md text-center
				disabled:cursor-not-allowed disabled:opacity-40 disabled:bg-retropurple-500
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
