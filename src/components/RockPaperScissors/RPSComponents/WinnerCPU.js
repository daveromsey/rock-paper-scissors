import React from 'react';
import { FaRobot } from "react-icons/fa";

const WinnerCPU = () => {
	const cpuIcon = <FaRobot className="laugh text-[#FF7003ee]"/>;
	return (
		<span className="winner cpu">
			{cpuIcon}<span> You Lose </span>{cpuIcon}
		</span>
	);
}

export default WinnerCPU;
