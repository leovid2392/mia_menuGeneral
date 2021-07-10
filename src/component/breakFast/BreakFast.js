import React from "react";

import "./breakFast.css";

function BreakFast({ img }) {
	return (
		<>
			<figure className='menu_img'>
				<img src={img} alt='menu desayuno' />
			</figure>
		</>
	);
}

export default BreakFast;
