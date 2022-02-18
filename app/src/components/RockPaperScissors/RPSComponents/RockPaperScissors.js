import React from 'react'
import { useRPSContext } from '../RPSContext';
import RPSHeading from './RPSHeading';
import { IconContext } from "react-icons";

import {
	getShotPercentage,
	formatPercentage,
	formatPercentageDecimal,
} from '../RPSFunctions.js';

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


import RadarChart from 'react-svg-radar-chart';
//import 'react-svg-radar-chart/build/css/index.css'
import './radar-chart.scss'




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
import ChartDataLabels from 'chartjs-plugin-datalabels';
const captions = {
	// columns
	rock: 'Rock',
	paper: 'Paper',
	scissors: 'Scissors',
};


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
// const data = [
// 	{
// 		data: {
// 			rock: stats.player.shotCounts.rock / gamesPlayed,
// 			paper: stats.player.shotCounts.paper / gamesPlayed,
// 			scissors: stats.player.shotCounts.scissors / gamesPlayed,
// 		},
// 		meta: { color: '#10bee5' }
// 	},
// 	{
// 		data: {
// 			rock: stats.cpu.shotCounts.rock / gamesPlayed,
// 			paper: stats.cpu.shotCounts.paper / gamesPlayed,
// 			scissors: stats.cpu.shotCounts.scissors / gamesPlayed,
// 		},
// 		meta: { color: 'orange' }
// 	},
// ];

const RockPaperScissors = () => {

	const {
		playerShoot,
		resetGame,
		resetAllRpsData,
		game,
		stats,
		gamesPlayed,
	} = useRPSContext();

	const data = [
		{
			data: {
				rock: stats.player.shotCounts.rock / gamesPlayed,
				paper: stats.player.shotCounts.paper / gamesPlayed,
				scissors: stats.player.shotCounts.scissors / gamesPlayed,
			},
			meta: { color: '#10bee5' }
		},
		{
			data: {
				rock: stats.cpu.shotCounts.rock / gamesPlayed,
				paper: stats.cpu.shotCounts.paper / gamesPlayed,
				scissors: stats.cpu.shotCounts.scissors / gamesPlayed,
			},
			meta: { color: 'orange' }
		},
	];

	//const optionsChartJS = {}
	const optionsChartJS = {
		// layout: {
		// 	autoPadding: true,
		// 	padding: 0,
		// },
		//responsive: false,
		//maintainAspectRatio: true,
		elements: {
			line: {
				borderWidth: 3
			}
		},
		scales: {
			r: {
				// grid: {
        //   color: '#000'
        // },
				ticks: {
					display: false,
					beginAtZero: true,
					max: 100,
					min: 0,
					stepSize: 50,
					backdropColor: 'transparent',
					showLabelBackdrop: true,
					backdropPadding: 1,
					color: '#000',
					padding: 9,
					font: {
						size: 16,
					}
				},
				pointLabels: {
					font:  {
						size: 20,
					},
					color: '#000',
				}
			}
		},
		// layout: {
		// 	// padding: {
		// 	// 	bottom: 0,
		// 	// },
		// 	autoPadding: false,
		// },
		plugins: {
			legend: {
				display: true,
				position: 'top',
				labels: {
					color: '#000',
					font: {
						size: 16
					},
				},
			},
			// title: {
			// 	display: true,
			// 	text: 'Custom Chart title',
			// 	padding: {
			// 		top: 10,
			// 		bottom: 30
			// 	},
			// 	position: 'bottom',
			// },
			// subtitle: {
			// 	display: true,
			// 	text: 'Custom Chart Subtitle',
			// 	position: 'bottom',
			// },
		},

	};

	const dataChartJS2 = {
		labels: [
			'Eating',
			'Drinking',
			'Sleeping',
			'Designing',
			'Coding',
			'Cycling',
			'Running'
		],
		plugins: [ChartDataLabels],
		datasets: [{
			label: 'My First Dataset',
			data: [65, 59, 90, 81, 56, 55, 40],
			fill: true,
			backgroundColor: 'rgba(255, 99, 132, 0.2)',
			borderColor: 'rgb(255, 99, 132)',
			pointBackgroundColor: 'rgb(255, 99, 132)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgb(255, 99, 132)'
		}, {
			label: 'My Second Dataset',
			data: [28, 48, 40, 19, 96, 27, 100],
			fill: true,
			backgroundColor: 'rgba(54, 162, 235, 0.2)',
			borderColor: 'rgb(54, 162, 235)',
			pointBackgroundColor: 'rgb(54, 162, 235)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgb(54, 162, 235)'
		}]
	};

//console.log(typeof( formatPercentageDecimal( getShotPercentage( stats.player.shotCounts.rock, gamesPlayed ) ) ));

	const dataChartJS = {
		labels: ['Rock', 'Paper', 'Scissors'],
		datasets: [
			{
				label: 'Player',
				data: [
					formatPercentageDecimal(
						getShotPercentage( stats.player.shotCounts.rock, gamesPlayed )
					),
					formatPercentageDecimal(
						getShotPercentage( stats.player.shotCounts.paper, gamesPlayed )
					),
					formatPercentageDecimal(
						getShotPercentage( stats.player.shotCounts.scissors, gamesPlayed )
					),

					// ( stats.player.shotCounts.rock / gamesPlayed) *  100,
					// ( stats.player.shotCounts.paper / gamesPlayed) *  100,
					// ( stats.player.shotCounts.scissors / gamesPlayed) *  100,

					// stats.player.shotCounts.rock / gamesPlayed,
					// stats.player.shotCounts.paper / gamesPlayed,
					// stats.player.shotCounts.scissors / gamesPlayed,
				],
				backgroundColor: 'rgba(16, 190, 229, .2)',
				borderColor: 'rgba(16, 190, 229, 1)',
				borderWidth: 2,
				// borderWidth: 2,
				fill: true,
				// backgroundColor: 'rgba(255, 99, 132, 0.2)',
				// borderColor: 'rgb(255, 99, 132)',
				// pointBackgroundColor: 'rgb(255, 99, 132)',
				// pointBorderColor: '#fff',
				// pointHoverBackgroundColor: '#fff',
				// pointHoverBorderColor: 'rgb(255, 99, 132)'
			},
			{
				label: 'CPU',
				data: [
					formatPercentageDecimal(
						getShotPercentage( stats.cpu.shotCounts.rock, gamesPlayed )
					),
					formatPercentageDecimal(
						getShotPercentage( stats.cpu.shotCounts.paper, gamesPlayed )
					),
					formatPercentageDecimal(
						getShotPercentage( stats.cpu.shotCounts.scissors, gamesPlayed )
					),

					// (stats.cpu.shotCounts.rock / gamesPlayed) *  100,
					// (stats.cpu.shotCounts.paper / gamesPlayed) *  100,
					// (stats.cpu.shotCounts.scissors / gamesPlayed) *  100,

					// stats.cpu.shotCounts.rock / gamesPlayed,
					// stats.cpu.shotCounts.paper / gamesPlayed,
					// stats.cpu.shotCounts.scissors / gamesPlayed,
				],
				backgroundColor: 'rgba(255, 99, 132, 0.2)',
				borderColor: 'rgba(255, 99, 132, 1)',
				borderWidth: 2,
				// borderWidth: 2,
				fill: true,
				// backgroundColor: 'rgba(54, 162, 235, 0.2)',
				// borderColor: 'rgb(54, 162, 235)',
				// pointBackgroundColor: 'rgb(54, 162, 235)',
				// pointBorderColor: '#fff',
				// pointHoverBackgroundColor: '#fff',
				// pointHoverBorderColor: 'rgb(54, 162, 235)'
			},
		],
	}

  return (
	<article className="rock-paper-scissors">
		<IconContext.Provider value={{ className: "react-icon icon" }}>
			<RPSHeading/>

			<div className="fancy-hr relative flex py-5 items-center">
				<div className="flex-grow border-t border-gray-400"></div>
				<span className="flex-shrink mx-4 text-gray-400 text-3xl flex items-center">
					<FaRegHandRock className="rock"/>
					<span className="text">&nbsp;&nbsp;Scoreboard&nbsp;&nbsp;</span>
					<FaRegHandRock className="rock right"/>
				</span>
				<div className="flex-grow border-t border-gray-400"></div>
			</div>
			{/* <FaRegHandRock/> <FaRegHandPaper/> <FaRegHandScissors/> */}

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

			<div className="relative flex py-5 items-center">
				<div className="flex-grow border-t border-gray-400"></div>
				<span className="flex-shrink mx-4 text-gray-400"><FaRegHandRock/></span>
				<div className="flex-grow border-t border-gray-400"></div>
			</div>

			<div className="stats">
				<h2>Stats</h2>
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
								<div className="rock">Rock: {stats.player.shotCounts.rock}</div>
								<div className="paper">Paper: {stats.player.shotCounts.paper}</div>
								<div className="scissors">Scissors: {stats.player.shotCounts.scissors}</div>
							</div>
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
								<div className="rock">Rock: {stats.cpu.shotCounts.rock}</div>
								<div className="paper">Paper: {stats.cpu.shotCounts.paper}</div>
								<div className="scissors">Scissors: {stats.cpu.shotCounts.scissors}</div>
							</div>
						</div>
					</div>

				</div>

				{/* <div className="radar-chart pt-8 flex justify-center">
					<div className="radar-chart-container __bg-white inline-block">
						<RadarChart
							captions={captions}
							data={data}
							size={175}
							options={{
								//size: 100,
								scales: 0,
								zoomDistance: .6,
								captionMargin: 10,
								//dots: true,
								captionProps: () => ({
									className: 'caption',
									fontSize: 13,
									textAnchor: 'middle',
									fontFamily: 'monospace'
								}),
							}}
						/>
					</div>
				</div> */}

				<hr className="" />


				 <div className="_flex _justify-center _grid _grid-cols-1  _sm:grid-cols-3">


					<div className="react-chartjs p4 __bg-white mx-auto max-w-sm">
						<Radar
							data={dataChartJS}
							options={optionsChartJS}
							//height={400}
							//width={400}
						/>
					</div>

				</div>
			</div>

			<div className="relative flex py-5 items-center">
				<div className="flex-grow border-t border-gray-400"></div>
				<span className="flex-shrink mx-4 text-gray-400"><FaRegHandPaper/></span>
				<div className="flex-grow border-t border-gray-400"></div>
			</div>

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

			<div className="relative flex py-5 items-center">
				<div className="flex-grow border-t border-gray-400"></div>
				<span className="flex-shrink mx-4 text-gray-400"><FaRegHandScissors/></span>
				<div className="flex-grow border-t border-gray-400"></div>
			</div>

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

			<div className="fancy-hr relative flex py-5 items-center">
				<div className="flex-grow border-t border-gray-400"></div>
				<span className="flex-shrink mx-4 text-gray-400">
					<FaRegHandRock/> <FaRegHandPaper/> <FaRegHandScissors/>
				</span>
				<div className="flex-grow border-t border-gray-400"></div>
			</div>

			<div className="reset-rps">
				<button onClick={ () => resetAllRpsData() } className="do-reset-rps">
					<span className="button-text">Reset All Game Data</span>
				</button>
			</div>
		</IconContext.Provider>
	 </article>
  )
}

export default RockPaperScissors;
