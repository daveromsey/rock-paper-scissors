const RPSPageBreak = ( {
	text = false,
	extraTextClassName = '',
	textBefore = false,
	textAfter = false,
	extraContentClassName = 'text-gray-400',
	extraLineClassName = 'border-gray-400'
} ) => {
	return (
		<div className="rps-page-break relative flex py-5 items-center">
		<div className={`flex-grow border-t ${extraLineClassName}`}></div>
		{
			( false === text && false === textBefore && false === textAfter )
				? <></>
				: <span className={`flex-shrink mx-4 flex items-center ${extraContentClassName}`}>
						{textBefore}
						<span className={`text ${extraTextClassName}`}>{text}</span>
						{textAfter}
					</span>
		}
		<div className={`flex-grow border-t ${extraLineClassName}`}></div>
	</div>
	);
}
export default RPSPageBreak;
