import React from "react";

import breakFastMenu from "../../assets/breakFast.png";
import breakFastMenu2 from "../../assets/breakFast_2.png";

import "./breakFast.css";

function BreakFast() {
	return (
		<>
			<figure className='breakFast_container'>
				<img src={breakFastMenu} alt='menu desayuno' />
			</figure>
			<figure className='breakFast_container'>
				<img src={breakFastMenu2} alt='menu desayuno' />
			</figure>
		</>
	);
}

export default BreakFast;
