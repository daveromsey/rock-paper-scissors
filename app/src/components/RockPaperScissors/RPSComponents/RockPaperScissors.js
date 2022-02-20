import React from 'react';
import { IconContext } from 'react-icons';
import {
	// FaMedal,
	// FaAward,
	// FaTrophy,
	// FaRegSadCry,
	// FaCat,
	// FaRegWindowClose,
	// FaWindowClose,
	// FaRegTrashAlt,
	FaRegHandRock,
	FaRegHandPaper,
	FaRegHandScissors,
	FaHandRock,
	// FaHandPaper,
	// FaHandScissors,
	// FaRedoAlt,
	FaRedo
} from "react-icons/fa";

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

import { useRPSContext } from '../RPSContext';
import {
	getShotPercentage,
	formatPercentage,
} from '../RPSFunctions.js';
import RPSHeading from './RPSHeading';
import RPSPageBreak from './RPSPageBreak';

const RockPaperScissors = () => {
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

	const optionsChartJS = {
		//responsive: false,
		//maintainAspectRatio: true,
		elements: {
			line: {
				borderWidth: 3
			}
		},
		scales: {
			r: {
				// https://www.chartjs.org/docs/latest/axes/radial/
				angleLines: {
          color: 'rgba( 0,0,0,.35)',
        },
				pointLabels: {
					font:  {
						size: 16,
					},
					color: '#000',
				},
				//display: false,
				grid: {
					color: 'rgba( 0,0,0,.35)',
					//circular: true,
        },
				ticks: {
					display: false,
					beginAtZero: true,
					max: 100,
					min: 0,
					stepSize: 25,
					backdropColor: 'transparent',
					showLabelBackdrop: true,
					backdropPadding: 1,
					color: '#000',
					padding: 9,
					font: {
						size: 16,
					}
				},
			}
		},
		layout: {
			// padding: {
			// 	bottom: 220,
			// },
			// autoPadding: false,
		},
		plugins: {
			// https://www.chartjs.org/docs/3.5.0/configuration/tooltip.html
			tooltip: {
				callbacks: {
					label: function(context) {
						let label = context.dataset.label || '';
						if (label) {
							label += ': ';
						}
						if (context.parsed.y !== null) {
							label += new Intl.NumberFormat('en-US', { style: 'percent', maximumFractionDigits: 2, }).format(context.parsed.r);
						}
						return label;
					},
				},
			},
			legend: {
				display: false,
				position: 'top',
				labels: {
					color: '#000',
					font: {
						size: 16
					},
				},
			},
			title: {
				display: false,
				text: 'Shot Usage',
				padding: {
					top: 10,
					bottom: 30
				},
				position: 'bottom',
			},
			subtitle: {
				display: false,
				text: 'Radar Chart',
				position: 'bottom',
			},
		},
	};

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
				backgroundColor: 'rgba(16, 190, 229, .2)',
				borderColor: 'rgba(16, 190, 229, 1)',
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
				backgroundColor: 'rgba(255, 99, 132, 0.2)',
				borderColor: 'rgba(255, 99, 132, 1)',
				borderWidth: 2,
				fill: true,
			},
		],
	};

  return (
	<article className="rock-paper-scissors">
		<IconContext.Provider value={{ className: "react-icon icon" }}>
			<RPSHeading/>

			<RPSPageBreak
				text="Scoreboard"
				extraTextClassName="px-4"
				textBefore={<><FaRegHandRock className="rock"/></>}
				textAfter={<><FaRegHandRock className="rock right"/></>}
				extraContentClassName="text-gray-400 text-3xl"
			/>

			<div className="scoreboard">
				{/* <h2>Scoreboard</h2> */}
				<div className="games-played text-4xl">Games Played:&nbsp;
					<span className="font-digital-italic">{gamesPlayed}</span>
				</div>
				<div className="games-results grid grid-cols-1 xs:grid-cols-3">
					<div className="wins">Wins: {stats.player.winTotal}</div>
					<div className="losses">Losses: {stats.player.lossTotal}</div>
					<div className="draws">Draws: {stats.player.drawTotal}</div>
				</div>
			</div>

			<RPSPageBreak text={<><FaRegHandRock/></>}/>

			<div className="stats">
				{/* <h2>Stats</h2> */}
				<div className="grid grid-cols-1 xsm:grid-cols-2 sm:grid-cols-2">
					<div className="player-stats">
						<h2>Player Stats</h2>
						<div className="stats-wrap grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2">
							<div className="player-stats-1">
								<div className="current-streak" title="Ties are ignored">Win Streak: {stats.player.winStreak}</div>
								<div className="longest-streak" title="Ties are ignored">Longest Streak: {stats.player.longestStreak}</div>
								<div className="win-percentage" title="Based on wins and losses only">Win Percentage { formatPercentage(stats.player.winPercentage) }</div>
							</div>
							<div className="player-stats-2">
								<div className="rock" title="Number of times Rock was used">Rock: {stats.player.shotCounts.rock}</div>
								<div className="paper" title="Number of times Paper was used">Paper: {stats.player.shotCounts.paper}</div>
								<div className="scissors" title="Number of times Scissors was used">Scissors: {stats.player.shotCounts.scissors}</div>
							</div>
						</div>
						<div className="px-8 react-chartjs">
							<Radar
								data={playerDataChartJS}
								options={optionsChartJS}
								/>
						</div>
					</div>

					<div className="cpu-stats">
						<h2>CPU Stats</h2>
						<div className="stats-wrap grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2">
							<div className="cpu-stats-1">
								<div className="current-streak" title="Ties are ignored">Win Streak: {stats.cpu.winStreak}</div>
								<div className="longest-streak" title="Ties are ignored">Longest Streak: {stats.cpu.longestStreak}</div>
								<div className="win-percentage" title="Based on wins and losses only">Win Percentage { formatPercentage(stats.cpu.winPercentage) }</div>
							</div>
							<div className="cpu-stats-2">
							<div className="rock" title="Number of times Rock was used">Rock: {stats.cpu.shotCounts.rock}</div>
								<div className="paper" title="Number of times Paper was used">Paper: {stats.cpu.shotCounts.paper}</div>
								<div className="scissors" title="Number of times Scissors was used">Scissors: {stats.cpu.shotCounts.scissors}</div>
							</div>
						</div>
						<div className="px-8 react-chartjs">
							<Radar
								data={cpuDataChartJS}
								options={optionsChartJS}
								/>
						</div>
					</div>
				</div>
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

			<div className="player-shot-controls grid grid-cols-3 gap-4 items-center max-w-2xl mx-auto">
				<button
					className="player-shoot rock items-center
					text-gray-900 bg-white border border-gray-300 hover:bg-gray-100  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700"
					onClick={ (event) => playerShoot( 'rock', event ) }
				>
					<FaRegHandRock size={70} className="stroke inline-block rock"/>
					<FaHandRock size={58} className="fill inline-block rock"/>
					<span className="button-text block">Rock</span>
				</button>

				<button
					className="player-shoot paper inline-block"
					onClick={ (event) => playerShoot( 'paper', event ) }
				>
					<FaRegHandPaper size={70} className="stroke inline-block paper"/>
					<span className="button-text block">Paper</span>
				</button>

				<button
					className="player-shoot scissors inline-block"
					onClick={ (event) => playerShoot( 'scissors', event ) }
				>
					<FaRegHandScissors size={70} className="stroke inline-block scissors"/>
					<span className="button-text block">Scissors</span>
				</button>
			</div>

			<div className="game-actions flex flex-row mx-auto max-w-[50%] items-center justify-center">
				<button onClick={ () => resetGame() } className="play-again hidden_ invisible flex-grow  mt-4 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
					<span className="button-text">Play Again</span> <FaRedo/>
				</button>
			</div>

			{/* <RPSPageBreak text={<><FaRegHandRock/> <FaRegHandPaper/> <FaRegHandScissors/></>}/>

			<div className="reset-rps">
				<button onClick={ () => resetAllRpsData() } className="do-reset-rps">
					<span className="button-text">Reset All Game Data</span>
				</button>
			</div> */}

			<RPSPageBreak text={<><FaRegHandRock/> <FaRegHandPaper/> <FaRegHandScissors/></>}/>
		</IconContext.Provider>
	 </article>
  )
}

export default RockPaperScissors;
