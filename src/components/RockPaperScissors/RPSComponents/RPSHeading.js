import React from 'react';
import { formatClassName } from '../RPSFunctions.js';
const RPSHeading = ( {
	containerTag = 'h2',
	text = false,
	extraTextClassName = '',
	textBefore = false,
	textAfter = false,
	extraContainerClassName = '',
	extraContentClassName = 'text-retropurple-600 dark:text-retropurple-100',
	extraLineClassName = 'border-retropurple-600 dark:border-retropurple-100'
} ) => {
	extraContainerClassName = formatClassName(extraContainerClassName);
	extraTextClassName = formatClassName(extraTextClassName);
	extraContentClassName = formatClassName(extraContentClassName);
	extraLineClassName = formatClassName(extraLineClassName);

	return (
		React.createElement(
		`${containerTag}`,
		{ className: `RPSHeading relative flex py-5 items-center${extraContainerClassName}` },
		<>
			<div className={`flex-grow border-t${extraLineClassName}`}></div>
			{
				( false === text && false === textBefore && false === textAfter )
					? <></>
					: <span className={`flex-shrink mx-4 flex items-center${extraContentClassName}`}>
							{textBefore}
							<span className={`text font-brand${extraTextClassName}`}>{text}</span>
							{textAfter}
						</span>
			}
			<div className={`flex-grow border-t${extraLineClassName}`}></div>
		</>
		)
	);
}

export default RPSHeading;
