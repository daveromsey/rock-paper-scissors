// Options for Shot Percentages Radar Charts.
const ChartShotPctOptionDefaults = {
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
					family: '"Paytone One", sans-serif',
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

export default ChartShotPctOptionDefaults;
