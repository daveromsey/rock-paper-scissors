import { Radar } from 'react-chartjs-2';

const StatsPlayerShotCountChart = ( { options, data, chartRef } ) => {

	return (
		<div className="StatsPlayerShotCountChart react-chartjs xs:px-14">
			<Radar
				options={options}
				data={data}
				ref={chartRef}
				className="mt-[-5%] mb-[-20%]"
			/>
		</div>
	);
}

export default StatsPlayerShotCountChart;
