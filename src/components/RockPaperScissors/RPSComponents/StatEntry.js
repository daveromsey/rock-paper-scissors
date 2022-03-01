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
		<p className={`StatEntry stat${containerClassName}`} title={titleAttr}>
			<span className={`stat-label${extraLabelClasses}`}>{label}</span>
			<span className={`stat-value font-digital-italic lcd bg-black text-[yellow] dark:text-[#ff0000cc] px-[5px] py-px  ${extraValueClasses}`}>{value}</span>
		</p>
	);
}

export default StatEntry;
