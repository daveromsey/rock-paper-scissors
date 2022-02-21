import AppInitialState from '../../global/AppInitialState'

const getChartPieceColor = (chartPiece, invert = false ) => {
	// TODO: Figure out how to use App context to get state value.
	const appState = JSON.parse( localStorage.getItem("AppState") ) || AppInitialState;

	let theme = appState.theme;

	if ( true === invert ) {
		if ( 'dark' === theme ) {
			theme = 'light';
		} else {
			theme = 'dark';
		}
	}

	switch (chartPiece) {
		case 'angleLines':
		case 'grid':
		case 'ticks':
		case 'legend':
			if ( 'dark' === theme ) {
				return '#e7e7e7';
			} else {
				return 'rgba( 0,0,0,.35)';
			}

		case 'pointLabels':
		default:
			if ( 'dark' === theme ) {
				return '#e7e7e7';
			} else {
				return '#000';
			}
	}
}

// Options for Shot Percentages Radar Charts.
const ChartShotPctOptions = {
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
				color: getChartPieceColor('angleLines'),
				//color: 'rgba( 0,0,0,.35)',
			},
			pointLabels: {
				font:  {
					size: 16,
				},
				color: getChartPieceColor('pointLabels'),
				//color: '#000',
			},
			//display: false,
			grid: {
				color: getChartPieceColor('grid'),
				//color: 'rgba( 0,0,0,.35)',
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
				color: getChartPieceColor('ticks'),
				//color: '#000',
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

export { ChartShotPctOptions, getChartPieceColor };