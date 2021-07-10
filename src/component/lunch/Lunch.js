import React from "react";

import "./lunch.css";

function Lunch({ img }) {
	return (
		<figure className='menu_img'>
			<img src={img} alt='menu lunch' />
		</figure>
	);
}

export default Lunch;
