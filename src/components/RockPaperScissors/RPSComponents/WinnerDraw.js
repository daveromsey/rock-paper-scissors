import React from 'react';
import { GiCrossedPistols } from "react-icons/gi";

const WinnerDraw = () => {
	return (
		<span className="winner draw">
			<GiCrossedPistols className="relative top-[-4px]"/>
			<span> Draw </span>
			<GiCrossedPistols className="relative top-[-4px]"/>
		</span>
	);
}

export default WinnerDraw;
