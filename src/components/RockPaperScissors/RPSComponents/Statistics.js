import React, {useRef, useEffect } from 'react';

// ChartJS dependencies.
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

// App context. Used for determining which theme is in use.
import { useAppContext } from '../../../global/AppContext';

// Misc. functions.
import { getShotPercentage, updateChartShotPctOptions } from '../RPSFunctions.js';

// Radar chart default options.
import ChartShotPctOptionDefaults from '../ChartShotPctOptionsDefaults';

// Component dependencies.
import RPSHeadingRock from './RPSHeadingRock';
import StatsPlayerHeading from './StatsPlayerHeading';
import StatsPlayerStats from './StatsPlayerStats';
import StatsPlayerShotCountChart from './StatsPlayerShotCountChart';

const Statistics = ( {stats, gamesPlayed} ) => {
	const { getTheme } = useAppContext();
	let theme = getTheme();

	// ChartJS registration.
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

	// Radar chart references used when updating charts (e.g. theme color change).
	const playerChartReference = useRef(true);
	const cpuChartReference = useRef(true);
	let ChartShotPctOptions = updateChartShotPctOptions( ChartShotPctOptionDefaults, theme );

	// Update charts using new options when the theme is changed.
	useEffect( () => {
		let options = updateChartShotPctOptions( ChartShotPctOptions, theme, false );

		playerChartReference.current.options = options;
		playerChartReference.current.update();

		cpuChartReference.current.options = options;
		cpuChartReference.current.update();
	}, [theme, ChartShotPctOptions ] );

	// Shot use percentages radar chart data.
	const playerDataChartJS = {
		labels: ['Rock', 'Scissors', 'Paper'],
		datasets: [
			{
				label: 'Player',
				data: [
					getShotPercentage( stats.player.shotCounts.rock, gamesPlayed ),
					getShotPercentage( stats.player.shotCounts.scissors, gamesPlayed ),
					getShotPercentage( stats.player.shotCounts.paper, gamesPlayed ),
				],
				borderColor: '#25d4f3',
				backgroundColor: 'rgba(37, 213, 244, 0.424)',
				borderWidth: 2,
				fill: true,
			},
		],
	};

	// Shot use percentages radar chart data.
	const cpuDataChartJS = {
		labels: ['Rock', 'Scissors', 'Paper'],
		datasets: [
			{
				label: 'CPU',
				data: [
					getShotPercentage( stats.cpu.shotCounts.rock, gamesPlayed ),
					getShotPercentage( stats.cpu.shotCounts.scissors, gamesPlayed ),
					getShotPercentage( stats.cpu.shotCounts.paper, gamesPlayed ),
				],
				borderColor: '#ff9b00',
				backgroundColor: '#FF700377',
				borderWidth: 2,
				fill: true,
			},
		],
	};

	return (
		<section className="statistics">
			<RPSHeadingRock text="Statistics" />
			<div className="statistics-grid grid grid-cols-1 sm:grid-cols-2 text-xl">
				<section className="player-stats xs:pr-2 md:pr-8">
					<StatsPlayerHeading playerName="player" playerNiceName="Player" />
					<StatsPlayerStats playerName="player" stats={stats.player} />
					<StatsPlayerShotCountChart
						options={ChartShotPctOptions}
						data={playerDataChartJS}
						chartRef={playerChartReference}
					/>
				</section>
				<section className="cpu-stats xs:pl-2 md:pl-8">
					<StatsPlayerHeading playerName="cpu" playerNiceName="CPU" />
					<StatsPlayerStats playerName="cpu" stats={stats.cpu} />
					<StatsPlayerShotCountChart
						options={ChartShotPctOptions}
						data={cpuDataChartJS}
						chartRef={cpuChartReference}
					/>
				</section>
			</div>
		</section>
	);
}

export default Statistics;
