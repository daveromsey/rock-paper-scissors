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


import StatEntry from './StatEntry';
import { FaUser, FaRobot } from "react-icons/fa";

import { useAppContext } from '../../../global/AppContext';
import { useRPSContext } from '../RPSContext';
import StatsPlayerHeading from './StatsPlayerHeading';
import StatsPlayerStats from './StatsPlayerStats';

import {
	getShotPercentage,
	formatPercentage,
	updateChartShotPctOptions,
} from '../RPSFunctions.js';
import ChartShotPctOptionDefaults from '../ChartShotPctOptionsDefaults';

const StatsPlayerShotCountChart = ( { options, data, chartRef } ) => {

	return (
		<div className="player-shot-count-chart xs:px-14 react-chartjs">
			<Radar
				options={options}
				data={data}
				ref={chartRef}
			/>
		</div>
	);
}

export default StatsPlayerShotCountChart;
