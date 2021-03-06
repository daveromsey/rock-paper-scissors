import React from 'react';
import { GiCrossedPistols } from "react-icons/gi";

const WinnerDraw = () => {
	const drawIcon = <GiCrossedPistols className="relative spin top-[-4px]"/>;

	return (
		<span className="WinnerDraw">
			{drawIcon}<span> Draw </span>{drawIcon}
		</span>
	);
}

export default WinnerDraw;
