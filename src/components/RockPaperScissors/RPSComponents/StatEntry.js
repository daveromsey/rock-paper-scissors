import { formatClassName } from '../RPSFunctions.js';

const StatEntry = ( {
	label,
	value,
	titleAttr = null,
	containerClassName = '',
	extraLabelClasses = '',
	extraValueClasses = '',
} ) => {
	containerClassName = formatClassName( containerClassName );
	extraLabelClasses = formatClassName( extraLabelClasses );
	extraValueClasses = formatClassName( extraValueClasses );

	return (
		<p className={`stat${containerClassName}`} title={titleAttr}>
			<span className={`stat-label${extraLabelClasses}`}>{label}</span>
			<span className={`stat-value font-digital-italic lcd${extraValueClasses}`}>{value}</span>
		</p>
	);
}

export default StatEntry;
